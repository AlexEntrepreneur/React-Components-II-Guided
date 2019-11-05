import React from 'react';

function Student(props) {
	return (
		<div
			className="student-card"
			id={(props.selected === props.student.name) ? 'selectedStudent' : null}
			onClick={() => props.setSelectedStudent(props.student.name)}
		>
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
	);
}

export default Student;
