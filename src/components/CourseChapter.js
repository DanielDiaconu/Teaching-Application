import React, { useState } from "react";
import CourseChapterSection from "./CourseChapterSection";

function CourseChapter({ chapter }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <li
        onClick={() => setIsCollapsed((prev) => !prev)}
        className="list-group-item px-0 "
      >
        <a
          className=" h4 mb-0 d-flex align-items-center text-inherit text-decoration-none "
          data-bs-toggle="collapse"
          href={`#chapter-${chapter?.id}`}
          aria-expanded="false"
          aria-controls={`chapter-${chapter?.id}`}
        >
          <div className="me-auto">{chapter?.title}</div>

          {!isCollapsed ? (
            <i className="fe fe-chevron-down fs-4"></i>
          ) : (
            <i className="fe fe-chevron-up fs-4"></i>
          )}
        </a>
        <div
          className="collapse "
          id={`chapter-${chapter?.id}`}
          data-bs-parent="#courseAccordion"
        >
          <div className="pt-3 pb-2">
            {chapter?.sections &&
              chapter?.sections.map((section, i) => (
                <CourseChapterSection key={i} section={section} />
              ))}
          </div>
        </div>
      </li>
    </>
  );
}

export default CourseChapter;
