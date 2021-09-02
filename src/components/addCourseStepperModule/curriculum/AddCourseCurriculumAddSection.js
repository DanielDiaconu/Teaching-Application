import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddCourseCurriculumAddSection({ sectionAddData }) {
  const [section, setSection] = useState({
    id: uuidv4(),
    title: "",
    length: 0,
  });

  const onSectionSave = () => {
    sectionAddData(section);
    setSection({
      title: "",
      length: 0,
      id: uuidv4(),
    });
  };

  const onAddChange = (e) => {
    setSection({ ...section, [e.target.name]: e.target.value });
  };

  const isDisabled = () => {
    return !section.title || !section.length;
  };

  return (
    <>
      <div className="mt-5" style={{ width: "30%" }}>
        <label className="form-label">Section Title</label>
        <input
          className="form-control form-control-sm"
          onChange={onAddChange}
          value={section.title}
          name="title"
          type="text"
        />
        <label className="form-label">Length</label>
        <input
          className="form-control form-control-sm"
          onChange={onAddChange}
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
    </>
  );
}

export default AddCourseCurriculumAddSection;
