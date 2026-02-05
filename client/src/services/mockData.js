export const mockDayTimetable = {
  "status": "OK",
  "date": new Date().toISOString().split('T')[0],
  "bells": [
    { "bell": "1", "time": "09:00", "bellDisplay": "Period 1", "endTime": "10:00" }, 
    { "bell": "2", "time": "10:05", "bellDisplay": "Period 2", "endTime": "11:05" },
    { "bell": "R", "time": "11:05", "bellDisplay": "Recess", "endTime": "11:25" },
    { "bell": "3", "time": "11:25", "bellDisplay": "Period 3", "endTime": "12:25" },
    { "bell": "4", "time": "12:30", "bellDisplay": "Period 4", "endTime": "13:30" },
    { "bell": "L", "time": "13:30", "bellDisplay": "Lunch", "endTime": "14:15" },
    { "bell": "5", "time": "14:15", "bellDisplay": "Period 5", "endTime": "15:15" }
  ],
  "timetable": {
    "timetable": {
      "dayname": "Monday A",
      "routine": "1,2,R,3,4,L,5",
      "periods": {
        "1": { "title": "Mathematics Ext 1", "teacher": "AB", "room": "201", "year": "12", "fullTeacher": "Mr A Brown" },
        "2": { "title": "Physics", "teacher": "CD", "room": "Lab 3", "year": "12", "fullTeacher": "Ms C Davis" },
        "3": { "title": "English Advanced", "teacher": "EF", "room": "305", "year": "12", "fullTeacher": "Mr E Foster" },
        "4": { "title": "Study", "teacher": "", "room": "Library", "year": "12", "fullTeacher": "" },
        "5": { "title": "Economics", "teacher": "GH", "room": "402", "year": "12", "fullTeacher": "Mrs G Harris" }
      },
      "subjects": {
        "12Ma1": { "title": "Mathematics Ext 1", "color": "blue" },
        "12Phy": { "title": "Physics", "color": "red" },
        "12Eng": { "title": "English Advanced", "color": "green" },
        "12Eco": { "title": "Economics", "color": "yellow" }
      }
    }
  }
};

export const mockDailyNews = {
  "date": "2023-11-20",
  "notices": [
    {
      "title": "Debating Meeting",
      "content": "All senior debaters please meet in Room 101 at Lunch.",
      "years": ["11", "12"],
      "displayYears": "Years 11, 12",
      "authorName": "Ms K Smith",
      "isMeeting": 1,
      "meetingTime": "Lunch",
      "relativeWeight": 2
    },
    {
      "title": "Basketball Trials",
      "content": "Opens Basketball trials are on Thursday after school in the Gym.",
      "years": ["All"],
      "displayYears": "All Students",
      "authorName": "Mr J Doe",
      "isMeeting": 0,
      "relativeWeight": 1
    },
     {
      "title": "Library Closed",
      "content": "The library will be closed period 4 for a seminar.",
      "years": ["All"],
      "displayYears": "All Students",
      "authorName": "Librarian",
      "isMeeting": 0,
      "relativeWeight": 0
    }
  ]
};

export const mockUserInfo = {
  "givenName": "John",
  "surname": "Citizen",
  "studentId": "430000000",
  "yearGroup": "12",
  "rollClass": "12Mt"
};
