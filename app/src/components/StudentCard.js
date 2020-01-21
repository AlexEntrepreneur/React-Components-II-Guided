import React from "react";

export default function StudentCard(props) {

  return (
  <div className="student-card" >
      <h1>title</h1>
      <h2>body</h2>
      <img src={props.student.img} alt="image"/>
  </div>
  )
}