import React, { useEffect, useState } from "react";
import Background from "../images/background/profile-bg.jpg";
import Avatar from "../images/avatar/avatar-img.jpg";
import UserBookmarks from "../components/userModule/UserBookmarks";
import UserLearning from "../components/userModule/UserLearning";
import axios from "axios";
import { Redirect } from "react-router";

function Dashboard() {
  const storageUser = JSON.parse(sessionStorage.getItem("user"));
  const [bookmarked, setBookmarked] = useState([]);
  const [enrolled, setEnrolled] = useState([]);

  const buildQueryParams = (bookmarks) => {
    let url = "?";
    bookmarks.forEach((key) => {
      url += `id=${key}&`;
    });
    return url;
  };

  const buildQueryEnrolledParams = (enrolled) => {
    let url = "?";
    enrolled.forEach((key) => {
      url += `id=${key}&`;
    });
    return url;
  };

  const fetchEnrolledCourses = async () => {
    let data =
      storageUser && storageUser.enrolledCourses.length
        ? await axios.get(
            `http://localhost:8000/courses${buildQueryEnrolledParams(
              storageUser.enrolledCourses
            )}`
          )
        : [];
    setEnrolled(data.data);
  };

  const fetchBookmarkedCourses = async () => {
    let data =
      storageUser && storageUser.bookmarks.length
        ? await axios.get(
            `http://localhost:8000/courses${buildQueryParams(
              storageUser.bookmarks
            )}`
          )
        : [];
    setBookmarked(data.data);
  };

  const removeBookmark = async (id) => {
    const filteredBookmarked = storageUser.bookmarks.filter(
      (item) => item !== id
    );
    await axios.patch(
      `http://localhost:8000/users/${storageUser.id}`,
      {
        bookmarks: filteredBookmarked,
      },
      {
        headers: { "Content-type": "application/json; charset = UTF-8" },
      }
    );

    sessionStorage.setItem(
      "user",
      JSON.stringify({
        ...storageUser,
        bookmarks: filteredBookmarked,
      })
    );

    const filteredBookmarks = bookmarked.filter((item) => item.id !== id);
    setBookmarked(filteredBookmarks);
  };

  useEffect(() => {
    fetchBookmarkedCourses();
    fetchEnrolledCourses();
  }, []);

  if (!storageUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className="pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <div
                className=" pt-16 rounded-top-md "
                style={{
                  background: `url(${Background}) no-repeat`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="d-flex align-items-end justify-content-between bg-white px-4  pt-2 pb-4 rounded-bottom-md shadow-sm ">
                <div className="d-flex align-items-center">
                  <div className="me-2 position-relative d-flex justify-content-end align-items-end mt-n5">
                    <img
                      src={Avatar}
                      className="avatar-xl rounded-circle border border-4 border-white"
                      alt=""
                    />
                  </div>
                  <div className="lh-1">
                    <h2 className="mb-0">
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
                    <p className=" mb-0 d-block">@stellaflores</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-5 py-md-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="nav nav-lb-tab mb-6" id="tab" role="tablist">
                <li className="nav-item ms-0" role="presentation">
                  <a
                    className="nav-link"
                    id="bookmarked-tab"
                    data-bs-toggle="pill"
                    href="#bookmarked"
                    role="tab"
                    aria-controls="bookmarked"
                    aria-selected="false"
                  >
                    Bookmarked{" "}
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="currentlyLearning-tab"
                    data-bs-toggle="pill"
                    href="#currentlyLearning"
                    role="tab"
                    aria-controls="currentlyLearning"
                    aria-selected="true"
                  >
                    Learning
                  </a>
                </li>
              </ul>

              <div className="tab-content" id="tabContent">
                <UserBookmarks
                  data={bookmarked}
                  onBookmarkDelete={removeBookmark}
                />
                <UserLearning enrolled={enrolled} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
