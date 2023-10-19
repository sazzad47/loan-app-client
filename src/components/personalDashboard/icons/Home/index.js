import PropTypes from "prop-types";
import React from "react";

export const Home = ({ color = "#FFBE0B", className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="text-green-400" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M3.33301 20.3398C3.33301 16.5257 3.33301 14.6187 4.19834 13.0378C5.06367 11.4569 6.64459 10.4758 9.80639 8.51347L13.1397 6.4447C16.482 4.3704 18.1532 3.33325 19.9997 3.33325C21.8462 3.33325 23.5173 4.3704 26.8597 6.4447L30.193 8.51345C33.3548 10.4758 34.9357 11.4569 35.801 13.0378C36.6663 14.6187 36.6663 16.5257 36.6663 20.3398V22.8749C36.6663 29.3763 36.6663 32.6271 34.7137 34.6468C32.7612 36.6666 29.6183 36.6666 23.333 36.6666H16.6663C10.3809 36.6666 7.23826 36.6666 5.28562 34.6468C3.33301 32.6271 3.33301 29.3763 3.33301 22.8749V20.3398Z" stroke={color} stroke-width="3"/>
      <path d="M20 25V30" stroke={color} stroke-width="3" stroke-linecap="round"/>
    </svg>
  );
};

Home.propTypes = {
  color: PropTypes.string,
};
