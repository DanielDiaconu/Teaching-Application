import moment from "moment";
import React from "react";
import { BsFillTrash2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";

function InstructorDashboardCourseLine({ course, onCourseLineDelete }) {
  const calculateCourseTime = () => {
    return moment().startOf("day").seconds(course?.time).format("H:mm");
  };

  const handleCourseDelete = () => {
    onCourseLineDelete(course.id);
  };

  return (
    <li className="list-group-item px-0 pb-0 pt-3">
      <div className="d-flex align-items-center justify-content-between">
        <Link to={`/course/${course?.id}`}>
          <div className="d-lg-flex align-items-center">
            <div>
              <img
                src={`/images/courses/${course.thumbnail}`}
                alt=""
                className="rounded img-4by3-lg"
              />
            </div>
            <div className="ms-lg-3 mt-2 mt-lg-0">
              <h4 className="text-primary-hover">{course?.name}</h4>
              <ul className="list-inline fs-6 mb-0 text-inherit">
                <li className="list-inline-item">
                  <i className="far fa-clock me-1"></i>
                  {calculateCourseTime()}
                </li>
                <li className="list-inline-item">
                  <svg
                    className="mt-n1"
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
                      fill="#DBD8E9"
                    ></rect>
                  </svg>
                  {course?.level}
                </li>
                <li className="list-inline-item">
                  <i className="mdi mdi-star me-n1 text-warning"></i>
                  <i className="mdi mdi-star me-n1 text-warning"></i>
                  <i className="mdi mdi-star me-n1 text-warning"></i>
                  <i className="mdi mdi-star me-n1 text-light"></i>
                  <i className="mdi mdi-star text-light"></i>
                  <span className="text-warning">{course?.rating}</span>
                  <span className="text-muted ml-5">
                    {course?.reviews?.length}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Link>

        <BsFillTrash2Fill onClick={handleCourseDelete} />
      </div>
    </li>
  );
}

export default InstructorDashboardCourseLine;
