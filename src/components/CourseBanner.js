import React from "react";
import { BsFillBookmarkFill, BsBookmark } from "react-icons/bs";

function CourseBanner({ course, courseSingleBookmark }) {
  const onBookmarkChange = () => {
    courseSingleBookmark(course.id);
  };
  const storageUser = JSON.parse(sessionStorage.getItem("user"));

  return (
    <>
      {course && (
        <div>
          <div className="pt-lg-8 pb-lg-16 pt-8 pb-12 bg-primary">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-7 col-lg-7 col-md-12">
                  <div>
                    <h1 className="text-white display-4 fw-semi-bold">
                      Getting Started with {course.name}
                    </h1>
                    <div className="d-flex align-items-center">
                      {storageUser && (
                        <>
                          {storageUser.bookmarks.includes(course.id) ? (
                            <div
                              style={{ cursor: "pointer" }}
                              onClick={onBookmarkChange}
                              className="bookmark text-white text-decoration-none"
                            >
                              <BsFillBookmarkFill />
                              Bookmark
                            </div>
                          ) : (
                            <div
                              style={{ cursor: "pointer" }}
                              onClick={onBookmarkChange}
                              className="bookmark text-white text-decoration-none"
                            >
                              <BsBookmark />
                              Bookmark
                            </div>
                          )}
                        </>
                      )}

                      <span className="text-white ms-3">
                        <i className="fe fe-user text-white-50"></i>
                        {course.students.length} Enrolled
                      </span>
                      <span className="ms-4">
                        <span className="text-white mr-5">
                          Average Rating : {course.rating.toFixed(1)}
                        </span>
                        <span className="text-white">
                          ({course.reviews.length})
                        </span>
                      </span>
                      <span className="text-white ms-4 d-none d-md-block">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16
                              16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="3"
                            y="8"
                            width="2"
                            height="6"
                            rx="1"
                            fill="#DBD8E9"
                          ></rect>
                          <rect
                            x="7"
                            y="5"
                            width="2"
                            height="9"
                            rx="1"
                            fill="#DBD8E9"
                          ></rect>
                          <rect
                            x="11"
                            y="2"
                            width="2"
                            height="12"
                            rx="1"
                            fill="#DBD8E9"
                          ></rect>
                        </svg>
                        <span className="align-middle">{course.level}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CourseBanner;
