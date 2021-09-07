import React, { useState } from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import AddCourseHeader from "../components/addCourseStepperModule/AddCourseHeader";
import AddCourseBasicInformation from "../components/addCourseStepperModule/AddCourseBasicInformation";
import AddCourseMedia from "../components/addCourseStepperModule/AddCourseMedia";
import AddCourseCurriculum from "../components/addCourseStepperModule/curriculum/AddCourseCurriculum";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Prompt, useHistory } from "react-router";

function AddCourse() {
  const [activeStep, setActiveStep] = useState(0);
  const [newCourse, setNewCourse] = useState(null);
  const history = useHistory();
  const user = JSON.parse(sessionStorage.getItem("user"));

  const nextStep = () => {
    if (activeStep >= 3) {
      return;
    }
    setActiveStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (activeStep < 0) {
      return;
    }
    setActiveStep((prev) => prev - 1);
  };

  const onNewCourseBasicInfoChange = (data) => {
    setNewCourse({ ...newCourse, ...data });
  };

  const onNewCourseThumbnailChange = (thumbnail) => {
    setNewCourse({ ...newCourse, thumbnail });
  };

  const onNewCourseChaptersChange = (chapters) => {
    setNewCourse({ ...newCourse, chapters });
  };

  const calculateCourseRuntime = () => {
    const chaptersTime = newCourse.chapters.map((chp) => {
      return chp.sections.reduce(
        (total, acc) => total + parseInt(acc.length),
        0
      );
    });
    return chaptersTime.reduce((total, acc) => total + acc, 0);
  };

  const submitNewCourse = async (e) => {
    await axios.post(
      "http://localhost:8000/courses",
      {
        ...newCourse,
        reviews: [],
        authorId: user.id,
        students: [],
        rating: 5,
        time: calculateCourseRuntime(),
      },
      {
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    );
    if (!user.isInstructor) {
      await axios.patch(
        `http://localhost:8000/users/${user.id}`,
        {
          isInstructor: true,
        },
        {
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          ...user,
          isInstructor: true,
        })
      );
    }
    history.push("/");
  };

  const isDisabled = () => {
    if (!newCourse) {
      return true;
    }
    if (activeStep === 0) {
      return (
        !newCourse.name ||
        !newCourse.category ||
        !newCourse.level ||
        !newCourse.description ||
        newCourse.description === "<p><br></p>" ||
        !newCourse.price
      );
    }
    if (activeStep === 1) {
      return !newCourse.thumbnail;
    }
    if (activeStep === 2) {
      const hasASection = newCourse?.chapters?.some(
        (chapter) => chapter?.sections?.length > 0
      );
      return !newCourse || !newCourse?.chapters || !hasASection;
    }
  };

  return (
    <>
      <AddCourseHeader />
      <div className="pb-12">
        <div className="container">
          <div className="bs-stepper">
            <div className="row">
              <div className="offset-lg-1 col-lg-10 col-md-12 col-12">
                <Stepper
                  activeStep={activeStep}
                  className="bs-stepper-header shadow-sm mb-5"
                >
                  <Step>
                    <StepLabel>Basic Information</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>Course Media</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel> Curriculum</StepLabel>
                  </Step>
                </Stepper>
                {activeStep === 0 && (
                  <AddCourseBasicInformation
                    onBasicInfoChange={onNewCourseBasicInfoChange}
                  />
                )}
                {activeStep === 1 && (
                  <AddCourseMedia
                    onThumbnailChange={onNewCourseThumbnailChange}
                  />
                )}
                {activeStep === 2 && (
                  <AddCourseCurriculum
                    onNewCourseChapterChange={onNewCourseChaptersChange}
                  />
                )}

                <div className="d-flex flex-row-reverse justify-content-between my-5">
                  {activeStep <= 1 ? (
                    <button
                      onClick={nextStep}
                      disabled={isDisabled()}
                      className="next-btn"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={submitNewCourse}
                      disabled={isDisabled()}
                      className="next-btn"
                    >
                      Submit Course
                    </button>
                  )}
                  {activeStep > 0 && (
                    <button className="prev-btn" onClick={prevStep}>
                      Previous
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCourse;
