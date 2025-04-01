import React, { useState } from "react";
import CourseCard from "../components/CourseCard";
import CourseFilter from "../components/CourseFilter";

const CoursesPage = () => {
  const [courses] = useState([
    { id: 1, title: "React Básico", description: "Aprende React desde cero", category: "Frontend", progress: 30 },
    { id: 2, title: "Node.js", description: "Backend con JavaScript", category: "Backend", progress: 10 },
  ]);

  const [filter, setFilter] = useState("Todos");

  return (
    <div className="courses-container">
      <h1>Catálogo de Cursos</h1>
      <CourseFilter currentFilter={filter} onFilterChange={setFilter} />
      <div className="courses-grid">
        {courses
          .filter((course) => filter === "Todos" || course.category === filter)
          .map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
      </div>
    </div>
  );
};

export default CoursesPage;