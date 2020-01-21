import React from 'react';
import StudentCard from './StudentCard';

function StudentsContainer(props) {
  console.log(props.studentsData);
  
  return (
    <div className="students-container">
      <StudentCard />
    </div>
  );
}

export default StudentsContainer;