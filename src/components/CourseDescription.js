import React from "react";

function CourseDescription({ courseDescription }) {
  return (
    <>
      <div className="mb-4">
        <h3 className="mb-2">Course Descriptions</h3>
        <p>{courseDescription}</p>
      </div>
      <h4 className="mb-3">What you’ll learn</h4>
      <div className="row mb-3">
        <div className="col-12 col-md-6">
          <ul className="list-unstyled">
            <li className="d-flex mb-2">
              <i className="far fa-check-circle text-success me-2 mt-2"></i>
              <span>
                Recognize the importance of understanding your objectives when
                addressing an audience.
              </span>
            </li>
            <li className="d-flex mb-2">
              <i className="far fa-check-circle text-success me-2 mt-2"></i>
              <span>
                Identify the fundaments of composing a successful close.
              </span>
            </li>
            <li className="d-flex mb-2">
              <i className="far fa-check-circle text-success me-2 mt-2"></i>
              <span>
                Explore how to connect with your audience through crafting
                compelling stories.
              </span>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-6">
          <ul className="list-unstyled">
            <li className="d-flex mb-2">
              <i className="far fa-check-circle text-success me-2 mt-2"></i>
              <span>
                Examine ways to connect with your audience by personalizing your
                content.
              </span>
            </li>
            <li className="d-flex mb-2">
              <i className="far fa-check-circle text-success me-2 mt-2"></i>
              <span>Break down the best ways to exude executive presence.</span>
            </li>
            <li className="d-flex mb-2">
              <i className="far fa-check-circle text-success me-2 mt-2"></i>
              <span>
                Explore how to communicate the unknown in an impromptu
                communication.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CourseDescription;
