import React from "react";

function HomeTopSection() {
  return (
    <section className=" pt-lg-6 pt-5 bg-white">
      <div className="container">
        <div className="row pt-3 pb-4 py-lg-0">
          <div className="col-md-5 col-sm-6 me-auto">
            <div className="col-lg-9 px-0">
              <h3 className="h6 mb-2 text-uppercase">Createx certificate</h3>
              <h2 className="h1 mb-lg-5">Your expertise will be confirmed</h2>
              <p>
                We are accredited by international professional organizations
                and institutes:
              </p>
            </div>
            <ul className="list-unstyled d-flex flex-sm-nowrap flex-wrap">
              <li className="mb-lg-0 mb-3 me-4 pe-3">
                <img
                  src="/images/courses/logos/eu-business-school.svg"
                  alt="EU Business School"
                />
              </li>
              <li className="mb-lg-0 mb-3 me-4 pe-3">
                <img
                  src="/images/courses/logos/mcgill-university.svg"
                  alt="Mcgill University"
                />
              </li>
              <li className="mb-lg-0 mb-3 me-4 pe-3">
                <img
                  src="/images/courses/logos/incae-business-school.svg"
                  alt="Incae Business School"
                />
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-sm-6">
            <img
              src={`/images/courses/logos/certif.jpg`}
              alt="Certificate"
              className="mb-md-n5 mb-sm-0 mb-n4 rounded shadow-lg position-relative img-fluid"
              style={{ zIndex: "5" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeTopSection;
