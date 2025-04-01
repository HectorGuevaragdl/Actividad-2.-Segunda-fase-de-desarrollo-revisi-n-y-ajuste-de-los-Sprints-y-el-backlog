import React from "react";

const CourseFilter = ({ currentFilter, onFilterChange }) => {
  const categories = ["Todos", "Frontend", "Backend", "Diseño"];

  return (
    <div className="course-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={currentFilter === cat ? "active" : ""}
          onClick={() => onFilterChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CourseFilter;