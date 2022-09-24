import React from "react";

export const ListItem = ({ children, label }) => {
  return (
    <li className={`list-item list-item--alt`}>
      {label && <span className="list-item__label">{label}</span>}
      {children}
    </li>
  );
};
