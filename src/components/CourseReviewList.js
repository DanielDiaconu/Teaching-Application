import React, { useState } from "react";
import { Link } from "react-router-dom";
import CourseAddReview from "./CourseAddReview";
import CourseReview from "./CourseReview";

export default function CourseReviewList({
  reviews,
  handleReviewObject,
  deleteReviewFromList,
  searchItems,
  updateReviewsLike,
  handleAddToBookmark,
}) {
  const [search, setSearch] = useState("");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const emitReviewObject = (review) => {
    handleReviewObject(review);
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    searchItems(e.target.value);
  };

  const deleteReview = (id) => {
    deleteReviewFromList(id);
  };

  const addReviewLike = (review, like) => {
    updateReviewsLike(review, like);
  };

  return (
    <>
      <div className="mb-3">
        <div className="d-lg-flex align-items-center justify-content-between mb-5">
          <div className="mb-3 mb-lg-0">
            <h3 className="mb-0">Reviews</h3>
          </div>
          <div>
            <form className="form-inline">
              <div className="d-flex align-items-center me-2">
                <span className="position-absolute ps-3">
                  <i className="fe fe-search"></i>
                </span>
                <input
                  value={search}
                  onChange={onSearchChange}
                  type="text"
                  className="form-control ps-6"
                  placeholder="Search Review"
                />
              </div>
            </form>
          </div>
        </div>
        {user ? (
          <CourseAddReview submitReview={emitReviewObject} />
        ) : (
          <h4 className="mb-5">
            To add a review please <Link to="/signin"> sign in</Link>.
          </h4>
        )}
        {reviews &&
          reviews.map((review) => (
            <CourseReview
              review={review}
              key={review.id}
              handleReviewDelete={deleteReview}
              handleReviewLike={addReviewLike}
            />
          ))}
      </div>
    </>
  );
}
