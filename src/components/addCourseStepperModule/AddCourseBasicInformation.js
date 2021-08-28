import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import parse from "html-react-parser";

function AddCourseBasicInformation({ onBasicInfoChange }) {
  const [info, setInfo] = useState(initObj);

  const onInfoChange = (e) => {
    const payload = { ...info, [e.target.name]: e.target.value };
    setInfo(payload);
    onBasicInfoChange(payload);
  };

  const onDescriptionChange = (value) => {
    const payload = { ...info, description: value };
    setInfo(payload);
    onBasicInfoChange(payload);
  };

  return (
    <div>
      <div class="card mb-3 ">
        <div class="card-header border-bottom px-4 py-3">
          <h4 class="mb-0">Basic Information</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="courseTitle" class="form-label">
              Course Title
            </label>
            <input
              name="name"
              onChange={onInfoChange}
              value={info.name}
              id="courseTitle"
              class="form-control"
              type="text"
              placeholder="Course Title"
            />
            <small>Write a 60 character course title.</small>
          </div>
          <div class="mb-3">
            <label class="form-label">Courses category</label>
            <div class="dropdown bootstrap-select" style={{ width: "100%" }}>
              <select
                name="category"
                onChange={onInfoChange}
                class="form-select  mb-3"
                value={info.category}
              >
                <option value="">Select category</option>
                <option value="React">React</option>
                <option value="Javascript">Javascript</option>
                <option value="HTML">HTML</option>
                <option value="Vue">Vue js</option>
                <option value="Gulp">Gulp js</option>
              </select>

              <div class="dropdown-menu ">
                <div
                  class="inner show"
                  role="listbox"
                  id="bs-select-1"
                  tabindex="-1"
                >
                  <ul class="dropdown-menu inner show" role="presentation"></ul>
                </div>
              </div>
            </div>
            <small className="my-5">
              Help people find your courses by choosing categories that
              represent your course.
            </small>
          </div>
          <div class="mb-3">
            <label class="form-label">Courses level</label>
            <div class="dropdown bootstrap-select" style={{ width: "100%" }}>
              <select
                name="level"
                onChange={onInfoChange}
                class="form-select  mb-3"
                value={info.level}
              >
                <option value="">Select level</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Beignners">Beignners</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>
          <div>
            <label class="form-label">Price</label>
            <input
              name="price"
              onChange={onInfoChange}
              value={info.price}
              id="courseTitle"
              class="form-control"
              type="number"
              placeholder="Price"
              min="0"
              max="9999"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Course Description</label>
            <ReactQuill
              theme="snow"
              value={info.description}
              onChange={onDescriptionChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCourseBasicInformation;

const initObj = {
  description: "",
  name: "",
  level: "",
  category: "",
  price: 0,
};
