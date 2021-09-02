import axios from "axios";
import React, { useState } from "react";

function InstructorDashboardAbout({ user }) {
  const [userInfo, setUserInfo] = useState(user);
  const [isEditing, SetIsEditing] = useState(false);

  const onUserDescriptionChange = (e) => {
    setUserInfo({ ...userInfo, description: e.target.value });
  };

  const submituserDescription = async () => {
    await axios.patch(
      `http://localhost:8000/users/${userInfo.id}`,
      {
        description: userInfo.description,
      },
      {
        headers: { "Content-type": "application/json; charset = UTF-8" },
      }
    );

    sessionStorage.setItem(
      "user",
      JSON.stringify({
        ...userInfo,
      })
    );

    SetIsEditing((prev) => !prev);
  };

  return (
    <div className="col-12 col-lg-6">
      <div className="card border-0 mb-4 ">
        <div className="card-body" style={{ minHeight: "237px" }}>
          <h4>About me</h4>
          {!isEditing ? (
            <p>{userInfo.description}</p>
          ) : (
            <div className="mb-2">
              <textarea
                name="description"
                onChange={onUserDescriptionChange}
                value={userInfo.description}
                rows="4"
                cols="40"
                autoFocus
                className="form-control"
                placeholder="Enter Description Here"
              ></textarea>
              <button className="next-btn mt-2" onClick={submituserDescription}>
                Save
              </button>
            </div>
          )}
          {!isEditing && (
            <button
              onClick={() => SetIsEditing((prev) => !prev)}
              className="next-btn"
            >
              Change
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default InstructorDashboardAbout;
