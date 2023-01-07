const updateStudentGradeByCity = (students, city, newGrades) => students
  .filter((ele) => ele.location === city)
  .map((item) => {
    const result = newGrades.filter((grade) => grade.studentId === item.id);
    if (result.length === 0) return { ...item, grade: 'N/A' };
    return { ...item, grade: result[0].grade };
  });

export default updateStudentGradeByCity;
