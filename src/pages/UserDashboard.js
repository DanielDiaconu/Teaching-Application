import React, { useState } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import UserDashboardBanner from "../components/userModule/UserDashboardBanner";
import UserDashboardNav from "../components/userModule/UserDashboardNav";
import UserEditProfile from "../components/userModule/UserEditProfile";
import UserBookmarks from "../components/userModule/UserBookmarks";
import UserLearning from "../components/userModule/UserLearning";
import InstructorDashboard from "../components/userModule/InstructorDashboard";

export default function UserDashboard() {
  let { path } = useRouteMatch();
  const storageUser = JSON.parse(sessionStorage.getItem("user"));
  const [user, setUser] = useState(storageUser);

  const onUserInfoUpdate = (userInfo) => {
    setUser(userInfo);
  };

  if (!storageUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="pt-5 pb-5">
      <div className="container">
        <UserDashboardBanner user={user} />
        <div className="row mt-0 mt-md-4">
          <UserDashboardNav />
          <div className="col-lg-9 col-md-8 col-12">
            <Switch>
              <Route exact path={path}>
                <Redirect to={`${path}/edit-profile`} />
              </Route>
              <Route path={`${path}/edit-profile`}>
                <UserEditProfile onAvatarChange={onUserInfoUpdate} />
              </Route>
              <Route path={`${path}/bookmarks`}>
                <UserBookmarks />
              </Route>
              <Route path={`${path}/enrolled`}>
                <UserLearning />
              </Route>
              <Route path={`${path}/instructor`}>
                <InstructorDashboard />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}
