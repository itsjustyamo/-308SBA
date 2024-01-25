// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function getLearnerData(course, ag, submissions) {
  // here, we would process this data to achieve the desired result.
  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];

  return result;
}

function getLearnerData(course, ag, submissions) {
  // 1 - Checking if assigment belongs to its course.
  // here, we would process this data to achieve the desired result.
  //show an error.
  // 1f (ag. course_id I== course, course_id) {
  //throw new Error Invalid input - the assigment does not belong to this course. Please check again.")
  // WORKS. COMMENTING OUT TO BE ABLE TO USE TERMINAL FOR FURTHER EVALUATION. UNCOMMENT LATER!!
  let courseInfo = course;
  //console. log(course,
  
  // Declaring an object where the data received about each student will
  //stored based on the code below.
let result = {};

  for (let learnerSubmDetail of submissions) {
  // Iterating through array objects of our learners (LearnerSubmissions)
  //to get their submission ID and assigment ID
  let learnerID = learnerSubmDetail. learner_id;
  let assignmentID = learnerSubmDetail.assignment_id;
  let assignment = ag.assignments. find (eachAssigmnt = eachAssigmnt, id = assignmentID) // Looking at the AssignmentGroup and checking through the assignments object for
  learner (assignment_id)

  if (! assignment) {
  console. log('No S(assignmentID) was found for this learner (S(LearnerID)).')
  continue;
  }
  //Checking dates and DUE since we already interated through the objects of AssignmentGroup and LearnerSubmissions

  let due = new Date (assignment .due_at);
  let datesubmitted = new Date (learnerSubmDetail.submission.submitted_at) ;
  if (dateSubmitted > due){
    const scorePenalty = assignment.points_possible * 0.1;
    console.warn('! Subission is past its due date. The score will reduce by 10%.')
  console.log(scorePenalty)
  }
continue;
}}

//Check points possible
//Since now got the dates and a penaly, we can check the"" points possible"
let ifPointsZero = assignment.points_possible
if (ifPointsZero < 0 || ifPointsZero == isNaN){
console.warn( //Wrong value entered. It should be an absolute number greater •
console. log (ifPointsZero)
)}

const result = getLearnerData(courseInfo, AssignmentGroup, LearnerSubmissions);
//console.log(result)