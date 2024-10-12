/**
 * Updates the grades of students in a specific city.
 *
 * @param {Array<Object>} studentList - The list of student objects.
 * Each student object should contain an `id` and `location` property.
 * @param {string} city - The city to filter students by.
 * @param {Array<Object>} newGrades - The list of new grades.
 * Each grade object should contain a `studentId` and `grade` property.
 * @returns {Array<Object>} A list of students in the specified city with updated grades.
 * If a student's grade is not found in `newGrades`, the grade will be set to 'N/A'.
 */
const updateStudentGradeByCity = (studentList, city, newGrades) => {
  const idGradMap = new Map();
  newGrades.forEach((student) => {
    idGradMap.set(student.studentId, student.grade);
  });

  const studentsByCity = studentList.filter((student) => (student.location === city));
  return studentsByCity.map((student) => ({
    ...student,
    grade: idGradMap.get(student.id) || 'N/A',
  }));
};

export default updateStudentGradeByCity;
