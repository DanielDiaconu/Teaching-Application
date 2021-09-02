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

  const calculateSectionAddedLength = () => {
    return moment().startOf("day").seconds(section?.length).format("mm:ss");
  };

  useEffect(() => {
    setEditedSection({ ...section });
  }, [section]);

  return (
    <>
      <div className="list-group list-group-flush  border-top-0">
        <div>
          <div className="list-group-item border-transparent rounded px-1 py-2 mb-1">
            <div className="d-flex align-items-center justify-content-between">
              {!isEditing ? (
                <div className="d-flex align-items-center">
                  <h5 className="mb-0">
                    <span className="icon-shape bg-light text-primary icon-sm rounded-circle me-2">
                      <i className="mdi mdi-play fs-4"></i>
                    </span>
                    <span className="align-middle mr-5">{section.title}</span>
                  </h5>
                  <span className="text-truncate ml-5 text-muted">
                    <span>{calculateSectionAddedLength()}</span>
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
                  <button
                    className="btn btn-outline-primary btn-sm ml-5"
                    onClick={onEditedSave}
                  >
                    Save
                  </button>
                </div>
              )}
              <div>
                <span
                  onClick={() => setIsEditing(true)}
                  className="me-1 text-inherit"
                  title="Edit"
                >
                  <i className="fe fe-edit fs-6"></i>
                </span>
                <span
                  className="me-1 text-inherit"
                  title="Delete"
                  onClick={deleteAddedSection}
                >
                  <i className="fe fe-trash-2 fs-6"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
