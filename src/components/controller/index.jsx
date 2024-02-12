import PropTypes from "prop-types";
import React from "react";
import { Col, Row } from "reactstrap";

import BulkController from "./bulkController";
import FilerController from "./filterController";
import SearchPanel from "./searchPanel";
import ViewController from "./viewController";

const Controller = ({
  term,
  view,
  changeView,
  handleSearch,
  toggleForm,
  handleFilter,
  clearSelected,
  clearCompleted,
  reset,
}) => (
  <div>
    <SearchPanel
      term={term}
      handleSearch={handleSearch}
      toggleForm={toggleForm}
    />
    <Row>
      <Col md={{ size: 4 }}>
        <FilerController handleFilter={handleFilter} />
      </Col>
      <Col md={{ size: 4 }}>
        <ViewController view={view} changeView={changeView} />
      </Col>
      <Col md={{ size: 4 }} className="d-flex justify-content-end ">
        <div className="ml-auto">
          <BulkController
            clearSelected={clearSelected}
            clearCompleted={clearCompleted}
            reset={reset}
          />
        </div>
      </Col>
    </Row>
  </div>
);

Controller.PropTypes = {
  term: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  changeView: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  clearSelected: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Controller;
