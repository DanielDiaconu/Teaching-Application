import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";

function AddCourseHeader() {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const confirmCourseCancelation = () => {
    setOpen(true);
  };
  const confirmCourceCancel = () => {
    history.push("/");
  };

  return (
    <>
      <div>
        <div className="py-4 py-lg-6 bg-primary">
          <div className="container">
            <div className="row">
              <div className="offset-lg-1 col-lg-10 col-md-12 col-12">
                <div className="d-lg-flex align-items-center justify-content-between">
                  <div className="mb-4 mb-lg-0">
                    <h1 className="text-white mb-1">Add New Course</h1>
                    <p className="mb-0 text-white lead">
                      Just fill the form and create your courses.
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={confirmCourseCancelation}
                      className="btn btn-white "
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to leave the page ?"}
        </DialogTitle>
        <DialogContent>
          {"You will be redirected to the home page ."}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Disagree
          </Button>
          <Button onClick={confirmCourceCancel} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddCourseHeader;
