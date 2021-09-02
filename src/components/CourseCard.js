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
    return moment().startOf("day").seconds(course?.time).format("H:mm");
  };

  const addToBookmark = () => {
    toggleBookmark(course.id);
  };

  const removeBookmark = () => {
    onBookmarkRemove(course.id);
  };
  return (
    <>
      {course && (
        <div className="card  mb-4 card-hover">
          <Link to={`/course/${course.id}`} className="card-img-top">
            <img
              src={`/images/courses/${course.thumbnail}`}
              alt=""
              className="rounded-top-md card-img-top"
            />
          </Link>
          <div className="card-body">
            <h4 className="mb-2 text-truncate-line-2 ">
              <Link to={`/course/${course.id}`} className="text-inherit">
                {course.name}
              </Link>
            </h4>
            <ul className="mb-3 list-inline">
              <li className="list-inline-item">
                <i className="far fa-clock me-1"></i>
                {calculateCourseTime()}
              </li>
              <li className="list-inline-item">
                <svg
                  className="me-1 mt-n1"
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
            <div className="lh-1">
              <span>
                <i className="mdi mdi-star text-warning me-n1"></i>
                <i className="mdi mdi-star text-warning me-n1"></i>
                <i className="mdi mdi-star text-warning me-n1"></i>
                <i className="mdi mdi-star text-warning me-n1"></i>
                <i className="mdi mdi-star text-warning"></i>
              </span>
              <span className="text-warning">{course.rating}</span>
              <span className="fs-6 text-muted">
                {" "}
                ({course.reviews.length})
              </span>
            </div>
          </div>
          <div className="card-footer">
            <div className="row align-items-center g-0">
              <div className="col-auto">
                <img
                  src={`/images/courses/avatars/${course.authorImage}`}
                  className="rounded-circle avatar-xs"
                  alt=""
                />
                <span className="ml-5">{course.authorName}</span>
              </div>
              <div className="col ms-2">
                <span>{course.reviews.author}</span>
              </div>
              {location.pathname === "/user/dashboard/bookmarks" && (
                <div className="col-auto mr-5" onClick={removeBookmark}>
                  <BsFillTrash2Fill />
                </div>
              )}
              {user && (
                <>
                  {user.bookmarks.includes(course.id) ? (
                    <div className="col-auto" onClick={addToBookmark}>
                      <BsFillBookmarkFill />
                    </div>
                  ) : (
                    <div className="col-auto" onClick={addToBookmark}>
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
