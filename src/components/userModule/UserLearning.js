import axios from "axios";
import React, { useEffect, useState } from "react";
import CourseCard from "../CourseCard";

function UserLearning() {
  const [data, setData] = useState([]);
  const storageUser = JSON.parse(sessionStorage.getItem("user"));

  const buildQueryEnrolledParams = (enrolled) => {
    let url = "?";
    enrolled.forEach((key) => {
      url += `id=${key}&`;
    });
    return url;
  };

  const fetchEnrolledCourses = async () => {
    let response =
      storageUser && storageUser.enrolledCourses.length
        ? await getEnrolledCoursesWithAuthor()
        : [];
    setData(response);
  };

  const getEnrolledCoursesWithAuthor = async () => {
    let usersResponse = await axios.get("http://localhost:8000/users");

    let res = await axios.get(
      `http://localhost:8000/courses${buildQueryEnrolledParams(
        storageUser.enrolledCourses
      )}`
    );
    const coursesWithAuthor = res.data.map((course) => {
      const author = usersResponse.data.find(
        (user) => user.id === course.authorId
      );
      if (author) {
        return {
          ...course,
          authorImage: author.thumbnail,
          authorName: `${author.firstName} ${author.lastName}`,
        };
      }
      return course;
    });
    return coursesWithAuthor;
  };

  useEffect(() => {
    fetchEnrolledCourses();
  }, []);

  return (
    <div className="d-flex ">
      <div className="row">
        {data?.map((course) => (
          <div key={course.id} className="col-lg-4 col-md-6 col-12">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserLearning;
