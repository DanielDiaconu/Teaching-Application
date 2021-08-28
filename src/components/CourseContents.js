import React from "react";
import CourseChapter from "./CourseChapter";

function CourseContents({ course }) {
  return (
    <>
      <div className="accordion" id="courseAccordion">
        <div>
          <ul className="list-group list-group-flush">
            {course &&
              course.chapters &&
              course.chapters.map((chapter, i) => (
                <CourseChapter chapter={chapter} key={i} />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CourseContents;
