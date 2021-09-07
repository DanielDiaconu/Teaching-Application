import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Avatars = [
  "avatar-1.jpg",
  "avatar-2.jpg",
  "avatar-3.jpg",
  "avatar-4.jpg",
  "avatar-5.jpg",
  "avatar-6.jpg",
  "avatar-7.jpg",
  "avatar-8.jpg",
  "avatar-9.jpg",
  "avatar-10.jpg",
];
function UserEditProfile({ onAvatarChange }) {
  const userStorage = JSON.parse(sessionStorage.getItem("user"));
  const [userEditInfo, setUserEditInfo] = useState(userStorage);
  const [avatarImg, setAvatarImg] = useState(0);

  const onUserEditInfoChange = (e) => {
    setUserEditInfo({ ...userEditInfo, [e.target.name]: e.target.value });
  };
  const getCurrentAvatar = () => {
    const currentAvatar = Avatars.findIndex(
      (el) => el === userEditInfo.thumbnail
    );
    setAvatarImg(currentAvatar);
  };

  const generateNewAvatar = () => {
    if (avatarImg < 9) {
      return setAvatarImg((prev) => prev + 1);
    } else {
      setAvatarImg(0);
    }
  };

  const submitUserEditInformation = async (e) => {
    e.preventDefault();
    const payload = { ...userEditInfo, thumbnail: Avatars[avatarImg] };
    await axios.patch(
      `http://localhost:8000/users/${userStorage.id}`,
      payload,
      {
        headers: { "Content-type": "application/json; charset = UTF-8" },
      }
    );
    sessionStorage.setItem("user", JSON.stringify(payload));
    onAvatarChange(payload);
    toast.success("Profile updated!");
  };

  useEffect(() => {
    getCurrentAvatar();
  }, [userEditInfo]);

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      ></ToastContainer>
      <div className="card">
        <div className="card-header">
          <h3 className="mb-0">Profile Details</h3>
          <p className="mb-0">
            You have full control to manage your own account setting.
          </p>
        </div>
        <div className="card-body">
          <div className="d-lg-flex align-items-center justify-content-between">
            <div className="d-flex mb-4 mb-lg-0 flex-column">
              <div className="d-flex align-items-center">
                <img
                  src={`/images/courses/avatars/${Avatars[avatarImg]}`}
                  id="img-uploaded"
                  className="avatar-xl rounded-circle"
                  alt=""
                />
                <div className="ms-3">
                  <h4 className="mb-0">Your avatar</h4>
                  <p className="text-muted">Avatar for your user profile</p>
                </div>
              </div>
              <button
                style={{ alignSelf: "flex-start" }}
                className="next-btn mt-2"
                onClick={generateNewAvatar}
              >
                Generate
              </button>
            </div>
          </div>
          <hr className="my-5" />
          <div>
            <h4 className="mb-0">Personal Details</h4>
            <p className="mb-4">Edit your personal information and address.</p>
            <form className="row">
              <div className="mb-3 col-12 col-md-6">
                <label className="form-label" htmlFor="fname">
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="firstName"
                  className="form-control"
                  placeholder="First Name"
                  required=""
                  value={userEditInfo.firstName}
                  onChange={onUserEditInfoChange}
                />
              </div>
              <div className="mb-3 col-12 col-md-6">
                <label className="form-label" htmlFor="lname">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  className="form-control"
                  placeholder="Last Name"
                  required=""
                  onChange={onUserEditInfoChange}
                  value={userEditInfo.lastName}
                  name="lastName"
                />
              </div>
              <div className="mb-3 col-12 col-md-6">
                <label className="form-label" htmlFor="phone">
                  Phone
                </label>
                <input
                  onChange={onUserEditInfoChange}
                  type="text"
                  id="phone"
                  className="form-control"
                  placeholder="Phone"
                  required=""
                  value={userEditInfo.phone}
                  name="phone"
                />
              </div>

              <div className="mb-3 col-12 col-md-6">
                <label className="form-label" htmlFor="address">
                  Address Line
                </label>
                <input
                  type="text"
                  id="address"
                  className="form-control"
                  placeholder="Address"
                  required=""
                  onChange={onUserEditInfoChange}
                  name="address"
                  value={userEditInfo.address}
                />
              </div>

              <div className="col-12">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={submitUserEditInformation}
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserEditProfile;
