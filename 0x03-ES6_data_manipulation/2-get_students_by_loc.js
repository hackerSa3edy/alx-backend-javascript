/**
 * Filters and returns a list of students based on their location.
 *
 * @param {Array<Object>} studentList - The list of student objects.
 * Each student object should contain a `location` property.
 * @param {string} city - The city to filter students by.
 * @returns {Array<Object>} A list of students who are located in the specified city.
 */
function getStudentsByLocation(studentList, city) {
  return studentList.filter((student) => (student.location === city));
}

export default getStudentsByLocation;
