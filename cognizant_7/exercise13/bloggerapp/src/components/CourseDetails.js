import React from 'react';

const CourseDetails = () => {
  const courses = [
    { id: 1, name: "Angular", date: "4/5/2021" },
    { id: 2, name: "React", date: "6/3/2021" },
  ];

  return (
    <>
      <h3><strong>Course Details</strong></h3>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name} - {course.date}</li>
        ))}
      </ul>
    </>
  );
};

export default CourseDetails;
