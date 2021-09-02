import React, { useState } from "react";
import AddCourseCurriculumChapter from "./AddCourseCurriculumChapter";
import { v4 as uuidv4 } from "uuid";
import AddCourseCurriculumAddChapter from "./AddCourseCurriculumAddChapter";

export default function AddCourseCurriculum({ onNewCourseChapterChange }) {
  const [chapters, setChapters] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const onChapterSectionsUpdate = (id, sections) => {
    const newChapters = chapters.map((chp) => {
      if (chp.id === id) {
        return { ...chp, sections };
      }
      return chp;
    });
    onNewCourseChapterChange(newChapters);
    setChapters(newChapters);
  };

  const onNewChapterAdd = (chapter) => {
    const payload = [...chapters, chapter];
    setChapters(payload);
    onNewCourseChapterChange(payload);
    setIsAdding(false);
  };

  return (
    <div>
      <div className="card mb-3  border-0">
        <div className="card-header border-bottom px-4 py-3 ">
          <h4 className="mb-0">Curriculum</h4>
          <button
            onClick={() => setIsAdding(true)}
            className="btn btn-outline-primary btn-sm mt-5"
          >
            Add Chapter
          </button>
        </div>
        <div className="card-body ">
          {chapters.map((chap) => (
            <AddCourseCurriculumChapter
              chapter={chap}
              key={chap.id}
              onChapterUpdate={onChapterSectionsUpdate}
            />
          ))}
          {isAdding ? (
            <AddCourseCurriculumAddChapter onChapterAdd={onNewChapterAdd} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
