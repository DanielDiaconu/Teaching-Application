import React from "react";

function HomeIntro() {
  return (
    <section className=" pt-lg-5 pt-4 pb-lg-6 pb-5  bg-white">
      <div className="container">
        <h3 className="h6 mb-2 text-uppercase text-sm-center">Our benefits</h3>
        <h2 className="h1 mb-lg-5 pb-md-2 text-sm-center display-3 ">
          That’s how we do it
        </h2>

        <div className="tab-content mt-md-4 mt-3 pt-3">
          <div
            className="tab-pane fade active show"
            id="experienced-tutors"
            role="tabpanel"
            aria-labelledby="experienced-tutors-tab"
          >
            <div className="row align-items-center">
              <div className="col-lg-5 col-sm-6 order-sm-1 order-2 me-auto">
                <h3 className="h2 mb-md-4 mb-3 display-4">
                  Only practicing tutors
                </h3>
                <p className="mb-0 lead">
                  Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non
                  fames dictum suspendisse. Morbi mauris cras massa ut dolor
                  quis sociis mollis augue. Nunc, sodales tortor sit diam mi
                  amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl
                  accumsan, id dignissim massa ut amet. Amet enim, nisi tempus
                  vehicula.
                </p>
              </div>
              <div className="col-sm-6 order-sm-2 order-1 mb-sm-0 mb-4 pb-sm-0 pb-2">
                <img
                  src="/images/courses/home-page/course-home.svg"
                  alt="Experienced Tutors"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeIntro;
