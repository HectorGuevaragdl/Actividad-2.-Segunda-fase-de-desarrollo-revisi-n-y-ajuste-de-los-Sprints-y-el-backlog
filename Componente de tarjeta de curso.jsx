import React from "react";

const CourseCard = ({ title, description, category, progress }) => {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="category">{category}</span>
      <div className="progress-bar">
        <div style={{ width: `${progress}%` }}></div>
      </div>
      <button>Ver Curso</button>
    </div>
  );
};

export default CourseCard;