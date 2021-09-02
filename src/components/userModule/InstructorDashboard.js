import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCourses } from "../../services/courses";
import InstructorDashboardAbout from "./InstructorDashboardAbout";
import InstructorDashboardInfo from "./InstructorDashboardInfo";
import InstructorDashboardList from "./InstructorDashboardList";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  DialogContentText,
} from "@material-ui/core";

function InstructorDashboard() {
  const [courses, setCourses] = useState([]);
  const [deletedId, setDeletedId] = useState(null);
  const [open, setOpen] = useState(false);
  const user = JSON.parse(sessionStorage.getItem("user"));

  const getData = async () => {
    const data = await getCourses();
    const filteredCourses = data.filter(
      (course) => course.authorId === user.id
    );
    setCourses(filteredCourses);
  };

  const handleCourseSingleDelete = (id) => {
    setOpen(true);
    setDeletedId(id);
  };

  const confirmCourseDelete = async () => {
    const filteredBookmarks = user.bookmarks.filter(
      (item) => item !== deletedId
    );
    const filteredEnrolledCourses = user.enrolledCourses.filter(
      (item) => item !== deletedId
    );
    await axios.delete(`http://localhost:8000/courses/${deletedId}`);
    await axios.patch(
      `http://localhost:8000/users/${user.id}`,
      {
        bookmarks: filteredBookmarks,
        enrolledCourses: filteredEnrolledCourses,
      },
      {
        headers: { "Content-type": "application/json; charset = UTF-8" },
      }
    );
    sessionStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        bookmarks: filteredBookmarks,
        enrolledCourses: filteredEnrolledCourses,
      })
    );
    const filteredCourses = courses.filter((course) => course.id !== deletedId);
    setCourses(filteredCourses);
    setOpen(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="row">
        <InstructorDashboardAbout user={user} />
        <InstructorDashboardInfo courses={courses} />
      </div>
      <InstructorDashboardList
        courses={courses}
        onCourseLineDelete={handleCourseSingleDelete}
      />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete course from page ?"}
        </DialogTitle>
        <DialogContent>Delete your course from the course list.</DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Disagree
          </Button>
          <Button onClick={confirmCourseDelete} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default InstructorDashboard;
