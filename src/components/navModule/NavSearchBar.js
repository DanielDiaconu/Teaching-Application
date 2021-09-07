import { select } from "async";
import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router";
import AsyncSelect from "react-select/async";
import debounce from "lodash/debounce";

function NavSearchBar() {
  const [selectedOption, setSelectedOption] = useState(null);
  const history = useHistory();

  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: 250,
    }),
  };

  const parseCourses = (data) => {
    return data.map((course) => {
      return { value: course.id, label: course.name };
    });
  };

  const loadOptions = useCallback(
    debounce((inputText, callback) => {
      getAsyncOptions(inputText).then((options) => callback(options));
    }, 1000),
    []
  );

  const getAsyncOptions = (inputText) => {
    return axios
      .get(`http://localhost:8000/courses?name_like=${inputText}`)
      .then((response) => {
        return parseCourses(response.data);
      });
  };

  const redirectToCourse = (course) => {
    history.push(`/course/${course?.value}`);
    setSelectedOption(course);
  };

  return (
    <>
      <div className="mt-3 mt-lg-0 ms-lg-3 d-flex align-items-center">
        <AsyncSelect
          styles={customStyles}
          value={selectedOption}
          onChange={redirectToCourse}
          loadOptions={loadOptions}
          defaultOptions={[]}
        />
      </div>
    </>
  );
}

export default NavSearchBar;
