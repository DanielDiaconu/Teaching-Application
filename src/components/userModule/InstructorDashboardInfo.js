import React, { useEffect, useState } from "react";

function InstructorDashboardInfo({ courses }) {
  const [reviewsCount, setReviewsCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);

  useEffect(() => {
    let students = 0;
    let reviews = 0;
    courses?.forEach((course) => {
      students += course.students.length;
      reviews += course.reviews.length;
    });
    setReviewsCount(reviews);
    setStudentsCount(students);
  }, [courses]);

  return (
    <div className="col-12 col-lg-6">
      <div className="card border-0 mb-4 instructor-info ">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
            <div>
              <h4 className="mb-0 fw-bold">{courses?.length}</h4>
              <p className="fs-6 mb-0">Courses</p>
            </div>
            <div>
              <span>
                <i className="fe fe-file-text fs-3"></i>
              </span>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
            <div>
              <h4 className="mb-0 fw-bold">{studentsCount}</h4>
              <p className="fs-6 mb-0">Total Students</p>
            </div>
            <div>
              <span>
                <i className="fe fe-users fs-3"></i>
              </span>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h4 className="mb-0 fw-bold">{reviewsCount}</h4>
              <p className="fs-6 mb-0">Reviews</p>
            </div>
            <div>
              <span>
                <i className="fe fe-star fs-3"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorDashboardInfo;
