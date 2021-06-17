import React from "react";
import PropTypes from "prop-types";

export const Example = ({ name }) => <h1>Hello {name}</h1>;

Example.propTypes = {
  name: PropTypes.string,
};
