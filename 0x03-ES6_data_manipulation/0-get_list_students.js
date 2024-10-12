/**
 * Returns a list of student objects.
 * Each student object contains the following properties:
 * - id: A unique identifier for the student.
 * - firstName: The first name of the student.
 * - location: The location of the student.
 *
 * @returns {Array<Object>} List of student objects.
 */
const getListStudents = () => [
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' },
];

export default getListStudents;
