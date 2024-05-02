
//1. Find all the topics and tasks which are thought in the month of October

db.Topics.find(
  {
    month: "October",
  },
  {
    topic: 1,
  }
);




//2. Find all the company drives which appeared between 15-oct-2020 and 31-oct-2020

db.Company_drives.find(
  {
    date: {
      $gte: "2020-10-01",
      $lte: "2020-10-31",
    },
  },
  {
    company_name: 1,
  }
);




//3. Find all the company drives and students who are appeared for the placement

db.Company_drives.find().projection(
    {
     company_name: 1,
     students_appeared: 1,
    }
);




//4. Find the number of problems solved by the user in codekata

db.Codekata.find().projection(
    {
     user_name: 1,
     problems_solved: 1
    }
);




//5. Find all the mentors with who has the mentee's count more than 15

db.Mentors.find({ mentees_count: { $gt: 15 } });




//6. Find the number of users who are absent and task is not submitted between 15-oct-2020 and 31-oct-2020

db.Users.count({
    "date": {
      $gte: "2020-10-15",
      $lte: "2020-10-31"
    },
    "attendance": "Absent",
    "task_submission": "Not-Submitted"
  })


