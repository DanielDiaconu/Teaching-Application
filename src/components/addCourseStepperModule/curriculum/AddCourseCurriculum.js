import React, { useState } from "react";
import AddCourseCurriculumChapter from "./AddCourseCurriculumChapter";
import { v4 as uuidv4 } from "uuid";

export default function AddCourseCurriculum() {
  const [chapters, setChapters] = useState([]);
  const [chapter, setChapter] = useState(initChapters);
  const [isEditing, setIsEditing] = useState(false);

  const onChapterTitleChange = (e) => {
    setChapter({ ...chapter, [e.target.name]: e.target.value });
  };

  const onChaperSave = () => {
    setIsEditing(false);
    setChapters([...chapters, chapter]);
  };

  console.log(chapters);

  return (
    <div>
      <div class="card mb-3  border-0">
        <div class="card-header border-bottom px-4 py-3">
          <h4 class="mb-0">Curriculum</h4>
        </div>
        <div class="card-body ">
          {chapters.map((chap) => (
            <AddCourseCurriculumChapter chapter={chap} key={chap.id} />
          ))}
          {isEditing ? (
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
                {" "}
                Save
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                class="btn btn-outline-primary btn-sm mt-5"
              >
                Add Chapter
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const initChapters = [
  {
    id: uuidv4(),
    title: "",
    sections: [
      {
        id: uuidv4(),
        title: "",
        length: 0,
      },
      {
        id: uuidv4(),
        title: "",
        length: 0,
      },
      {
        id: uuidv4(),
        title: "",
        length: 0,
      },
    ],
  },
];
