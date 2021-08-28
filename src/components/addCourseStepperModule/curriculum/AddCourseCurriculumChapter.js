import React from "react";
import { useState } from "react";
import AddCourseCurriculumSection from "./AddCourseCurriculumSection";
import { v4 as uuidv4 } from "uuid";

export default function AddCourseCurriculumChapter({ chapter }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [section, setSection] = useState({
    id: uuidv4(),
    title: "",
    length: 0,
  });
  const [sections, setSections] = useState([]);

  const onSectionChange = (e) => {
    setSection({ ...section, id: uuidv4(), [e.target.name]: e.target.value });
  };

  console.log(chapter);

  const onSectionSave = () => {
    setIsEditing(false);
    setSections([...sections, section]);
    setSection({
      title: "",
      length: 0,
    });
  };

  const isDisabled = () => {
    return !section.title || !section.length;
  };

  const removeAddedSection = (id) => {
    const filteredSections = sections.filter((section) => section.id !== id);
    setSections(filteredSections);
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
          {!isEditing &&
            sections.map((section) => (
              <div className="pt-3 pb-2">
                <AddCourseCurriculumSection
                  key={section.id}
                  section={section}
                  handleDeleteAddedSection={removeAddedSection}
                />
              </div>
            ))}
          {isEditing ? (
            <div className="mt-5" style={{ width: "30%" }}>
              <label className="form-label">Section Title</label>
              <input
                className="form-control"
                onChange={onSectionChange}
                value={section.title}
                name="title"
                type="text"
              />
              <label className="form-label">Length</label>
              <input
                className="form-control"
                onChange={onSectionChange}
                value={section.length}
                name="length"
                type="number"
                min="0"
              />
              <button
                disabled={isDisabled()}
                class="btn btn-outline-primary btn-sm mt-2"
                onClick={onSectionSave}
              >
                Save
              </button>
            </div>
          ) : (
            <button
              class="btn btn-outline-primary btn-sm "
              onClick={() => setIsEditing(true)}
            >
              Add Section
            </button>
          )}
        </div>
      </div>
    </>
  );
}
