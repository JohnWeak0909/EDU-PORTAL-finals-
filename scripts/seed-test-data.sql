-- Test Data for EduPortal
-- This script creates test users, classes, assignments, grades, attendance, and announcements

-- ============================================
-- USERS - Core Authentication
-- ============================================

-- Admin User
INSERT INTO users (openId, name, email, loginMethod, role, createdAt, updatedAt, lastSignedIn) 
VALUES ('oauth_admin_001', 'Admin User', 'admin@eduportal.edu', 'google', 'admin', NOW(), NOW(), NOW());

-- Teachers
INSERT INTO users (openId, name, email, loginMethod, role, createdAt, updatedAt, lastSignedIn) 
VALUES 
('oauth_teacher_001', 'Dr. James Wilson', 'james.wilson@eduportal.edu', 'google', 'teacher', NOW(), NOW(), NOW()),
('oauth_teacher_002', 'Prof. Sarah Johnson', 'sarah.johnson@eduportal.edu', 'google', 'teacher', NOW(), NOW(), NOW()),
('oauth_teacher_003', 'Dr. Michael Chen', 'michael.chen@eduportal.edu', 'google', 'teacher', NOW(), NOW(), NOW());

-- Students
INSERT INTO users (openId, name, email, loginMethod, role, createdAt, updatedAt, lastSignedIn) 
VALUES 
('oauth_student_001', 'John Doe', 'john.doe@student.eduportal.edu', 'google', 'student', NOW(), NOW(), NOW()),
('oauth_student_002', 'Jane Smith', 'jane.smith@student.eduportal.edu', 'google', 'student', NOW(), NOW(), NOW()),
('oauth_student_003', 'Robert Johnson', 'robert.johnson@student.eduportal.edu', 'google', 'student', NOW(), NOW(), NOW()),
('oauth_student_004', 'Emily Davis', 'emily.davis@student.eduportal.edu', 'google', 'student', NOW(), NOW(), NOW()),
('oauth_student_005', 'Michael Brown', 'michael.brown@student.eduportal.edu', 'google', 'student', NOW(), NOW(), NOW()),
('oauth_student_006', 'Alice Wilson', 'alice.wilson@student.eduportal.edu', 'google', 'student', NOW(), NOW(), NOW());

-- ============================================
-- TEACHERS - Teacher Profiles
-- ============================================

INSERT INTO teachers (userId, employeeId, department, specialization, createdAt, updatedAt) 
VALUES 
(2, 'EMP001', 'Computer Science', 'Machine Learning & AI', NOW(), NOW()),
(3, 'EMP002', 'Computer Science', 'Web Development', NOW(), NOW()),
(4, 'EMP003', 'Mathematics', 'Data Science & Statistics', NOW(), NOW());

-- ============================================
-- STUDENTS - Student Profiles
-- ============================================

INSERT INTO students (userId, studentId, fullName, email, section, gradeLevel, department, semester, gpa, createdAt, updatedAt) 
VALUES 
(5, 'STU001', 'John Doe', 'john.doe@student.eduportal.edu', 'A', 'Second Year', 'Computer Science', 4, '3.85', NOW(), NOW()),
(6, 'STU002', 'Jane Smith', 'jane.smith@student.eduportal.edu', 'A', 'Second Year', 'Computer Science', 4, '3.92', NOW(), NOW()),
(7, 'STU003', 'Robert Johnson', 'robert.johnson@student.eduportal.edu', 'B', 'First Year', 'Computer Science', 2, '3.45', NOW(), NOW()),
(8, 'STU004', 'Emily Davis', 'emily.davis@student.eduportal.edu', 'B', 'First Year', 'Mathematics', 2, '3.65', NOW(), NOW()),
(9, 'STU005', 'Michael Brown', 'michael.brown@student.eduportal.edu', 'A', 'Third Year', 'Computer Science', 6, '3.78', NOW(), NOW()),
(10, 'STU006', 'Alice Wilson', 'alice.wilson@student.eduportal.edu', 'C', 'First Year', 'Mathematics', 2, '3.55', NOW(), NOW());

