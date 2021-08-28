import moment from "moment";
import React, { useEffect, useState } from "react";

export default function AddCourseCurriculumSection({
  section,
  handleDeleteAddedSection,
  handleEditSection,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedSection, setEditedSection] = useState({
    title: "",
    length: 0,
    id: 0,
  });

  const deleteAddedSection = () => {
    handleDeleteAddedSection(section.id);
  };

  const onEditedSectionChange = (e) => {
    setEditedSection({ ...editedSection, [e.target.name]: e.target.value });
  };

  const onEditedSave = () => {
    handleEditSection(editedSection);
    setIsEditing(false);
  };
  console.log(section);

  useEffect(() => {
    setEditedSection({ ...section });
  }, [section]);

  return (
    <>
      <div class="list-group list-group-flush  border-top-0">
        <div>
          <div class="list-group-item border-transparent rounded px-1 py-2 mb-1">
            <div class="d-flex align-items-center justify-content-between">
              {!isEditing ? (
                <div className="d-flex align-items-center">
                  <h5 class="mb-0">
                    <span class="icon-shape bg-light text-primary icon-sm rounded-circle me-2">
                      <i class="mdi mdi-play fs-4"></i>
                    </span>
                    <span class="align-middle mr-5">{section.title}</span>
                  </h5>
                  <span class="text-truncate ml-5 text-muted">
                    <span>{section.length}</span>
                  </span>
                </div>
              ) : (
                <div className="d-flex align-items-center">
                  <input
                    className="form-control form-control-sm mr-5"
                    type="text"
                    name="title"
                    value={editedSection.title}
                    onChange={onEditedSectionChange}
                  />
                  <input
                    className="form-control form-control-sm ml-5"
                    type="number"
                    name="length"
                    value={editedSection.length}
                    onChange={onEditedSectionChange}
                  />
                  <button onClick={onEditedSave}>Save</button>
                </div>
              )}
              <div>
                <span
                  onClick={() => setIsEditing(true)}
                  class="me-1 text-inherit"
                  title="Edit"
                >
                  <i class="fe fe-edit fs-6"></i>
                </span>
                <span
                  class="me-1 text-inherit"
                  title="Delete"
                  onClick={deleteAddedSection}
                >
                  <i class="fe fe-trash-2 fs-6"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
