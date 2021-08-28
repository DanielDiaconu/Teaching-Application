import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddCourseCurriculumAddChapter({ onChapterAdd }) {
  const initChapter = {
    id: uuidv4(),
    title: "",
    sections: [],
  };
  const [chapter, setChapter] = useState(initChapter);

  const onChapterTitleChange = (e) => {
    setChapter({ ...chapter, [e.target.name]: e.target.value });
  };

  const onChaperSave = () => {
    onChapterAdd(chapter);
    setChapter(initChapter);
  };

  return (
    <div className="d-flex flex-column " style={{ width: "40%" }}>
      <label className="form-label">Chapter Title</label>
      <input
        className="form-control"
        type="text"
        name="title"
        value={chapter.title}
        placeholder="Enter Chapter Title"
        onChange={onChapterTitleChange}
      />
      <button
        onClick={onChaperSave}
        class="btn btn-outline-primary btn-sm mt-5"
      >
        Save
      </button>
    </div>
  );
}

export default AddCourseCurriculumAddChapter;
