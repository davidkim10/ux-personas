import React from "react";
import "./Header.scss";
export const Header = ({ onNext, onPrev, isNextDisabled, isPrevDisabled }) => {
  return (
    <header className="header">
      <h2 className="header-title">UX Persona</h2>
      <div>
        <button
          className="btn btn-sm btn-outline-primary mx-1"
          onClick={onPrev}
          disabled={isPrevDisabled}
        >
          Prev
        </button>
        <button
          className="btn btn-sm btn-primary"
          onClick={onNext}
          disabled={isNextDisabled}
        >
          Next
        </button>
      </div>
    </header>
  );
};
