import React, { useState } from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import AddCourseHeader from "../components/addCourseStepperModule/AddCourseHeader";
import AddCourseBasicInformation from "../components/addCourseStepperModule/AddCourseBasicInformation";
import AddCourseMedia from "../components/addCourseStepperModule/AddCourseMedia";
import AddCourseCurriculum from "../components/addCourseStepperModule/curriculum/AddCourseCurriculum";
function AddCourse() {
  const [activeStep, setActiveStep] = useState(0);
  const [newCourse, setNewCourse] = useState(null);

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

  console.log(newCourse);
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
                    <button onClick={nextStep} className="next-btn">
                      Next
                    </button>
                  ) : (
                    <button className="next-btn">Submit Course</button>
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
