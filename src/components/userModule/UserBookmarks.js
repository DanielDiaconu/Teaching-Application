import React from "react";
import CourseCard from "../CourseCard";

function UserBookmarks({ data, onBookmarkDelete }) {
  const handleBookmarkRemoval = (id) => {
    onBookmarkDelete(id);
  };
  return (
    <>
      <div
        class="tab-pane fade"
        id="bookmarked"
        role="tabpanel"
        aria-labelledby="bookmarked-tab"
      >
        <div class="row">
          {data &&
            data.map((course) => (
              <div key={course.id} class="col-lg-3 col-md-6 col-12">
                <CourseCard
                  course={course}
                  onBookmarkRemove={handleBookmarkRemoval}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default UserBookmarks;
