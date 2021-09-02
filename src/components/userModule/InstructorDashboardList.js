import React from "react";
import InstructorDashboardCourseLine from "./InstructorDashboardCourseLine";

function InstructorDashboardList({ courses, onCourseLineDelete }) {
  return (
    <>
      <div className="card border-0">
        <div className="card-header">
          <h4 className="mb-0">
            My Courses{" "}
            <span className="text-muted fs-6">({courses?.length})</span>
          </h4>
        </div>

        <div className="card-body pt-0">
          <ul className="list-group list-group-flush">
            {courses?.map((course, courseIdx) => (
              <InstructorDashboardCourseLine
                course={course}
                key={courseIdx}
                onCourseLineDelete={onCourseLineDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default InstructorDashboardList;
