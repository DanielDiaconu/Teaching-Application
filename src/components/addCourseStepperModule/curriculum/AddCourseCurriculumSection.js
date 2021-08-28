import moment from "moment";
import React from "react";

export default function AddCourseCurriculumSection({
  section,
  handleDeleteAddedSection,
}) {
  const deleteAddedSection = () => {
    handleDeleteAddedSection(section.id);
  };
  return (
    <>
      <div class="list-group list-group-flush  border-top-0">
        <div>
          <div class="list-group-item border-transparent rounded px-1 py-2 mb-1">
            <div class="d-flex align-items-center justify-content-between">
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
              <div>
                <span class="me-1 text-inherit" title="Edit">
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
