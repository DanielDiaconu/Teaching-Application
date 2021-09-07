import axios from "axios";
import React, { useEffect, useState } from "react";

function CourseSingleAuthor({ course }) {
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    let res = await axios.get(`http://localhost:8000/users/${course.authorId}`);
    setUser(res.data);
  };

  useEffect(() => {
    if (course.id) {
      fetchUser();
    }
  }, [course]);

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div className="position-relative">
            <img
              src={`/images/courses/avatars/${user?.thumbnail}`}
              alt=""
              className="rounded-circle avatar-xl"
            />
            <a
              href="#"
              className="position-absolute mt-2 ms-n3"
              data-bs-toggle="tooltip"
              data-placement="top"
              title=""
              data-bs-original-title="Verifed"
            ></a>
          </div>
          <div className="ms-4">
            <h4 className="mb-0">{`${user?.firstName} ${user?.lastName}`}</h4>
          </div>
        </div>
        <br />
        <p>{user?.description}</p>
      </div>
    </div>
  );
}

export default CourseSingleAuthor;