-- ============================================
-- COURSES - Courses offered
-- ============================================

INSERT INTO courses (courseCode, courseTitle, courseType, semester, credits, teacherId, description, createdAt, updatedAt) 
VALUES 
('CS201', 'Data Structures & Algorithms', 'Theory', 4, 3, 2, 'Advanced concepts in data structures and algorithm design', NOW(), NOW()),
('CS301', 'Machine Learning Fundamentals', 'Theory', 4, 3, 2, 'Introduction to ML algorithms and applications', NOW(), NOW()),
('CS101', 'Web Development Basics', 'Practical', 2, 3, 3, 'HTML, CSS, JavaScript fundamentals', NOW(), NOW()),
('MATH201', 'Linear Algebra', 'Theory', 4, 3, 4, 'Matrix operations and linear transformations', NOW(), NOW()),
('MATH101', 'Calculus I', 'Theory', 2, 4, 4, 'Differential and integral calculus', NOW(), NOW());

-- ============================================
-- CLASSES - Class Organization
-- ============================================

INSERT INTO classes (teacherId, className, subject, section, schoolYear, isArchived, createdAt, updatedAt) 
VALUES 
(2, 'Data Structures - Section A', 'Data Structures & Algorithms', 'A', '2024-2025', FALSE, NOW(), NOW()),
(2, 'Data Structures - Section B', 'Data Structures & Algorithms', 'B', '2024-2025', FALSE, NOW(), NOW()),
(3, 'Web Dev Batch 2024', 'Web Development', 'A', '2024-2025', FALSE, NOW(), NOW()),
(4, 'Linear Algebra - Morning', 'Linear Algebra', 'A', '2024-2025', FALSE, NOW(), NOW()),
(4, 'Linear Algebra - Evening', 'Linear Algebra', 'B', '2024-2025', FALSE, NOW(), NOW());

-- ============================================
-- CLASS ENROLLMENTS - Student enrollment in classes
-- ============================================

INSERT INTO classEnrollments (classId, studentId, enrolledAt) 
VALUES 
-- Section A classes
(1, 1, NOW()), -- John Doe - Data Structures A
(1, 2, NOW()), -- Jane Smith - Data Structures A
(1, 5, NOW()), -- Michael Brown - Data Structures A
(2, 3, NOW()), -- Robert Johnson - Data Structures B
(2, 4, NOW()), -- Emily Davis - Data Structures B
-- Web Dev classes
(3, 1, NOW()), -- John Doe - Web Dev
(3, 3, NOW()), -- Robert Johnson - Web Dev
-- Linear Algebra classes
(4, 2, NOW()), -- Jane Smith - Linear Algebra Morning
(4, 4, NOW()), -- Emily Davis - Linear Algebra Morning
(4, 6, NOW()), -- Alice Wilson - Linear Algebra Morning
(5, 3, NOW()), -- Robert Johnson - Linear Algebra Evening
(5, 5, NOW()); -- Michael Brown - Linear Algebra Evening

-- ============================================
-- COURSE ENROLLMENTS
-- ============================================

INSERT INTO enrollments (studentId, courseId, status, enrolledAt) 
VALUES 
(1, 1, 'active', NOW()), -- John - Data Structures
(1, 3, 'active', NOW()), -- John - Web Dev
(2, 1, 'active', NOW()), -- Jane - Data Structures
(2, 4, 'active', NOW()), -- Jane - Linear Algebra
(3, 1, 'active', NOW()), -- Robert - Data Structures
(3, 3, 'active', NOW()), -- Robert - Web Dev
(4, 5, 'active', NOW()), -- Emily - Calculus
(5, 1, 'active', NOW()), -- Michael - Data Structures
(5, 2, 'active', NOW()), -- Michael - ML Fundamentals
(6, 4, 'active', NOW()); -- Alice - Linear Algebra

-- ============================================
-- ASSIGNMENTS - Test assignments with various due dates
-- ============================================

