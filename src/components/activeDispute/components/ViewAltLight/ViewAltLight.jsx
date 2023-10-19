/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ViewAltLight = ({
  className,
  viewAltLight = "https://cdn.animaapp.com/projects/64da47c09e7225f2aa1a3abe/releases/6530d576c794a43bb130d28a/img/view-alt-light.png",
}) => {
  return <img className={`view-alt-light ${className}`} alt="View alt light" src={viewAltLight} />;
};

ViewAltLight.propTypes = {
  viewAltLight: PropTypes.string,
};
