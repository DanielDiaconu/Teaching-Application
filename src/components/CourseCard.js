import React from "react";
import { Link, useLocation } from "react-router-dom";
import moment from "moment";
import {
  BsFillBookmarkFill,
  BsBookmark,
  BsFillTrash2Fill,
} from "react-icons/bs";

function CourseCard({ course, toggleBookmark, onBookmarkRemove }) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const location = useLocation();

  const calculateCourseTime = () => {
    return moment().startOf("day").seconds(course.time).format("H:mm");
  };

  const addToBookmark = () => {
    toggleBookmark(course.id);
  };

  const removeBookmark = () => {
    onBookmarkRemove(course.id);
  };
  console.log(user);
  return (
    <>
      {course && (
        <div class="card  mb-4 card-hover">
          <Link to={`/course/${course.id}`} class="card-img-top">
            <img
              src={`/images/courses/${course.thumbnail}`}
              alt=""
              class="rounded-top-md card-img-top"
            />
          </Link>
          <div class="card-body">
            <h4 class="mb-2 text-truncate-line-2 ">
              <Link to={`/course/${course.id}`} class="text-inherit">
                {course.name}
              </Link>
            </h4>
            <ul class="mb-3 list-inline">
              <li class="list-inline-item">
                <i class="far fa-clock me-1"></i>
                {calculateCourseTime()}
              </li>
              <li class="list-inline-item">
                <svg
                  class="me-1 mt-n1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="8"
                    width="2"
                    height="6"
                    rx="1"
                    fill="#754FFE"
                  ></rect>
                  <rect
                    x="7"
                    y="5"
                    width="2"
                    height="9"
                    rx="1"
                    fill="#754FFE"
                  ></rect>
                  <rect
                    x="11"
                    y="2"
                    width="2"
                    height="12"
                    rx="1"
                    fill="#754FFE"
                  ></rect>
                </svg>{" "}
                {course.level}
              </li>
            </ul>
            <div class="lh-1">
              <span>
                <i class="mdi mdi-star text-warning me-n1"></i>
                <i class="mdi mdi-star text-warning me-n1"></i>
                <i class="mdi mdi-star text-warning me-n1"></i>
                <i class="mdi mdi-star text-warning me-n1"></i>
                <i class="mdi mdi-star text-warning"></i>
              </span>
              <span class="text-warning">{course.rating}</span>
              <span class="fs-6 text-muted"> ({course.reviews.length})</span>
            </div>
          </div>
          <div class="card-footer">
            <div class="row align-items-center g-0">
              <div class="col-auto">
                <img
                  src={course.authorImage}
                  class="rounded-circle avatar-xs"
                  alt=""
                />
                <span className="ml-5">James Daniel</span>
              </div>
              <div class="col ms-2">
                <span>{course.reviews.author}</span>
              </div>
              {location.pathname === "/user/dashboard" && (
                <div className="col-auto mr-5" onClick={removeBookmark}>
                  <BsFillTrash2Fill />
                </div>
              )}
              {user && (
                <>
                  {user.bookmarks.includes(course.id) ? (
                    <div class="col-auto" onClick={addToBookmark}>
                      <BsFillBookmarkFill />
                    </div>
                  ) : (
                    <div class="col-auto" onClick={addToBookmark}>
                      <BsBookmark />
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CourseCard;
