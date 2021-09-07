import React from "react";
import Avatar from "../images/avatar/avatar-img.jpg";
import { MdDeleteForever } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import moment from "moment";

export default function CourseReview({
  review,
  handleReviewDelete,
  handleReviewLike,
}) {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const deleteReview = () => {
    handleReviewDelete(review.id);
  };

  const parseDate = () => {
    return moment(review.date).fromNow();
  };

  const addReviewLike = (like) => {
    handleReviewLike(review, like);
  };

  const renderHelpfulSection = () => {
    return (
      user && review && review.hasLiked && !review.hasLiked.includes(+user.id)
    );
  };
  return (
    <>
      {review && (
        <div className="d-flex border-bottom pb-4 mb-4">
          <img
            src={`/images/courses/avatars/${review.authorAvatar}`}
            alt=""
            className="rounded-circle avatar-lg"
          />
          <div className=" ms-3">
            <h4 className="mb-1">
              {review.authorName}
              <span className="ms-1 fs-6 text-muted">{parseDate()}</span>
              <span className="ml-15">
                {review.likes}
                <AiFillLike />
              </span>
            </h4>
            <div className="fs-6 mb-2 d-flex align-items-center">
              <span>{review.rating} Stars</span>
            </div>
            <div>{review.body}</div>
            {renderHelpfulSection() ? (
              <div className="d-lg-flex">
                <p className="mb-0">Was this review helpful?</p>
                <a
                  onClick={() => addReviewLike(review.likes + 1)}
                  className="btn btn-xs btn-primary ms-lg-3"
                >
                  Yes
                </a>
                <a
                  onClick={() => addReviewLike(review.likes - 1)}
                  className="btn btn-xs btn-outline-white ms-1"
                >
                  No
                </a>
              </div>
            ) : (
              <div className="text-muted mt-2">User has voted.</div>
            )}
          </div>
          {user?.id === review.authorId && (
            <MdDeleteForever
              style={{
                fontSize: "24px",
                marginLeft: "50px",
                position: "absolute",
                right: "20px",
              }}
              onClick={deleteReview}
            />
          )}
        </div>
      )}
    </>
  );
}

// condintie liked userlogged not included in  hasliked review
// update rating general
// search review
