/**
 * Computes the sum of all student IDs in a list of student objects.
 *
 * @param {Array<Object>} studentList - The list of student objects.
 * Each student object should contain an `id` property.
 * @returns {number} The sum of all student IDs.
 */
function getStudentIdsSum(studentList) {
  return studentList.reduce((accumulator, student) => (accumulator + student.id), 0);
}

export default getStudentIdsSum;
