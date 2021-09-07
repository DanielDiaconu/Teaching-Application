import React, { useEffect, useState } from "react";
import Background from "../../images/background/profile-bg.jpg";

function UserDashboardBanner({ user }) {
  return (
    <div className="row align-items-center">
      <div className="col-xl-12 col-lg-12 col-md-12 col-12">
        <div
          className="pt-16 rounded-top-md"
          style={{
            background: `url(${Background}) no-repeat`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="d-flex align-items-end justify-content-between bg-white px-4 pt-2 pb-4 rounded-none rounded-bottom-md shadow-sm">
          <div className="d-flex align-items-center">
            <div className="me-2 position-relative d-flex justify-content-end align-items-end mt-n5">
              <img
                src={`/images/courses/avatars/${user?.thumbnail}`}
                className="avatar-xl rounded-circle border border-4 border-white"
                alt=""
              />
            </div>
            <div className="lh-1">
              <h2 className="mb-0">{`${user?.firstName} ${user?.lastName}`}</h2>
              <p className="mb-0 d-block">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboardBanner;
