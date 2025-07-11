const friends = [
  {
    id: 1,
    name: "Vansh Rana",
    phone: "87082 78517",
    timetable: {
      Monday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Aptitude-III", location: "Block-B2-103", faculty: "Jagat Pal" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Aptitude-III", location: "Block-B2-103", faculty: "Jagat Pal" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B2-103", faculty: "Kapil" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "Operating System", location: "Block-B2-103", faculty: "Bandan Jot Kaur" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B2-103", faculty: "Pratima Sonali Horo" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B2-103", faculty: "Pratima Sonali Horo" },
        { start: "03:35 PM", end: "04:25 PM", type: "Break", title: "Break", location: "", faculty: "" }
      ],
      Tuesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Project Based Learning in Java", location: "Block-B2-103", faculty: "Kapil" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Operating System", location: "Block-B2-103", faculty: "Bandan Jot Kaur" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B2-103", faculty: "Babita Sharma" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Computer Networks", location: "Block-B2-103", faculty: "Himanshi" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "23CSP-339", location: "Block-B2-103", faculty: "Sumit Malhotra" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "23CSP-339", location: "Block-B2-103", faculty: "Sumit Malhotra" },
        { start: "03:35 PM", end: "04:25 PM", type: "Break", title: "Break", location: "", faculty: "" }
      ],
      Wednesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B2-103", faculty: "Babita Sharma" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B2-103", faculty: "Babita Sharma" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Computer Networks", location: "Block-B2-103", faculty: "Himanshi" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "Soft Skills-III", location: "Block-B2-106", faculty: "Amit Kaur" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Soft Skills-III", location: "Block-B2-106", faculty: "Amit Kaur" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B2-103", faculty: "Pratima Sonali Horo" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B2-103", faculty: "Pratima Sonali Horo" }
      ],
      Thursday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "ADBMS", location: "Block-B2-103", faculty: "Shweta Sharma" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "ADBMS", location: "Block-B2-103", faculty: "Shweta Sharma" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Soft Skills-III", location: "Block-B2-107", faculty: "Amit Kaur" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Soft Skills-III", location: "Block-B2-107", faculty: "Amit Kaur" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Computer Networks", location: "Block-B2-103", faculty: "Himanshi" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B2-103", faculty: "Babita Sharma" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Operating System", location: "Block-B2-103", faculty: "Bandan Jot Kaur" }
      ],
      Friday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Project Based Learning in Java", location: "Block-B2-103", faculty: "Kapil" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Project Based Learning in Java", location: "Block-B2-103", faculty: "Kapil" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B2-103", faculty: "Babita Sharma" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "Aptitude-III", location: "Block-B2-103", faculty: "Jagat Pal" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Aptitude-III", location: "Block-B2-103", faculty: "Jagat Pal" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "23CSP-339", location: "Block-B2-103", faculty: "Sumit Malhotra" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "23CSP-339", location: "Block-B2-103", faculty: "Sumit Malhotra" }
      ]
    }
  },
  {
    id: 2,
    name: "Mahika Gaba",
    phone: "79760 27842",
    timetable: {
      Monday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Vinay Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Vinay Kumar" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-102", faculty: "Gurvinder Kaur" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-102", faculty: "Gurvinder Kaur" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-105", faculty: "Radha" }
      ],
      Tuesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-110", faculty: "Gurvinder Kaur" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-110", faculty: "Gurvinder Kaur" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-308", faculty: "Komal" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-308", faculty: "Komal" }
      ],
      Wednesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-105", faculty: "Vinay Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-105", faculty: "Vinay Kumar" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-402-A", faculty: "Charnpreet Kaur" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-402-A", faculty: "Charnpreet Kaur" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" }
      ],
      Thursday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-105", faculty: "Radha" },
        { start: "03:35 PM", end: "04:25 PM", type: "Break", title: "Break", location: "", faculty: "" }
      ],
      Friday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-403-A", faculty: "Kuldeep Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-403-A", faculty: "Kuldeep Kumar" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-403-A", faculty: "Komal" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-403-A", faculty: "Komal" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "ADBMS", location: "Block-B3-105", faculty: "Manpreet Kaur" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "ADBMS", location: "Block-B3-105", faculty: "Manpreet Kaur" }
      ]
    }
  },
  {
    id: 3,
    name: "Ankit Tiwari",
    phone: "88375 30074",
    timetable: {
      Monday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Vinay Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Vinay Kumar" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-308-A", faculty: "Komal" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-308-A", faculty: "Komal" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-105", faculty: "Radha" }
      ],
      Tuesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-402-A", faculty: "Khushbu Cheetu" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-402-A", faculty: "Khushbu Cheetu" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" }
      ],
      Wednesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-105", faculty: "Vinay Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-105", faculty: "Vinay Kumar" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-A", faculty: "Nidhi Sood" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-A", faculty: "Nidhi Sood" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "ADBMS", location: "Block-B3-105", faculty: "Manpreet Kaur" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "ADBMS", location: "Block-B3-105", faculty: "Manpreet Kaur" }
      ],
      Thursday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-308", faculty: "Charnpreet Kaur" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-308", faculty: "Charnpreet Kaur" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-105", faculty: "Radha" },
        { start: "03:35 PM", end: "04:25 PM", type: "Break", title: "Break", location: "", faculty: "" }
      ],
      Friday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-402", faculty: "Komal" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-402", faculty: "Komal" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-B", faculty: "Nidhi Sood" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-B", faculty: "Nidhi Sood" }
      ]
    }
  },
  {
    id: 4,
    name: "Khushi Tyagi",
    phone: "99924 81747",
    timetable: {
      Monday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-510", faculty: "Charnpreet Kaur" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Operating System", location: "Block-B3-510", faculty: "Puneet Kaur" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Aptitude-III", location: "Block-B3-510", faculty: "Vinay Kumar" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Aptitude-III", location: "Block-B3-510", faculty: "Vinay Kumar" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Computer Networks", location: "Block-B3-108", faculty: "Kuldeep Kumar" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-A", faculty: "Nidhi Sood" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-A", faculty: "Nidhi Sood" }
      ],
      Tuesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-403-A", faculty: "Komal" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-403-A", faculty: "Komal" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Harsh Sharma" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Harsh Sharma" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-108", faculty: "Charnpreet Kaur" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Computer Networks", location: "Block-B3-108", faculty: "Kuldeep Kumar" },
        { start: "03:35 PM", end: "04:25 PM", type: "Break", title: "Break", location: "", faculty: "" }
      ],
      Wednesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-403-A", faculty: "Komal" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-403-A", faculty: "Komal" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Operating System", location: "Block-B3-108", faculty: "Puneet Kaur" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-108", faculty: "Radha" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-108", faculty: "Charnpreet Kaur" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-506", faculty: "Khushbu Cheetu" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-506", faculty: "Khushbu Cheetu" }
      ],
      Thursday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-108", faculty: "Vinay Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-108", faculty: "Vinay Kumar" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Operating System", location: "Block-B3-108", faculty: "Puneet Kaur" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "ADBMS", location: "Block-B3-402-A", faculty: "Manpreet Kaur" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "ADBMS", location: "Block-B3-402-A", faculty: "Manpreet Kaur" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-B", faculty: "Nidhi Sood" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-107-B", faculty: "Nidhi Sood" }
      ],
      Friday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Harsh Sharma" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Harsh Sharma" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-307", faculty: "Jyoti Arora" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-307", faculty: "Jyoti Arora" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-108", faculty: "Radha" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Computer Networks", location: "Block-B3-108", faculty: "Kuldeep Kumar" },
        { start: "03:35 PM", end: "04:25 PM", type: "Break", title: "Break", location: "", faculty: "" }
      ]
    }
  },
  {
    id: 5,
    name: "Ujjwal Garg",
    phone: "74578 10800",
    timetable: {
      Monday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-307", faculty: "Natali Singla" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-307", faculty: "Natali Singla" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Operating System", location: "Block-B3-109", faculty: "Jyoti Arora" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "Computer Networks", location: "Block-B3-404", faculty: "Natali Singla" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-303", faculty: "Amrita Chaudhary" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "ADBMS", location: "Block-B3-406", faculty: "Archana Kumari" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "ADBMS", location: "Block-B3-406", faculty: "Archana Kumari" }
      ],
      Tuesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Ankush" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Ankush" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-110", faculty: "Nidhi Sood" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-110", faculty: "Nidhi Sood" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-305", faculty: "Amrita Chaudhary" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Computer Networks", location: "Block-B3-610", faculty: "Natali Singla" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Operating System", location: "Block-B3-610", faculty: "Jyoti Arora" }
      ],
      Wednesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-308", faculty: "Monika Kumari" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-308", faculty: "Monika Kumari" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-303", faculty: "Amrita Chaudhary" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Harsh Sharma" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Harsh Sharma" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-403-A", faculty: "Komal" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-403-A", faculty: "Komal" }
      ],
      Thursday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Soft Skills-III", location: "Block-B3-110-A", faculty: "Nidhi Sood" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Soft Skills-III", location: "Block-B3-110-A", faculty: "Nidhi Sood" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Aptitude-III", location: "Block-B3-610", faculty: "Ankush" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Aptitude-III", location: "Block-B3-610", faculty: "Ankush" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-109", faculty: "Radha" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-402-A", faculty: "Komal" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-402-A", faculty: "Komal" }
      ],
      Friday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Computer Networks", location: "Block-B3-109", faculty: "Natali Singla" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-109", faculty: "Radha" },
        { start: "11:20 AM", end: "12:10 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Operating System", location: "Block-B3-109", faculty: "Jyoti Arora" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Harsh Sharma" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Harsh Sharma" }
      ]
    }
  },
  {
    id: 6,
    name: "Aayush Khanna",
    phone: "96464 72613",
    timetable: {
      Monday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Vinay Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-505", faculty: "Vinay Kumar" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-102", faculty: "Gurvinder Kaur" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-102", faculty: "Gurvinder Kaur" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-105", faculty: "Radha" }
      ],
      Tuesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "12:10 PM", end: "01:00 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:05 PM", end: "01:55 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-110", faculty: "Gurvinder Kaur" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Soft Skills-III", location: "Block-B3-110", faculty: "Gurvinder Kaur" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-308", faculty: "Komal" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-308", faculty: "Komal" }
      ],
      Wednesday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-105", faculty: "Vinay Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Aptitude-III", location: "Block-B3-105", faculty: "Vinay Kumar" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-402-A", faculty: "Charnpreet Kaur" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-402-A", faculty: "Charnpreet Kaur" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" }
      ],
      Thursday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Computer Networks", location: "Block-B3-105", faculty: "Kuldeep Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Design and Analysis of Algorithms", location: "Block-B3-105", faculty: "Charnpreet Kaur" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "AI and CPS Lab for Automation", location: "Block-B3-208", faculty: "Parveen Badoni" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Class", title: "Operating System", location: "Block-B3-105", faculty: "Puneet Kaur" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-105", faculty: "Radha" },
        { start: "03:35 PM", end: "04:25 PM", type: "Break", title: "Break", location: "", faculty: "" }
      ],
      Friday: [
        { start: "09:30 AM", end: "10:20 AM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-403-A", faculty: "Kuldeep Kumar" },
        { start: "10:20 AM", end: "11:10 AM", type: "Class", title: "Project Based Learning in Java", location: "Block-B3-403-A", faculty: "Kuldeep Kumar" },
        { start: "11:20 AM", end: "12:10 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-403-A", faculty: "Komal" },
        { start: "12:10 PM", end: "01:00 PM", type: "Class", title: "Competitive Coding-I", location: "Block-B3-403-A", faculty: "Komal" },
        { start: "01:05 PM", end: "01:55 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "01:55 PM", end: "02:45 PM", type: "Break", title: "Break", location: "", faculty: "" },
        { start: "02:45 PM", end: "03:35 PM", type: "Class", title: "ADBMS", location: "Block-B3-105", faculty: "Manpreet Kaur" },
        { start: "03:35 PM", end: "04:25 PM", type: "Class", title: "ADBMS", location: "Block-B3-105", faculty: "Manpreet Kaur" }
      ]
    }
  }
];
