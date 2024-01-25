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
  const result = [];

  submissions.forEach(submission => {
    const learnerId = submission.learner_id;
    const assignmentId = submission.assignment_id;
    const assignment = ag.assignments.find(a => a.id === assignmentId);

    if (assignment) {
      const dueDate = new Date(assignment.due_at);
      const submittedDate = new Date(submission.submission.submitted_at);

      // Check if the assignment is not yet due
      if (submittedDate <= dueDate) {
        const percentage = submission.submission.score / assignment.points_possible;

        // Initialize learner object if not exists
        if (!result[learnerId]) {
          result[learnerId] = { id: learnerId };
        }

        // Calculate weighted score and update assignment score
        const weightedScore = percentage * assignment.points_possible;
        if (!result[learnerId][assignmentId] || result[learnerId][assignmentId] < weightedScore) {
          result[learnerId][assignmentId] = weightedScore;
        }
      }
    }
  });

  // Calculate average for each learner
  result.forEach(learner => {
    const totalWeightedScore = Object.values(learner).reduce((acc, val) => acc + (val || 0), 0);
    const totalWeight = Object.keys(learner).length - 2; // Subtracting id and avg
    learner.avg = totalWeightedScore / totalWeight;
  });

  return result.filter(Boolean); // Remove empty elements from the result array
}

// Use the getLearnerData function
const allData = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// Display the result
console.log(allData);