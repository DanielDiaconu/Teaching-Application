import moment from "moment";
import React from "react";

function CourseChapterSection({ section }) {
  const parsedTime = () =>
    moment().startOf("day").seconds(section.length).format("mm:ss");

  return (
    <>
      <div className="mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none">
        <div className="text-truncate">
          <span className="icon-shape bg-light text-primary icon-sm rounded-circle me-2">
            <i className="mdi mdi-play fs-4"></i>
          </span>
          <span>{section.title}</span>
        </div>
        <div className="text-truncate">
          <span>{parsedTime()}</span>
        </div>
      </div>
    </>
  );
}

export default CourseChapterSection;
