import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  const total = course.parts.reduce((s, p) => {
    console.log(`this is s -> ${s}  && this is p -> ${p.exercises}`);
    return s + p.exercises;
  }, 0);

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  );
};

export default Course;
