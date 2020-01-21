import React from 'react';
import StudentCard from './StudentCard';

function StudentsContainer(props) {
  console.log(props.studentsData);
  
  return (
    <div className="students-container">
      {
        props.studentsData.map(student => {
          return <StudentCard student={student} />
        })
      }
    </div>
  );
}

export default StudentsContainer;