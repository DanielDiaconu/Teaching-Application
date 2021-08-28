import React from "react";
import { useState } from "react";
import AddCourseCurriculumSection from "./AddCourseCurriculumSection";
import { v4 as uuidv4 } from "uuid";
import AddCourseCurriculumAddSection from "./AddCourseCurriculumAddSection";

export default function AddCourseCurriculumChapter({
  chapter,
  onChapterUpdate,
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const newSectionAdd = (section) => {
    setIsAdding(false);
    onChapterUpdate(chapter.id, [...chapter.sections, section]);
  };

  const removeAddedSection = (id) => {
    const filteredSections = chapter.sections.filter(
      (section) => section.id !== id
    );
    onChapterUpdate(chapter.id, filteredSections);
  };

  const editSection = (section) => {
    const newSections = chapter.sections.map((item) => {
      if (item.id === section.id) {
        return { ...section };
      }
      return item;
    });
    onChapterUpdate(chapter.id, newSections);
  };

  return (
    <>
      <div
        onClick={() => setIsCollapsed((prev) => !prev)}
        className=" px-0  mb-5  rounded no-border"
      >
        <a
          className="  h4 mb-0 d-flex align-items-center text-inherit text-decoration-none "
          data-bs-toggle="collapse"
          href={`#chapter-${chapter.id}`}
          aria-expanded="false"
          aria-controls={`chapter-${chapter.id}`}
        >
          <div className="me-auto">{chapter.title}</div>

          {!isCollapsed ? (
            <i className="fe fe-chevron-down fs-4"></i>
          ) : (
            <i className="fe fe-chevron-up fs-4"></i>
          )}
        </a>
        <div
          className="collapse "
          id={`chapter-${chapter.id}`}
          data-bs-parent="#courseAccordion"
        >
          {chapter.sections.map((section, i) => (
            <div className="pt-3 pb-2">
              <AddCourseCurriculumSection
                key={i}
                section={section}
                handleDeleteAddedSection={removeAddedSection}
                handleEditSection={editSection}
              />
            </div>
          ))}
          {isAdding ? (
            <AddCourseCurriculumAddSection sectionAddData={newSectionAdd} />
          ) : (
            <button
              class="btn btn-outline-primary btn-sm "
              onClick={() => setIsAdding(true)}
            >
              Add Section
            </button>
          )}
        </div>
      </div>
    </>
  );
}
