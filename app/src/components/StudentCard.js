import React from "react";

export default function StudentCard(props) {

  return (
    <div className="student-card">
      <img src={props.student.img} alt={props.student.name} />
      <div className="student-info">
        <h3>
          <strong>Name: </strong>
          {props.student.name}
        </h3>
        <p>
          <strong>Age: </strong>
          {props.student.age}
        </p>
        <p>
          <strong>Identity: </strong>
          {props.student.identity}
        </p>
        <p>
          <strong>Best Friends: </strong>
          {props.student.bestFriend}
        </p>
      </div>
  </div>
  )
}