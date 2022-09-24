import React from "react";
import "./Card.scss";

export const Card = ({
  className,
  children,
  gridRowEnd,
  gridRowStart,
  padding,
  center,
  style,
}) => {
  const classNames = ["content-card", className].filter(Boolean).join(" ");
  return (
    <div
      className={classNames}
      style={{
        justifyContent: center ? "center" : "",
        padding,
        gridRowStart,
        gridRowEnd,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
