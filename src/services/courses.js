import axios from "axios";

export const getCourses = async () => {
  let res = await axios.get("http://localhost:8000/courses");
  return res.data;
};