INSERT INTO assignments (classId, teacherId, title, description, instructions, dueDate, maxScore, section, createdAt, updatedAt) 
VALUES 
(1, 2, 'Assignment 1: Array Operations', 'Implement basic array operations', 'Write functions for insertion, deletion, and search', DATE_ADD(NOW(), INTERVAL 7 DAY), 100, 'A', NOW(), NOW()),
(1, 2, 'Assignment 2: Linked Lists', 'Implement a singly linked list data structure', 'Create a complete LinkedList class with all operations', DATE_ADD(NOW(), INTERVAL 14 DAY), 100, 'A', NOW(), NOW()),
(1, 2, 'Assignment 3: Sorting Algorithms', 'Implement and compare sorting algorithms', 'Implement Bubble Sort, Quick Sort, Merge Sort and create performance report', DATE_ADD(NOW(), INTERVAL 21 DAY), 100, 'A', NOW(), NOW()),
(2, 2, 'Quiz 1: DSA Fundamentals', 'Multiple choice quiz on DSA basics', 'Answer 20 questions in 1 hour', DATE_ADD(NOW(), INTERVAL 3 DAY), 50, 'B', NOW(), NOW()),
(3, 3, 'Project 1: Personal Website', 'Create a responsive personal portfolio website', 'Use HTML5, CSS3, and JavaScript. Must be mobile responsive', DATE_ADD(NOW(), INTERVAL 30 DAY), 100, 'A', NOW(), NOW()),
(3, 3, 'Assignment 1: CSS Styling', 'Style a provided HTML template', 'Create a modern, professional-looking stylesheet', DATE_ADD(NOW(), INTERVAL 10 DAY), 50, 'A', NOW(), NOW()),
(4, 4, 'Assignment 1: Matrix Operations', 'Solve 10 matrix problems', 'Use both manual and code-based solutions', DATE_ADD(NOW(), INTERVAL 7 DAY), 100, 'A', NOW(), NOW()),
(5, 4, 'Homework 1: Vector Spaces', 'Complete exercise set 3.1-3.5', 'Show all work for full credit', DATE_ADD(NOW(), INTERVAL 5 DAY), 50, 'B', NOW(), NOW());

-- ============================================
-- SUBMISSIONS - Student submissions with various statuses
-- ============================================

INSERT INTO submissions (assignmentId, studentId, status, marksObtained, remarks, submittedAt, reviewedAt, createdAt, updatedAt) 
VALUES 
-- Assignment 1: Array Operations (Class 1)
(1, 1, 'graded', 95, 'Excellent implementation with good optimization', DATE_ADD(NOW(), INTERVAL -2 DAY), DATE_ADD(NOW(), INTERVAL -1 DAY), NOW(), NOW()),
(1, 2, 'graded', 92, 'Good work, minor issues with edge cases', DATE_ADD(NOW(), INTERVAL -1 DAY), NOW(), NOW(), NOW()),
(1, 5, 'submitted', NULL, 'Waiting for review', DATE_ADD(NOW(), INTERVAL -3 HOUR), NULL, NOW(), NOW()),
-- Assignment 2: Linked Lists (Class 1)
(2, 1, 'submitted', NULL, 'Submitted on time', DATE_ADD(NOW(), INTERVAL -1 DAY), NULL, NOW(), NOW()),
(2, 2, 'pending', NULL, 'Not yet submitted', NULL, NULL, NOW(), NOW()),
(2, 5, 'pending', NULL, 'Not yet submitted', NULL, NULL, NOW(), NOW()),
-- Assignment 3: Sorting Algorithms (Class 1)
(3, 1, 'pending', NULL, 'Not yet submitted', NULL, NULL, NOW(), NOW()),
-- Quiz 1: DSA Fundamentals (Class 2)
(4, 3, 'graded', 45, 'Good performance', DATE_ADD(NOW(), INTERVAL -1 HOUR), NOW(), NOW(), NOW()),
(4, 4, 'graded', 38, 'Need to study more', DATE_ADD(NOW(), INTERVAL -2 HOUR), NOW(), NOW(), NOW()),
-- Project 1: Personal Website (Class 3)
(5, 1, 'submitted', NULL, 'Submitted for review', DATE_ADD(NOW(), INTERVAL -5 DAY), NULL, NOW(), NOW()),
(5, 3, 'pending', NULL, 'Not yet submitted', NULL, NULL, NOW(), NOW()),
-- Assignment 1: CSS Styling (Class 3)
(6, 1, 'graded', 48, 'Very professional design', DATE_ADD(NOW(), INTERVAL -3 DAY), NOW(), NOW(), NOW()),
(6, 3, 'submitted', NULL, 'Waiting for review', DATE_ADD(NOW(), INTERVAL -2 DAY), NULL, NOW(), NOW()),
-- Assignment 1: Matrix Operations (Class 4)
(7, 2, 'graded', 98, 'Perfect solutions with detailed explanations', DATE_ADD(NOW(), INTERVAL -4 DAY), NOW(), NOW(), NOW()),
(7, 4, 'graded', 85, 'Good effort, some calculation errors', DATE_ADD(NOW(), INTERVAL -3 DAY), NOW(), NOW(), NOW()),
(7, 6, 'submitted', NULL, 'Submitted', DATE_ADD(NOW(), INTERVAL -1 DAY), NULL, NOW(), NOW()),
-- Homework 1: Vector Spaces (Class 5)
(8, 3, 'pending', NULL, 'Not yet submitted', NULL, NULL, NOW(), NOW()),
(8, 5, 'submitted', NULL, 'Submitted last minute', DATE_ADD(NOW(), INTERVAL -1 HOUR), NULL, NOW(), NOW());

