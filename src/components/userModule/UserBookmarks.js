import axios from "axios";
import { get } from "lodash";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import CourseCard from "../CourseCard";

function UserBookmarks() {
  const storageUser = JSON.parse(sessionStorage.getItem("user"));
  const [data, setData] = useState([]);
  const location = useLocation();

  const buildQueryParams = (bookmarks) => {
    let url = "?";
    bookmarks.forEach((key) => {
      url += `id=${key}&`;
    });
    return url;
  };

  const fetchBookmarkedCourses = async () => {
    let response =
      storageUser && storageUser.bookmarks.length
        ? await getBookmarkedCoursesWithAuthor()
        : [];
    setData(response);
  };

  const getBookmarkedCoursesWithAuthor = async () => {
    let usersResponse = await axios.get("http://localhost:8000/users");

    let res = await axios.get(
      `http://localhost:8000/courses${buildQueryParams(storageUser.bookmarks)}`
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

    const filteredBookmarks = data.filter((item) => item.id !== id);
    setData(filteredBookmarks);
  };

  useEffect(() => {
    fetchBookmarkedCourses();
  }, []);

  return (
    <>
      <div className="d-flex flex-wrap">
        <div className="row">
          {data &&
            data.map((course) => (
              <div key={course.id} className="col-lg-4 col-md-6 col-12">
                <CourseCard
                  course={course}
                  onBookmarkRemove={() => removeBookmark(course.id)}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default UserBookmarks;
