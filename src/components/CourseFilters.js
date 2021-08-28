import React, { useEffect, useState } from "react";

export default function CourseFilters({ onFiltersChange }) {
  const [filters, setFilters] = useState({
    category: "",
    level: "",
    rating: "",
  });

  const onFilterCategoryChange = (e) => {
    setFilters({
      ...filters,
      category: e.target.checked ? e.target.value : "",
    });
  };

  const onSkillLevelChange = (e) => {
    setFilters({
      ...filters,
      level: e.target.checked ? e.target.value : "",
    });
  };

  useEffect(() => {
    onFiltersChange(filters);
  }, [filters]);
  return (
    <div className="col-xl-3 col-lg-3 col-md-4 col-12 mb-4 mb-lg-0">
      <div className="card">
        <div className="card-header">
          <h4 className="mb-0">Filter</h4>
        </div>
        <div className="card-body">
          <span className="dropdown-header px-0 mb-2"> Category</span>
          <div className="form-check mb-1">
            <input
              type="checkbox"
              className="form-check-input"
              id="nodeCheck"
              value="Node"
              checked={filters.category === "Node"}
              onChange={onFilterCategoryChange}
            />
            <label className="form-check-label" htmlFor="nodeCheck">
              Node
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              type="checkbox"
              checked={filters.category === "React"}
              className="form-check-input"
              id="reactCheck"
              value="React"
              onChange={onFilterCategoryChange}
            />
            <label className="form-check-label" htmlFor="reactCheck">
              React
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              type="checkbox"
              value="JavaScript"
              checked={filters.category === "JavaScript"}
              className="form-check-input"
              id="javascriptCheck"
              onChange={onFilterCategoryChange}
            />
            <label className="form-check-label" htmlFor="javascriptCheck">
              Javascript
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              type="checkbox"
              className="form-check-input"
              id="angularCheck"
              value="Angular"
              checked={filters.category === "Angular"}
              onChange={onFilterCategoryChange}
            />
            <label className="form-check-label" htmlFor="angularCheck">
              Angular
            </label>
          </div>

          <div className="form-check mb-1">
            <input
              type="checkbox"
              className="form-check-input"
              id="pythonCheck"
              value="Python"
              onChange={onFilterCategoryChange}
              checked={filters.category === "Python"}
            />
            <label className="form-check-label" htmlFor="angularJSCheck">
              Phyton
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              type="checkbox"
              className="form-check-input"
              id="gatsbyCheck"
              onChange={onFilterCategoryChange}
              value="GatsBy"
              checked={filters.category === "GatsBy"}
            />
            <label className="form-check-label" htmlFor="gatsbyCheck">
              GatsBy
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              type="checkbox"
              className="form-check-input"
              id="graphQlCheck"
              onChange={onFilterCategoryChange}
              value="GraphQl"
              checked={filters.category === "GraphQl"}
            />
            <label className="form-check-label" htmlFor="graphQlCheck">
              GraphQL
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              type="checkbox"
              className="form-check-input"
              id="css3Check"
              value="CSS3"
              checked={filters.category === "CSS3"}
              onChange={onFilterCategoryChange}
            />
            <label className="form-check-label" htmlFor="vueJsCheck">
              CSS3
            </label>
          </div>
        </div>
        <div className="card-body border-top">
          <span className="dropdown-header px-0 mb-2"> Ratings</span>
          <div className="custom-control custom-radio mb-1">
            <input
              type="radio"
              className="form-check-input"
              id="starRadio1"
              name="customRadio"
            />
            <label className="form-check-label" htmlFor="starRadio1">
              <i className="mdi mdi-star me-n1 text-warning"></i>
              <i className="mdi mdi-star me-n1 text-warning"></i>
              <i className="mdi mdi-star me-n1 text-warning"></i>
              <i className="mdi mdi-star me-n1 text-warning"></i>
              <i className="mdi mdi-star text-warning "></i>
              <span className="fs-6">4.5 &amp; UP</span>
            </label>
          </div>
          <div className="custom-control custom-radio mb-1">
            <input
              type="radio"
              className="form-check-input"
              id="starRadio2"
              name="customRadio"
            />
            <label className="form-check-label" htmlFor="starRadio2">
              {" "}
              <i className="mdi mdi-star me-n1 text-warning"></i>
              <i className="mdi mdi-star me-n1 text-warning"></i>
              <i className="mdi mdi-star me-n1 text-warning"></i>
              <i className="mdi mdi-star me-n1 text-warning"></i>
              <i className="mdi mdi-star text-warning "></i>
              <span className="fs-6">4.0 &amp; UP</span>
            </label>
          </div>
          <div className="custom-control custom-radio mb-1">
            <input
              type="radio"
              className="form-check-input"
              id="starRadio3"
              name="customRadio"
            />
            <label className="form-check-label" htmlFor="starRadio3">
              {" "}
              <i className="mdi mdi-star me-n1 text-warning"></i>
              <i className="mdi mdi-star me-n1 text-warning"></i>
              <i className="mdi mdi-star me-n1 text-warning"></i>
              <i className="mdi mdi-star me-n1 text-warning"></i>
              <i className="mdi mdi-star text-warning "></i>
              <span className="fs-6">3.5 &amp; UP</span>
            </label>
          </div>
          <div className="custom-control custom-radio mb-1">
            <input
              type="radio"
              className="form-check-input"
              id="starRadio4"
              name="customRadio"
            />
            <label className="form-check-label" htmlFor="starRadio4">
              {" "}
              <i className="mdi mdi-star me-n1 text-warning"></i>
              <i className="mdi mdi-star me-n1 text-warning"></i>
              <i className="mdi mdi-star me-n1 text-warning"></i>
              <i className="mdi mdi-star me-n1 text-warning"></i>
              <i className="mdi mdi-star text-warning "></i>
              <span className="fs-6">3.0 &amp; UP</span>
            </label>
          </div>
        </div>
        <div className="card-body border-top">
          <span className="dropdown-header px-0 mb-2"> Skill Level</span>
          <div className="form-check mb-1">
            <input
              type="checkbox"
              value=""
              checked={filters.level === ""}
              onChange={onSkillLevelChange}
              className="form-check-input"
              id="allTwoCheck"
            />
            <label className="form-check-label" htmlFor="allTwoCheck">
              All Level
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              onChange={onSkillLevelChange}
              value="Beginner"
              checked={filters.level === "Beginner"}
              type="checkbox"
              className="form-check-input"
              id="beginnerTwoCheck"
              checked=""
            />
            <label className="form-check-label" htmlFor="beginnerTwoCheck">
              Beginner
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              onChange={onSkillLevelChange}
              value="Intermediate"
              checked={filters.level === "Intermediate"}
              type="checkbox"
              className="form-check-input"
              id="intermediateCheck"
            />
            <label className="form-check-label" htmlFor="intermediateCheck">
              Intermediate
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              onChange={onSkillLevelChange}
              checked={filters.level === "Advanced"}
              value="Advanced"
              type="checkbox"
              className="form-check-input"
              id="AdvancedTwoCheck"
            />
            <label className="form-check-label" htmlFor="AdvancedTwoCheck">
              Advanced
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
