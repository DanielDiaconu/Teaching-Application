import React, { useEffect, useState } from "react";
import Background from "../../images/background/profile-bg.jpg";

function UserDashboardBanner({ user }) {
  const [data, setData] = useState({});

  const reRender = () => {
    setData(user);
  };

  useEffect(() => {
    reRender();
  });

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
                src={`/images/courses/avatars/${data?.thumbnail}`}
                className="avatar-xl rounded-circle border border-4 border-white"
                alt=""
              />
            </div>
            <div className="lh-1">
              <h2 className="mb-0">
                {`${data?.firstName} ${data?.lastName}`}
                <a
                  href="#"
                  className="text-decoration-none"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-bs-original-title="Beginner"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="8"
                      width="2"
                      height="6"
                      rx="1"
                      fill="#754FFE"
                    ></rect>
                    <rect
                      x="7"
                      y="5"
                      width="2"
                      height="9"
                      rx="1"
                      fill="#DBD8E9"
                    ></rect>
                    <rect
                      x="11"
                      y="2"
                      width="2"
                      height="12"
                      rx="1"
                      fill="#DBD8E9"
                    ></rect>
                  </svg>
                </a>
              </h2>
              <p className="mb-0 d-block">{data?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboardBanner;