-- ============================================
-- GRADES - Course grades
-- ============================================

INSERT INTO grades (studentId, courseId, grade, marks, totalMarks, percentage, createdAt, updatedAt) 
VALUES 
-- John Doe (STU001)
(1, 1, 'A', 95, 100, '95%', NOW(), NOW()),
(1, 3, 'A', 93, 100, '93%', NOW(), NOW()),
-- Jane Smith (STU002)
(2, 1, 'A', 92, 100, '92%', NOW(), NOW()),
(2, 4, 'A', 94, 100, '94%', NOW(), NOW()),
-- Robert Johnson (STU003)
(3, 1, 'B', 88, 100, '88%', NOW(), NOW()),
(3, 3, 'B', 85, 100, '85%', NOW(), NOW()),
-- Emily Davis (STU004)
(4, 5, 'A', 91, 100, '91%', NOW(), NOW()),
(4, 1, 'B', 87, 100, '87%', NOW(), NOW()),
-- Michael Brown (STU005)
(5, 1, 'A', 96, 100, '96%', NOW(), NOW()),
(5, 2, 'A', 94, 100, '94%', NOW(), NOW()),
-- Alice Wilson (STU006)
(6, 4, 'B', 84, 100, '84%', NOW(), NOW());

-- ============================================
-- ATTENDANCE - Attendance records for classes
-- ============================================

INSERT INTO attendance (classId, studentId, date, status, remarks, recordedBy, createdAt) 
VALUES 
-- Data Structures Class A - Recent dates
(1, 1, DATE_ADD(NOW(), INTERVAL -1 DAY), 'present', NULL, 2, NOW()),
(1, 2, DATE_ADD(NOW(), INTERVAL -1 DAY), 'present', NULL, 2, NOW()),
(1, 5, DATE_ADD(NOW(), INTERVAL -1 DAY), 'absent', 'Sick leave', 2, NOW()),
(1, 1, DATE_ADD(NOW(), INTERVAL -3 DAY), 'present', NULL, 2, NOW()),
(1, 2, DATE_ADD(NOW(), INTERVAL -3 DAY), 'late', NULL, 2, NOW()),
(1, 5, DATE_ADD(NOW(), INTERVAL -3 DAY), 'present', NULL, 2, NOW()),
(1, 1, DATE_ADD(NOW(), INTERVAL -5 DAY), 'present', NULL, 2, NOW()),
(1, 2, DATE_ADD(NOW(), INTERVAL -5 DAY), 'present', NULL, 2, NOW()),
(1, 5, DATE_ADD(NOW(), INTERVAL -5 DAY), 'present', NULL, 2, NOW()),
-- Web Development Class - Recent dates
(3, 1, DATE_ADD(NOW(), INTERVAL -1 DAY), 'present', NULL, 3, NOW()),
(3, 3, DATE_ADD(NOW(), INTERVAL -1 DAY), 'present', NULL, 3, NOW()),
(3, 1, DATE_ADD(NOW(), INTERVAL -3 DAY), 'present', NULL, 3, NOW()),
(3, 3, DATE_ADD(NOW(), INTERVAL -3 DAY), 'excused', 'Medical appointment', 3, NOW()),
-- Linear Algebra Classes
(4, 2, DATE_ADD(NOW(), INTERVAL -2 DAY), 'present', NULL, 4, NOW()),
(4, 4, DATE_ADD(NOW(), INTERVAL -2 DAY), 'absent', NULL, 4, NOW()),
(4, 6, DATE_ADD(NOW(), INTERVAL -2 DAY), 'present', NULL, 4, NOW()),
(5, 3, DATE_ADD(NOW(), INTERVAL -2 DAY), 'late', NULL, 4, NOW()),
(5, 5, DATE_ADD(NOW(), INTERVAL -2 DAY), 'present', NULL, 4, NOW());

