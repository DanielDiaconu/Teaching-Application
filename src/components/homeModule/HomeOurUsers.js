import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeInstructorCard from "./HomeInstructorCard";

export default function HomeOurUsers() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      let res = await axios.get(
        "http://localhost:8000/users?isInstructor=true&_limit=4"
      );
      setUsers(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className=" pt-lg-6 pt-5 pb-lg-5 pb-4 bg-grey">
      <div className="container">
        <h3 className="h6 mb-2 text-uppercase">Best tutors are all here</h3>
        <div className="mb-lg-5 mb-4 pb-md-2 d-flex justify-content-between">
          <h2 className="h1 mb-0">Meet our team</h2>
        </div>
        <div className="row ">
          {users?.map((user, i) => (
            <HomeInstructorCard key={i} user={user} />
          ))}
        </div>
      </div>
    </section>
  );
}
