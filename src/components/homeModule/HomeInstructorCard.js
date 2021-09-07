import React from "react";

function HomeInstructorCard({ user }) {
  return (
    <>
      <div className="col-lg-4 col-md-12 col-12">
        <div className="card border-0 mb-3" style={{ minHeight: "400px" }}>
          <div className="p-5 text-center">
            <img
              style={{ width: "120px", height: "120px" }}
              src={`/images/courses/avatars/${user?.thumbnail}`}
              alt=""
              className="mb-5 rounded-circle img-fluid"
            />
            <div className="mb-5">
              <h2 className="fw-bold">{`${user?.firstName} ${user?.lastName}`}</h2>
              <p className="mb-0">{user?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeInstructorCard;
