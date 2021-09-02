import React from "react";

function CourseEnroll({ course, toggleEnrollCourse }) {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const enrollCourse = () => {
    toggleEnrollCourse(course.id);
  };
  return (
    <>
      {course && (
        <div>
          <div className="card mb-3 mb-4">
            <div className="p-1">
              <div
                className="d-flex justify-content-center position-relative rounded py-10 border-white border rounded-3 bg-cover"
                style={{
                  backgroundImage: `url("/images/courses/${course.thumbnail}")`,
                }}
              ></div>
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