-- ============================================
-- ANNOUNCEMENTS - Class and global announcements
-- ============================================

INSERT INTO announcements (teacherId, classId, title, content, priority, isGlobal, createdAt, updatedAt) 
VALUES 
-- Data Structures Class A Announcements
(2, 1, 'Welcome to DSA Class!', 'This is an introductory course to Data Structures and Algorithms. Please check the syllabus for class schedule and grading policy.', 'high', FALSE, NOW(), NOW()),
(2, 1, 'Assignment 1 Released', 'Assignment 1: Array Operations has been released. Due date: Next Friday. Please submit through the portal.', 'normal', FALSE, NOW(), NOW()),
(2, 1, 'Midterm Exam Schedule', 'Midterm exam will be held on March 15, 2024. The exam will cover Chapters 1-5. Duration: 2 hours.', 'high', FALSE, DATE_ADD(NOW(), INTERVAL 5 DAY), DATE_ADD(NOW(), INTERVAL 5 DAY)),
-- Web Development Class Announcements
(3, 3, 'Project 1 Guidelines', 'Please review the project guidelines document uploaded in the resources section. Submit your projects by the deadline.', 'high', FALSE, NOW(), NOW()),
(3, 3, 'HTML5 Tutorial Video', 'Check out the new tutorial video on HTML5 semantic elements. Link: https://...', 'normal', FALSE, NOW(), NOW()),
-- Linear Algebra Morning Class
(4, 4, 'Practice Problem Set Released', 'Practice problems for Chapter 4 are available. Solutions will be uploaded next week.', 'normal', FALSE, NOW(), NOW()),
(4, 4, 'Office Hours', 'I will be available for office hours every Tuesday from 2-4 PM in room 301. Feel free to drop by with any questions.', 'normal', FALSE, NOW(), NOW()),
-- Global Announcements
(2, NULL, 'University Holiday Notice', 'The university will be closed on April 13 for Foundation Day. Classes will resume on April 14.', 'high', TRUE, NOW(), NOW()),
(2, NULL, 'Library Extended Hours', 'The library will have extended hours during exam season: Open until 11 PM on weekdays.', 'normal', TRUE, NOW(), NOW());

-- ============================================
-- NOTIFICATIONS - User notifications
-- ============================================

