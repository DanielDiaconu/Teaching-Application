import React from "react";
import CourseCard from "../CourseCard";

function UserLearning({ enrolled }) {
  return (
    <>
      {enrolled && (
        <div
          class="tab-pane fade active show"
          id="currentlyLearning"
          role="tabpanel"
          aria-labelledby="currentlyLearning-tab"
        >
          <div class="row">
            {enrolled.map((course) => (
              <div key={course.id} class="col-lg-3 col-md-6 col-12">
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default UserLearning;
