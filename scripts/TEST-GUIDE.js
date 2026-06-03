#!/usr/bin/env node
/**
 * EduPortal Test Data Guide
 * ========================
 * 
 * This document describes the test data created and how to test each feature.
 */

const testGuide = `
═══════════════════════════════════════════════════════════════════════════════
                          🧪 EDUPORTAL TEST DATA GUIDE
═══════════════════════════════════════════════════════════════════════════════

📊 TEST DATA SUMMARY
────────────────────────────────────────────────────────────────────────────────

✓ Users:              10 total (1 admin, 3 teachers, 6 students)
✓ Teachers:           3 teacher profiles
✓ Students:           6 student profiles  
✓ Courses:            5 courses
✓ Classes:            5 classes with 12 total enrollments
✓ Assignments:        6 assignments (various statuses)
✓ Submissions:        10 submissions (pending, submitted, graded)
✓ Grades:             10 grades across courses
✓ Attendance:         9 attendance records (present, absent, late, excused)
✓ Announcements:      6 announcements (4 class-specific, 2 global)
✓ Notifications:      8 notifications (unread and read)
✓ Attachments:        5 file attachments

═══════════════════════════════════════════════════════════════════════════════
                            🚀 SETUP INSTRUCTIONS
═══════════════════════════════════════════════════════════════════════════════

1. PUSH DATABASE SCHEMA
   npm run db:push

2. SEED TEST DATA
   npm run seed

3. START DEVELOPMENT SERVER
   npm run dev:server

4. START APP (in another terminal)
   npm run dev:metro
   (Press 's' to switch to Expo Go)

═══════════════════════════════════════════════════════════════════════════════
                         🧬 TEST USER CREDENTIALS
═══════════════════════════════════════════════════════════════════════════════

ADMIN USER
──────────
Role:   Admin
OpenID: oauth_admin_001
Name:   Admin User
Email:  admin@eduportal.edu
Access: Full system access, user management


TEACHER USERS
─────────────

1. Dr. James Wilson (Teacher 1)
   OpenID: oauth_teacher_001
   Email:  james.wilson@eduportal.edu
   EmpID:  EMP001
   Dept:   Computer Science
   Spec:   Machine Learning & AI
   Classes: Data Structures A & B
   Teaches: 2 courses, manages 3 classes

2. Prof. Sarah Johnson (Teacher 2)
   OpenID: oauth_teacher_002
   Email:  sarah.johnson@eduportal.edu
   EmpID:  EMP002
   Dept:   Computer Science
   Spec:   Web Development
   Classes: Web Dev Batch 2024
   Teaches: 1 course, manages 1 class

3. Dr. Michael Chen (Teacher 3)
   OpenID: oauth_teacher_003
   Email:  michael.chen@eduportal.edu
   EmpID:  EMP003
   Dept:   Mathematics
   Spec:   Data Science & Statistics
   Classes: Linear Algebra Morning & Evening
   Teaches: 2 courses, manages 2 classes


STUDENT USERS
──────────────

1. John Doe (STU001)
   OpenID:     oauth_student_001
   Email:      john.doe@student.eduportal.edu
   GPA:        3.85
   Year:       Second Year
   Section:    A
   Department: Computer Science
   Enrolled:   3 courses, 2 classes

2. Jane Smith (STU002)
   OpenID:     oauth_student_002
   Email:      jane.smith@student.eduportal.edu
   GPA:        3.92
   Year:       Second Year
   Section:    A
   Department: Computer Science
   Enrolled:   2 courses, 1 class

3. Robert Johnson (STU003)
   OpenID:     oauth_student_003
   Email:      robert.johnson@student.eduportal.edu
   GPA:        3.45
   Year:       First Year
   Section:    B
   Department: Computer Science
   Enrolled:   2 courses, 2 classes

4. Emily Davis (STU004)
   OpenID:     oauth_student_004
   Email:      emily.davis@student.eduportal.edu
   GPA:        3.65
   Year:       First Year
   Section:    B
   Department: Mathematics
   Enrolled:   1 course, 1 class

5. Michael Brown (STU005)
   OpenID:     oauth_student_005
   Email:      michael.brown@student.eduportal.edu
   GPA:        3.78
   Year:       Third Year
   Section:    A
   Department: Computer Science
   Enrolled:   2 courses, 1 class

6. Alice Wilson (STU006)
   OpenID:     oauth_student_006
   Email:      alice.wilson@student.eduportal.edu
   GPA:        3.55
   Year:       First Year
   Section:    C
   Department: Mathematics
   Enrolled:   1 course, 1 class

═══════════════════════════════════════════════════════════════════════════════
                          ✅ FEATURE TEST CHECKLIST
═══════════════════════════════════════════════════════════════════════════════

STUDENT FEATURES
────────────────

Dashboard
  □ View personal information (name, ID, GPA, section)
  □ View enrolled classes and courses
  □ View current semester GPA
  □ See recent announcements from enrolled classes
  □ Quick access to assignments and grades

Courses
  □ View all enrolled courses
  □ See course details (code, title, credits, teacher)
  □ View course-specific grades
  □ Access course materials and announcements

Classes
  □ View assigned classes and sections
  □ See class schedule
  □ View class announcements and materials
  □ See enrolled classmates

Assignments
  □ View all assignments for enrolled classes
  □ Filter by status (pending, submitted, graded)
  □ Download assignment files
  □ View due dates and max scores
  □ Submit assignments (upload files)
  □ View submission feedback and marks
  □ Track submission status

Grades
  □ View grades for all courses
  □ See grade breakdown (marks, percentage, letter grade)
  □ View assignment-wise grades
  □ Track GPA trends

Attendance
  □ View attendance records for each class
  □ See attendance percentage
  □ Check recent attendance status (present/absent/late/excused)
  □ View remarks for absences

Notifications
  □ Receive notifications for:
    - New assignments created
    - Assignment deadlines
    - Submission received (teachers)
    - Grades published
    - Announcements posted
  □ Mark notifications as read
  □ Filter notifications by type


TEACHER FEATURES
────────────────

Dashboard
  □ View all taught classes and courses
  □ See student count per class
  □ View pending submissions count
  □ Quick access to class management

Classes
  □ Create new classes
  □ Manage class enrollments
  □ View class roster (student list)
  □ Edit class information
  □ Archive old classes

Assignments
  □ Create new assignments
  □ Set due dates and max scores
  □ Upload assignment files and resources
  □ View submitted work by students
  □ Track submission status
  □ Grade submissions and provide feedback
  □ Add marks and remarks

Grades
  □ Enter grades for submissions
  □ Manage grade book
  □ Calculate and display student averages
  □ Export grade reports

Attendance
  □ Record attendance for classes
  □ Mark students as present/absent/late/excused
  □ Add remarks (sick leave, etc.)
  □ View attendance reports
  □ Calculate attendance percentage

Announcements
  □ Post class-specific announcements
  □ Create global announcements (if admin)
  □ Set announcement priority (high/normal/low)
  □ Edit and delete announcements
  □ View announcement reach

Submissions
  □ Download submitted files
  □ View submission timestamps
  □ Grade multiple submissions
  □ Provide feedback and remarks
  □ Send notifications to students

Notifications
  □ Receive notifications for:
    - New submissions from students
    - Announcement reach
    - Class roster updates
  □ Manage notification preferences


GENERAL FEATURES
─────────────────

Authentication
  □ Login with OAuth (Google)
  □ Automatic role assignment (student/teacher/admin)
  □ Session persistence
  □ Logout functionality

User Profile
  □ View profile information
  □ Update profile picture (if applicable)
  □ Edit personal details
  □ Change password

Search & Filter
  □ Search for assignments
  □ Filter assignments by status, class, due date
  □ Search announcements
  □ Filter grades by course

Dark Mode / Light Mode
  □ Toggle between themes
  □ Preferences persist
  □ All components styled correctly in both modes

Responsive Design
  □ Mobile layout for small screens
  □ Tablet layout for medium screens
  □ Desktop layout for large screens
  □ Touch-friendly buttons and inputs

Error Handling
  □ Display meaningful error messages
  □ Handle network failures gracefully
  □ Validate form inputs
  □ Show loading states

═══════════════════════════════════════════════════════════════════════════════
                           🎯 TEST SCENARIOS
═══════════════════════════════════════════════════════════════════════════════

SCENARIO 1: Student Assignment Workflow
────────────────────────────────────────
1. Login as John Doe (student)
2. Navigate to Assignments tab
3. See "Assignment 1: Array Operations" (Status: Graded, 95/100)
4. See "Assignment 2: Linked Lists" (Status: Submitted, waiting for review)
5. Download assignment files
6. Upload a new submission for pending assignments
7. Check notification for "Assignment Graded"
8. View feedback from teacher

SCENARIO 2: Teacher Grading Workflow
─────────────────────────────────────
1. Login as Dr. James Wilson (teacher)
2. Navigate to Classes → Data Structures Section A
3. View roster: John Doe, Jane Smith, Michael Brown (3 students)
4. Go to Submissions → Assignment 1
5. See 3 submissions (Doe: Graded, Smith: Graded, Brown: Submitted)
6. Open Brown's submission, download file
7. Add marks (92/100) and feedback
8. Mark as Graded
9. Student receives notification

SCENARIO 3: Attendance Tracking
────────────────────────────────
1. Login as Dr. Chen (teacher)
2. Navigate to Attendance for Linear Algebra Morning
3. View students: Jane Smith, Emily Davis, Alice Wilson
4. Mark attendance:
   - Jane Smith: Present
   - Emily Davis: Absent (sick leave)
   - Alice Wilson: Late
5. Save records
6. View attendance report
7. Students can see their attendance in their dashboard

SCENARIO 4: Grade Tracking
───────────────────────────
1. Login as John Doe (student)
2. Navigate to Grades tab
3. See all courses with grades:
   - Data Structures: A (95%)
   - Web Development: A (93%)
4. Click on Data Structures to see breakdown:
   - Assignment 1: 95/100
   - Assignment 2: (pending)
   - Overall: A (95%)

SCENARIO 5: Announcement Broadcasting
──────────────────────────────────────
1. Login as Prof. Johnson (teacher)
2. Navigate to Classes → Web Dev Batch 2024
3. Create new announcement
4. Title: "Midterm Exam Schedule"
5. Content: "Exam on March 15, 2024. Duration: 2 hours"
6. Set priority: High
7. Publish
8. Enrolled students receive notification
9. Announcement appears on their dashboard

═══════════════════════════════════════════════════════════════════════════════
                        🔍 DATA QUERIES FOR TESTING
═══════════════════════════════════════════════════════════════════════════════

Get Student Dashboard Data
────────────────────────────
SELECT s.*, u.* FROM students s 
JOIN users u ON s.userId = u.id 
WHERE u.openId = 'oauth_student_001';

Get Teacher Classes
────────────────────
SELECT * FROM classes 
WHERE teacherId = 2 AND isArchived = FALSE;

Get Assignments for Class
──────────────────────────
SELECT * FROM assignments 
WHERE classId = 1 
ORDER BY dueDate ASC;

Get Submission Status
──────────────────────
SELECT a.title, s.studentId, s.status, s.marksObtained 
FROM submissions s 
JOIN assignments a ON s.assignmentId = a.id 
WHERE a.classId = 1;

Get Grades Report
──────────────────
SELECT st.fullName, c.courseTitle, g.grade, g.marks, g.percentage 
FROM grades g 
JOIN students st ON g.studentId = st.id 
JOIN courses c ON g.courseId = c.id 
ORDER BY st.id;

Get Attendance Report
──────────────────────
SELECT st.fullName, a.date, a.status, a.remarks 
FROM attendance a 
JOIN students st ON a.studentId = st.id 
WHERE a.classId = 1 
ORDER BY a.date DESC;

═══════════════════════════════════════════════════════════════════════════════
                        📝 TROUBLESHOOTING TIPS
═══════════════════════════════════════════════════════════════════════════════

Database Issues
───────────────
• Run db:push again if tables don't exist
• Check database connection in .env
• Verify all environment variables are set

Seed Data Issues
────────────────
• Ensure database schema is created first
• Run: npm run db:push
• Then run: npm run seed
• Check for foreign key constraint errors

Login Issues
────────────
• Make sure OAuth credentials are configured
• Check Expo Go connection
• Verify environment variables for OAuth

Missing Data
────────────
• Check if seeding completed successfully
• Run seed command again if needed
• Verify data with SQL queries above

Performance Testing
───────────────────
• Test with large datasets (1000+ students)
• Check pagination on long lists
• Monitor app responsiveness during file uploads

═══════════════════════════════════════════════════════════════════════════════
                            ✨ NEXT STEPS
═══════════════════════════════════════════════════════════════════════════════

1. Run the setup commands in order
2. Start the development server
3. Open Expo Go on your phone
4. Scan the QR code to load the app
5. Login with different test user accounts
6. Follow the test scenarios above
7. Report any issues or bugs found
8. Test on different devices (iOS and Android)

═══════════════════════════════════════════════════════════════════════════════
`;

console.log(testGuide);
