import React from "react";
import "./list.scss";

export const List = ({ children, ...props }) => {
  return (
    <ul className="list" {...props}>
      {children}
    </ul>
  );
};
