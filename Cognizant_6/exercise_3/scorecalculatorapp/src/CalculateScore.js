import React from 'react';
import './Stylesheets/mystyle.css';

function CalculateScore(props) {
  const percentage = ((props.total / (props.total + props.goal)) * 100).toFixed(2);

  return (
    <div>
      <h2 className="Name">Name: {props.Name}</h2>
      <h3 className="School">School: {props.School}</h3>
      <p className="Total">Total Marks: {props.total}</p>
      <p className="Score">Goal: {props.goal}</p>
      <p className="Percent">Percentage: {percentage}%</p>
    </div>
  );
}

export default CalculateScore;
