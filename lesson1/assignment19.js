// Grades:
// Exam - 65%
// Exercises - 35%

// Letters:
// 93-100 A
// 85-92 B
// 77-84 C
// 69-76 D
// 60-68 E
// 0-59 F

// Exercises have a sum total of 100, while exams max score is 100

// The Output should look like this:
/*
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
*/

// Given this information, implement a function that takes a studentScores
// object and returns a class record summary object.

// You can use the following code to test your implementation:

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

// Student Scores
// 1. Extract values array from scores
// 2. Transform that array into individual student scores with letter
//     1. Reduce exams into sum and divide by 4
//     2. Reduce exercises to sum
//     3. Add together scores with weights
//     4. Get letter and configure string
// 3. Reduce Previous array(values) into an array of four objects
// 4. Return combined object

const EXAM_WGHT = .65;
const EXERCISE_WGHT = .35;

function generateClassRecordSummary(scores) {
  let scoreData = Object.values(scores).map(student => student.scores);
  let examData = scoreData.map(score => score.exams);

  return {
    studentGrades: scoreData.map(scoreObj => getStudentScore(scoreObj)),
    exams: getExamSummary(examData),
  };
}

function getStudentScore(scoreObj) {
  let getGradeLetter = function (score) {
    if (score > 92) return 'A';
    if (score > 84) return 'B';
    if (score > 76) return 'C';
    if (score > 68) return 'D';
    if (score > 59) return 'E';
    return 'F';
  };

  let numExams = scoreObj.exams.length;
  let examsAvg = scoreObj.exams.reduce((sum, value) => sum + value) / numExams;
  let exercises = scoreObj.exercises.reduce((sum, value) => sum + value);
  let score = Math.round((examsAvg * EXAM_WGHT) + (exercises * EXERCISE_WGHT));

  return `${score} (${getGradeLetter(score)})`;
}

function getExamSummary(examData) {
  let exams = nestEmptyArray(examData[0].length);
  exams = examData.reduce(transposeNestedArray, exams);

  return exams.map(exam => {
    let [min, max] = getArrayMinMax(exam);
    return {
      average: exam.reduce((sum, value) => sum + value) / exam.length,
      minimum: min,
      maximum: max,
    };
  });
}

function nestEmptyArray(length) {
  const arr = [];
  for (let times = 0; times < length; times += 1) {
    arr.push([]);
  }
  return arr;
}

function transposeNestedArray(nestedArr, arr2) {
  nestedArr.forEach((inArray, idx) => inArray.push(arr2[idx]));
  return nestedArr;
}

function getArrayMinMax(array) {
  let min = Infinity;
  let max = -Infinity;

  array.forEach(value => {
    if (value < min) min = value;
    if (value > max) max = value;
  });

  return [min, max];
}

console.log(generateClassRecordSummary(studentScores));

// returns:
/*
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
*/
