/**
 * Returns an array of student IDs from a list of student objects.
 *
 * @param {Array<Object>} studentList - The list of student objects.
 * Each student object should contain an `id` property.
 * @returns {Array<Number>} An array of student IDs. If the input is not an array, returns an empty array.
 */
const getListStudentIds = (studentList) => {
  if (!Array.isArray(studentList)) {
    return [];
  }

  return studentList.map((student) => (student.id));
};

export default getListStudentIds;