INSERT INTO notifications (userId, type, title, message, relatedId, isRead, createdAt) 
VALUES 
-- Student 1 (John Doe) - userId 5
(5, 'assignment_created', 'New Assignment', 'Prof. Wilson created a new assignment: Array Operations', 1, FALSE, DATE_ADD(NOW(), INTERVAL -5 HOUR)),
(5, 'submission_received', 'Submission Received', 'Your submission for Assignment 1 has been received', 1, TRUE, DATE_ADD(NOW(), INTERVAL -3 DAY)),
(5, 'assignment_graded', 'Assignment Graded', 'Your Assignment 1 has been graded: 95/100', 1, TRUE, DATE_ADD(NOW(), INTERVAL -2 DAY)),
(5, 'announcement_posted', 'New Announcement', 'Prof. Wilson posted: Assignment 1 Released', 2, FALSE, DATE_ADD(NOW(), INTERVAL -4 HOUR)),
-- Student 2 (Jane Smith) - userId 6
(6, 'assignment_created', 'New Assignment', 'Prof. Wilson created a new assignment: Linked Lists', 2, FALSE, DATE_ADD(NOW(), INTERVAL -7 DAY)),
(6, 'assignment_graded', 'Assignment Graded', 'Your Assignment 1 has been graded: 92/100', 1, TRUE, DATE_ADD(NOW(), INTERVAL -1 DAY)),
-- Student 3 (Robert Johnson) - userId 7
(7, 'assignment_created', 'New Assignment', 'Prof. Johnson created: CSS Styling', 6, FALSE, DATE_ADD(NOW(), INTERVAL -2 DAY)),
(7, 'submission_received', 'Submission Received', 'Your submission has been received', 6, TRUE, DATE_ADD(NOW(), INTERVAL -2 DAY)),
-- Student 4 (Emily Davis) - userId 8
(8, 'assignment_created', 'Quiz Available', 'Quiz 1: DSA Fundamentals is available', 4, FALSE, DATE_ADD(NOW(), INTERVAL -3 DAY)),
(8, 'assignment_graded', 'Quiz Graded', 'Your Quiz 1 has been graded: 38/50', 4, TRUE, DATE_ADD(NOW(), INTERVAL -1 HOUR)),
-- Teacher 1 (James Wilson) - userId 2
(2, 'submission_received', 'New Submission', 'John Doe submitted Assignment 1', 1, TRUE, DATE_ADD(NOW(), INTERVAL -3 DAY)),
(2, 'submission_received', 'New Submission', 'Michael Brown submitted Assignment 2', 2, FALSE, DATE_ADD(NOW(), INTERVAL -1 DAY));

-- ============================================
-- ATTACHMENTS - Files uploaded with assignments
-- ============================================

INSERT INTO attachments (assignmentId, fileName, fileUrl, fileType, fileSize, uploadedBy, uploadedAt) 
VALUES 
-- Assignment 1 resources
(1, 'DSA_Basics_Slides.pdf', 's3://eduportal/files/dsa_basics.pdf', 'pdf', 2048576, 2, NOW()),
(1, 'Array_Operations_Template.java', 's3://eduportal/files/array_template.java', 'java', 524288, 2, NOW()),
-- Assignment 2 resources
(2, 'LinkedList_Implementation_Guide.pdf', 's3://eduportal/files/linkedlist_guide.pdf', 'pdf', 1536000, 2, NOW()),
-- Project 1 resources
(5, 'Web_Dev_Project_Guidelines.pdf', 's3://eduportal/files/project_guidelines.pdf', 'pdf', 1024000, 3, NOW()),
(5, 'HTML_Boilerplate.zip', 's3://eduportal/files/html_boilerplate.zip', 'zip', 512000, 3, NOW()),
-- Student submission attachments
(1, 'John_Doe_Assignment1.java', 's3://eduportal/submissions/john_doe_a1.java', 'java', 125000, 5, DATE_ADD(NOW(), INTERVAL -2 DAY)),
(1, 'Jane_Smith_Assignment1.java', 's3://eduportal/submissions/jane_smith_a1.java', 'java', 128000, 6, DATE_ADD(NOW(), INTERVAL -1 DAY));

-- ============================================
-- Summary Statistics
-- ============================================
-- This script creates:
-- - 1 Admin + 3 Teachers + 6 Students = 10 Users
-- - 5 Courses with enrollments
-- - 5 Classes with 12 class enrollments
-- - 8 Assignments
-- - 16 Submissions (various statuses)
-- - 11 Grades
-- - 19 Attendance records
-- - 9 Announcements (7 class-specific + 2 global)
-- - 12 Notifications
-- - 7 Attachments
-- Ready to test all major functionality!
