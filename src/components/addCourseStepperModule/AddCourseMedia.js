import { StepLabel, Stepper, Step } from "@material-ui/core";
import React, { useState } from "react";
import { toBase64 } from "../../helpers/file-converter";

function AddCourseMedia({ onThumbnailChange }) {
  const [selected, setSelected] = useState(null);

  const onImageSelect = (i, img) => {
    onThumbnailChange(img);
    setSelected(i);
  };

  return (
    <div>
      <h1>Select Course Thumbnail</h1>
      <div class="d-flex flex-wrap">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => onImageSelect(i, img)}
            className={`img-card-container ${selected === i ? "selected" : ""}`}
          >
            <img
              className="course-img-select "
              src={`/images/courses/${img}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddCourseMedia;

const images = [
  "course-angular.jpg",
  "course-css.jpg",
  "course-gatsby.jpg",
  "course-javascript.jpg",
  "course-node.jpg",
  "course-react.jpg",
  "course-python.jpg",
  "course-graphql.jpg",
];
