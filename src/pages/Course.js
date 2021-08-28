import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CourseBanner from "../components/CourseBanner";
import CourseContents from "../components/CourseContents";
import CourseDescription from "../components/CourseDescription";
import CourseEnroll from "../components/CourseEnroll";
import CourseReviewList from "../components/CourseReviewList";

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
        author: user.username,
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
  };

  console.log(reRender);

  useEffect(() => {
    fetchCourse();
  }, [id]);

  return (
    <div>
      <CourseBanner
        course={course}
        courseSingleBookmark={handleCourseSingleBookmark}
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

              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="position-relative">
                      <img
                        src="../assets/images/avatar/avatar-1.jpg"
                        alt=""
                        className="rounded-circle avatar-xl"
                      />
                      <a
                        href="#"
                        className="position-absolute mt-2 ms-n3"
                        data-bs-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-bs-original-title="Verifed"
                      >
                        <img
                          src="../assets/images/svg/checked-mark.svg"
                          alt=""
                          height="30"
                          width="30"
                        />
                      </a>
                    </div>
                    <div className="ms-4">
                      <h4 className="mb-0">Jenny Wilson</h4>
                      <p className="mb-1 fs-6">Front-end Developer, Designer</p>
                      <span className="fs-6">
                        <span className="text-warning">4.5</span>
                        <span className="mdi mdi-star text-warning me-2"></span>
                        Instructor Rating
                      </span>
                    </div>
                  </div>
                  <div className="border-top row mt-3 border-bottom mb-3 g-0">
                    <div className="col">
                      <div className="pe-1 ps-2 py-3">
                        <h5 className="mb-0">11,604</h5>
                        <span>Students</span>
                      </div>
                    </div>
                    <div className="col border-start">
                      <div className="pe-1 ps-3 py-3">
                        <h5 className="mb-0">32</h5>
                        <span>Courses</span>
                      </div>
                    </div>
                    <div className="col border-start">
                      <div className="pe-1 ps-3 py-3">
                        <h5 className="mb-0">12,230</h5>
                        <span>Reviews</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    I am an Innovation designer focussing on UX/UI based in
                    Berlin. As a creative resident at Figma explored the city of
                    the future and how new technologies.
                  </p>
                  <a
                    href="instructor-profile.html"
                    className="btn btn-outline-white btn-sm"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12 pb-3">
            <div className="row d-md-flex align-items-center mb-4">
              <div className="col-12">
                <h2 className="mb-0">Related Courses</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12"></div>
              <div className="col-lg-3 col-md-6 col-12"></div>
              <div className="col-lg-3 col-md-6 col-12"></div>
              <div className="col-lg-3 col-md-6 col-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
