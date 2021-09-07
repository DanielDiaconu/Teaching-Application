import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CourseBanner from "../components/CourseBanner";
import CourseContents from "../components/CourseContents";
import CourseDescription from "../components/CourseDescription";
import CourseEnroll from "../components/CourseEnroll";
import CourseReviewList from "../components/CourseReviewList";
import CourseSingleAuthor from "../components/CourseSingleAuthor";
import { ToastContainer, toast } from "react-toastify";

const initialObject = {
  id: 0,
  price: 0,
  time: 0,
  name: "",
  description: "",
  reviews: [
    {
      id: 0,
      date: "",
      author: " ",
      body: "",
      rating: 0,
      authorId: 0,
    },
  ],
  authorId: 0,
  students: [],
  level: "",
  rating: 0,
  category: "",
  thumbnail: "",
  contents: [
    {
      id: 0,
      title: " ",
      sections: [
        {
          id: 0,
          title: "",
          length: 0,
        },

        {
          id: 0,
          title: "",
          length: 0,
        },

        {
          id: 0,
          title: "",
          length: 0,
        },
      ],
    },
  ],
};

function Course() {
  const [course, setCourse] = useState(initialObject);
  const [reRender, setReRender] = useState(false);
  let { id } = useParams();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [reviewsClone, setReviewsClone] = useState([]);

  const fetchCourse = async () => {
    let res = await axios.get(`http://localhost:8000/courses/${id}`);
    setCourse(res.data);
    setReviewsClone(res.data.reviews);
  };

  const updateReviews = async (review) => {
    const newReviews = [
      ...course.reviews,
      {
        ...review,
        date: new Date().toString(),
        authorName: `${user.firstName} ${user.lastName}`,
        authorAvatar: user.thumbnail,
        authorId: user.id,
        id: Math.floor(Math.random() * 1000),
        likes: 0,
        hasLiked: [],
      },
    ];
    const ratings = newReviews.map((item) => parseInt(item.rating));
    const total = ratings.reduce((a, b) => a + b, 0);
    const average = total / newReviews.length;

    await fetch(`http://localhost:8000/courses/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        rating: average,
        reviews: newReviews,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const newCourse = { ...course, reviews: newReviews, rating: average };
    setCourse(newCourse);
    setReviewsClone(newReviews);
  };

  const searchReviews = (val) => {
    let filteredSearches = [];
    if (val === "") {
      filteredSearches = [...reviewsClone];
    } else {
      filteredSearches = reviewsClone.filter((item) => {
        if (item.body.toLowerCase().includes(val.toLowerCase())) {
          return item;
        }
      });
    }
    setCourse({ ...course, reviews: filteredSearches });
  };

  const deleteReview = async (reviewId) => {
    const filteredReviews = course.reviews.filter(
      (item) => item.id !== reviewId
    );
    const ratings = filteredReviews.map((item) => parseInt(item.rating));
    const total = ratings.reduce((a, b) => a + b, 0);
    const average = total / filteredReviews.length;
    await fetch(`http://localhost:8000/courses/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        rating: average,
        reviews: filteredReviews,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    setCourse({ ...course, reviews: filteredReviews, rating: average });
    setReviewsClone(filteredReviews);
  };

  const handleReviewLikes = async (review, like) => {
    const updatedReview = course.reviews.map((item) => {
      if (item.id === review.id) {
        return {
          ...item,
          likes: like <= 0 ? 0 : like,
          hasLiked: [...item.hasLiked, user.id],
        };
      }
      return item;
    });

    await fetch(`http://localhost:8000/courses/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        reviews: updatedReview,
      }),
      headers: {
        "Content-type": "application/json; charset = UTF-8",
      },
    });
    setCourse({ ...course, reviews: updatedReview });
    setReviewsClone(updatedReview);
  };

  const handleCourseSingleBookmark = async (id) => {
    let newBookMarks = user.bookmarks;
    if (user.bookmarks.includes(id)) {
      newBookMarks = user.bookmarks.filter((bookmark) => bookmark !== id);
    } else {
      newBookMarks = [...user.bookmarks, id];
    }
    await fetch(`http://localhost:8000/users/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        bookmarks: newBookMarks,
      }),
      headers: {
        "Content-type": "application/json; charset = UTF-8",
      },
    });
    sessionStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        bookmarks: newBookMarks,
      })
    );
    setReRender((prev) => !prev);
    if (user.bookmarks.includes(id)) {
      toast.error("Removed from bookmarks!");
    } else {
      toast.success("Added to bookmarks!");
    }
  };

  const handleCourseEnrolling = async (id) => {
    let enrolled = [];
    let students = [];
    if (user.enrolledCourses.includes(id)) {
      enrolled = user.enrolledCourses.filter((item) => item !== id);
    } else {
      enrolled = [...user.enrolledCourses, id];
    }
    if (course.students.includes(user.id)) {
      students = course.students.filter((item) => item !== user.id);
    } else {
      students = [...course.students, user.id];
    }
    await fetch(`http://localhost:8000/users/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        enrolledCourses: enrolled,
      }),
      headers: {
        "Content-type": "application/json; charset = UTF-8",
      },
    });
    await axios.patch(
      `http://localhost:8000/courses/${course.id}`,
      {
        students,
      },
      {
        headers: {
          "Content-type": "application/json; charset = UTF-8",
        },
      }
    );

    setCourse({ ...course, students });

    sessionStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        enrolledCourses: enrolled,
      })
    );
    setReRender((prev) => !prev);

    if (user.enrolledCourses.includes(id)) {
      toast.error(`You have unsubscribed from ${course.name}`);
    } else {
      toast.success(`You have enrolled to ${course.name}`);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, [id]);

  return (
    <div>
      <CourseBanner
        course={course}
        courseSingleBookmark={handleCourseSingleBookmark}
      />
      <ToastContainer
        position="bottom-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />

      <div className="pb-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-12 mt-n8 mb-4 mb-lg-0">
              <div className="card rounded-3">
                <div className="card-header border-bottom-0 p-0">
                  <div>
                    <ul className="nav nav-lb-tab" id="tab" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link "
                          id="table-tab"
                          data-bs-toggle="pill"
                          href="#table"
                          role="tab"
                          aria-controls="table"
                          aria-selected="true"
                        >
                          Contents
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="description-tab"
                          data-bs-toggle="pill"
                          href="#description"
                          role="tab"
                          aria-controls="description"
                          aria-selected="false"
                        >
                          Description
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="review-tab"
                          data-bs-toggle="pill"
                          href="#review"
                          role="tab"
                          aria-controls="review"
                          aria-selected="false"
                        >
                          Reviews
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div className="tab-content" id="tabContent">
                    <div
                      className="tab-pane fade "
                      id="table"
                      role="tabpanel"
                      aria-labelledby="table-tab"
                    >
                      <CourseContents course={course} />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="description"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                    >
                      <CourseDescription
                        courseDescription={course.description}
                      />
                    </div>
                    <div
                      className="tab-pane show active fade"
                      id="review"
                      role="tabpanel"
                      aria-labelledby="review-tab"
                    >
                      <CourseReviewList
                        searchItems={searchReviews}
                        reviews={course.reviews}
                        handleReviewObject={updateReviews}
                        deleteReviewFromList={deleteReview}
                        updateReviewsLike={handleReviewLikes}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12 mt-lg-n22">
              <CourseEnroll
                course={course}
                toggleEnrollCourse={handleCourseEnrolling}
              />

              <CourseSingleAuthor course={course} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
