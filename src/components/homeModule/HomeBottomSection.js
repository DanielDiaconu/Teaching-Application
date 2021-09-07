import React from "react";

export default function HomeBottomSection() {
  return (
    <div className="py-lg-16 py-10 bg-grey">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-right-md-6 col-12 mb-6">
            <h2 className="display-4 mb-3 fw-bold">Our core values</h2>
            <p className="lead">
              Our core values are the fundamental beliefs of a person or
              organization geeks academy. We help people understand the
              difference between right and wrong.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-5">
                <div className="mb-3">
                  <i className="mdi mdi-school-outline mdi-48px text-primary lh-1 "></i>
                </div>
                <h3 className="mb-2">Make Education Accessible</h3>
                <p className="mb-0">
                  Quis cursus turpis in habitant sagittis amet dolor malesuada
                  ut. Volutpat nunc id blanvolutpat nunc.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-5">
                <div className="mb-3">
                  <i className="mdi mdi-account-group mdi-48px text-primary lh-1 "></i>
                </div>
                <h3 className="mb-2">Learn and Grow</h3>
                <p className="mb-0">
                  Quis cursus turpis in habitant sagittis amet dolor malesuada
                  ut. Volutpat nunc id blanvolutpat nunc.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-5">
                <div className="mb-3">
                  <i className="mdi mdi-finance mdi-48px text-primary lh-1 "></i>
                </div>
                <h3 className="mb-2">Make Education Accessible</h3>
                <p className="mb-0">
                  Quis cursus turpis in habitant sagittis amet dolor malesuada
                  ut. Volutpat nunc id blanvolutpat nunc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
