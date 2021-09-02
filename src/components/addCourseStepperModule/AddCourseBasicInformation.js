import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";

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
      <div className="card mb-3 ">
        <div className="card-header border-bottom px-4 py-3">
          <h4 className="mb-0">Basic Information</h4>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="courseTitle" className="form-label">
              Course Title
            </label>
            <input
              name="name"
              onChange={onInfoChange}
              value={info.name}
              id="courseTitle"
              className="form-control"
              type="text"
              placeholder="Course Title"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Courses category</label>
            <div
              className="dropdown bootstrap-select"
              style={{ width: "100%" }}
            >
              <select
                name="category"
                onChange={onInfoChange}
                className="form-select  mb-3"
                value={info.category}
              >
                <option value="">Select category</option>
                <option value="React">React</option>
                <option value="Javascript">Javascript</option>
                <option value="GraphQL">GraphQl</option>
                <option value="Node">Node Js</option>
                <option value="Angular">Angular</option>
                <option value="Phyton">Phyton</option>
                <option value="GatsBy">GatsBy</option>
                <option value="CSS3">CSS3</option>
              </select>

              <div className="dropdown-menu ">
                <div
                  className="inner show"
                  role="listbox"
                  id="bs-select-1"
                  tabIndex="-1"
                >
                  <ul
                    className="dropdown-menu inner show"
                    role="presentation"
                  ></ul>
                </div>
              </div>
            </div>
            <small className="my-5">
              Help people find your courses by choosing categories that
              represent your course.
            </small>
          </div>
          <div className="mb-3">
            <label className="form-label">Courses level</label>
            <div
              className="dropdown bootstrap-select"
              style={{ width: "100%" }}
            >
              <select
                name="level"
                onChange={onInfoChange}
                className="form-select  mb-3"
                value={info.level}
              >
                <option value="">Select level</option>
                <option value="Beginner">Beginners</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>
          <div>
            <label className="form-label">Price</label>
            <input
              name="price"
              onChange={onInfoChange}
              value={info.price}
              id="courseTitle"
              className="form-control"
              type="number"
              placeholder="Price"
              min="0"
              max="9999"
            />
          </div>
          <div className="mb-3 mt-3">
            <label className="form-label">Course Description</label>
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
