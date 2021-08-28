import React from "react";

function CourseEnroll({ course, toggleEnrollCourse }) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const enrollCourse = () => {
    toggleEnrollCourse(course.id);
  };
  console.log(user);
  return (
    <>
      {course && (
        <div>
          <div className="card mb-3 mb-4">
            <div className="p-1">
              <div
                className="d-flex justify-content-center position-relative rounded py-10 border-white border rounded-3 bg-cover"
                style={{ backgroundImage: `url =(${course.thumbnail})` }}
              >
                <img className="course-img" src={course.thumbnail} />
                <a
                  className="popup-youtube icon-shape rounded-circle btn-play icon-xl text-decoration-none"
                  href="https://www.youtube.com/watch?v=JRzWRZahOVU"
                >
                  <i className="fe fe-play"></i>
                </a>
              </div>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <span className="text-dark fw-bold h2">${course.price}</span>
                <del className="fs-4 text-muted">$750</del>
              </div>
              {user && (
                <>
                  {user.enrolledCourses.includes(course.id) ? (
                    <div onClick={enrollCourse} className="d-grid">
                      <button className="btn btn-primary mb-2  ">
                        Cancel Course
                      </button>
                    </div>
                  ) : (
                    <div onClick={enrollCourse} className="d-grid">
                      <button className="btn btn-primary mb-2  ">
                        Enroll Course
                      </button>
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

export default CourseEnroll;
