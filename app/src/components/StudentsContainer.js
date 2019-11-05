import React from 'react';
import Student from './Student';

function StudentsContainer(props) {
	return (
		<div className="students-container">
			{props.students.map((student, index) => (
				<Student
					student={student}
					key={index}
					selected={props.selected}
					setSelectedStudent={props.setSelectedStudent}
				/>
			))}
		</div>
	);
}
export default StudentsContainer;
