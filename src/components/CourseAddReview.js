import React, { useState } from "react";
const initObject = {
  body: "",
  rating: 0,
};

function CourseAddReview({ submitReview }) {
  const [newReview, setNewReview] = useState(initObject);

  const onInputChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    submitReview(newReview);

    setNewReview({
      body: "",
      rating: 0,
    });
  };

  const isDisabled = () => {
    return !newReview.body || !newReview.rating || newReview.body.length > 1000;
  };

  return (
    <>
      <form onSubmit={handleReviewSubmit} className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3 mt-5">
          <h2 className="h5 m-0">Add a review</h2>
          <select
            style={{ width: "30%" }}
            className="form-select"
            aria-label="Default select example"
            name="rating"
            value={newReview.rating}
            onChange={onInputChange}
          >
            <option defaultValue>Select Rating</option>
            <option value="1">One Star</option>
            <option value="2">Two Stars</option>
            <option value="3">Three Stars</option>
            <option value="4">Four Stars</option>
            <option value="5">Five Stars</option>
          </select>
        </div>
        <textarea
          name="body"
          className="form-control border"
          placeholder="Add a review"
          rows="6"
          data-bind-characters-target="#charactersRemaining"
          maxLength="1000"
          value={newReview.body}
          onChange={onInputChange}
        ></textarea>

        <div className="d-flex justify-content-between mt-3">
          <small className="font-weight-light">
            <span id="charactersRemaining">{1000 - newReview.body.length}</span>
            characters remaining
          </small>
          <button
            type="submit"
            className="btn btn-primary animate-up-2"
            disabled={isDisabled()}
          >
            Add review
          </button>
        </div>
      </form>
    </>
  );
}

export default CourseAddReview;
