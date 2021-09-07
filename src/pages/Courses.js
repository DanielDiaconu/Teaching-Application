import React, { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import CourseFilters from "../components/CourseFilters";
import axios from "axios";
import { useParams } from "react-router";

function Courses() {
  const [courses, setCourses] = useState([]);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [reRender, setReRender] = useState(false);

  const buildQueryParams = (filters) => {
    let url = "?";
    for (let key in filters) {
      if (filters[key] !== "") {
        url += `${key}=${filters[key]}&`;
      }
    }
    return url;
  };

  const handleFiltersChange = async (filters) => {
    let usersResponse = await axios.get("http://localhost:8000/users");

    let res = await axios.get(
      `http://localhost:8000/courses${buildQueryParams(filters)}`
    );
    const coursesWithAuthor = res.data.map((course) => {
      const author = usersResponse.data.find(
        (user) => user.id === course.authorId
      );
      if (author) {
        return {
          ...course,
          authorImage: author.thumbnail,
          authorName: `${author.firstName} ${author.lastName}`,
        };
      }
      return course;
    });

    setCourses(coursesWithAuthor);
  };

  const handleBookmarking = async (id) => {
    let newBookmark = [];
    if (user.bookmarks.includes(id)) {
      newBookmark = user.bookmarks.filter((bookmark) => bookmark !== id);
    } else {
      newBookmark = [...user.bookmarks, id];
    }

    await fetch(`http://localhost:8000/users/${user.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        bookmarks: newBookmark,
      }),
      headers: {
        "Content-type": "application/json; charset = UTF-8",
      },
    });
    sessionStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        bookmarks: newBookmark,
      })
    );
    setReRender((prev) => !prev);
  };

  return (
    <div>
      <div className="bg-primary py-4 py-lg-6">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <div>
                <h1 className="mb-0 text-white display-4">Filter Page</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
              <div className="row d-lg-flex justify-content-between align-items-center">
                <div className="col-md-6 col-lg-8 col-xl-9 ">
                  <h4 className="mb-3 mb-lg-0">
                    Displaying {courses.length} courses
                  </h4>
                </div>
              </div>
            </div>
            <CourseFilters onFiltersChange={handleFiltersChange} />
            <div className="col-xl-9 col-lg-9 col-md-8 col-12">
              <div className="row">
                {courses.map((course, i) => (
                  <div key={i} className="col-lg-4 col-md-6 col-12">
                    <CourseCard
                      course={course}
                      toggleBookmark={handleBookmarking}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;

const initObject = {
  id: 0,
  username: "",
  email: "",
  password: "",
  bookmarks: [],
};
