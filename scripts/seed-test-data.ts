import { getDb } from "../server/db";
import {
  users,
  teachers,
  students,
  courses,
  classes,
  classEnrollments,
  enrollments,
  assignments,
  submissions,
  grades,
  attendance,
  announcements,
  notifications,
  attachments,
} from "../drizzle/schema";

async function seedTestData() {
  console.log("🌱 Starting test data seeding...");

  const db = await getDb();
  if (!db) {
    console.error("❌ Database connection failed");
    process.exit(1);
  }

  try {
    // ============================================
    // USERS - Create test users
    // ============================================
    console.log("📝 Creating users...");

    const adminUser = await db
      .insert(users)
      .values({
        openId: "oauth_admin_001",
        name: "Admin User",
        email: "admin@eduportal.edu",
        loginMethod: "google",
        role: "admin",
      })
      .then(() => ({ id: 1 }));

    const teacherUsers = await db
      .insert(users)
      .values([
        {
          openId: "oauth_teacher_001",
          name: "Dr. James Wilson",
          email: "james.wilson@eduportal.edu",
          loginMethod: "google",
          role: "teacher",
        },
        {
          openId: "oauth_teacher_002",
          name: "Prof. Sarah Johnson",
          email: "sarah.johnson@eduportal.edu",
          loginMethod: "google",
          role: "teacher",
        },
        {
          openId: "oauth_teacher_003",
          name: "Dr. Michael Chen",
          email: "michael.chen@eduportal.edu",
          loginMethod: "google",
          role: "teacher",
        },
      ]);

    const studentUsers = await db
      .insert(users)
      .values([
        {
          openId: "oauth_student_001",
          name: "John Doe",
          email: "john.doe@student.eduportal.edu",
          loginMethod: "google",
          role: "student",
        },
        {
          openId: "oauth_student_002",
          name: "Jane Smith",
          email: "jane.smith@student.eduportal.edu",
          loginMethod: "google",
          role: "student",
        },
        {
          openId: "oauth_student_003",
          name: "Robert Johnson",
          email: "robert.johnson@student.eduportal.edu",
          loginMethod: "google",
          role: "student",
        },
        {
          openId: "oauth_student_004",
          name: "Emily Davis",
          email: "emily.davis@student.eduportal.edu",
          loginMethod: "google",
          role: "student",
        },
        {
          openId: "oauth_student_005",
          name: "Michael Brown",
          email: "michael.brown@student.eduportal.edu",
          loginMethod: "google",
          role: "student",
        },
        {
          openId: "oauth_student_006",
          name: "Alice Wilson",
          email: "alice.wilson@student.eduportal.edu",
          loginMethod: "google",
          role: "student",
        },
      ]);

    console.log("✅ Users created: 1 admin + 3 teachers + 6 students");

    // ============================================
    // TEACHERS - Create teacher profiles
    // ============================================
    console.log("📝 Creating teacher profiles...");

    await db.insert(teachers).values([
      {
        userId: 2,
        employeeId: "EMP001",
        department: "Computer Science",
        specialization: "Machine Learning & AI",
      },
      {
        userId: 3,
        employeeId: "EMP002",
        department: "Computer Science",
        specialization: "Web Development",
      },
      {
        userId: 4,
        employeeId: "EMP003",
        department: "Mathematics",
        specialization: "Data Science & Statistics",
      },
    ]);

    console.log("✅ Teacher profiles created");

    // ============================================
    // STUDENTS - Create student profiles
    // ============================================
    console.log("📝 Creating student profiles...");

    await db.insert(students).values([
      {
        userId: 5,
        studentId: "STU001",
        fullName: "John Doe",
        email: "john.doe@student.eduportal.edu",
        section: "A",
        gradeLevel: "Second Year",
        department: "Computer Science",
        semester: 4,
        gpa: "3.85",
      },
      {
        userId: 6,
        studentId: "STU002",
        fullName: "Jane Smith",
        email: "jane.smith@student.eduportal.edu",
        section: "A",
        gradeLevel: "Second Year",
        department: "Computer Science",
        semester: 4,
        gpa: "3.92",
      },
      {
        userId: 7,
        studentId: "STU003",
        fullName: "Robert Johnson",
        email: "robert.johnson@student.eduportal.edu",
        section: "B",
        gradeLevel: "First Year",
        department: "Computer Science",
        semester: 2,
        gpa: "3.45",
      },
      {
        userId: 8,
        studentId: "STU004",
        fullName: "Emily Davis",
        email: "emily.davis@student.eduportal.edu",
        section: "B",
        gradeLevel: "First Year",
        department: "Mathematics",
        semester: 2,
        gpa: "3.65",
      },
      {
        userId: 9,
        studentId: "STU005",
        fullName: "Michael Brown",
        email: "michael.brown@student.eduportal.edu",
        section: "A",
        gradeLevel: "Third Year",
        department: "Computer Science",
        semester: 6,
        gpa: "3.78",
      },
      {
        userId: 10,
        studentId: "STU006",
        fullName: "Alice Wilson",
        email: "alice.wilson@student.eduportal.edu",
        section: "C",
        gradeLevel: "First Year",
        department: "Mathematics",
        semester: 2,
        gpa: "3.55",
      },
    ]);

    console.log("✅ Student profiles created");

    // ============================================
    // COURSES
    // ============================================
    console.log("📝 Creating courses...");

    const courseIds = await db
      .insert(courses)
      .values([
        {
          courseCode: "CS201",
          courseTitle: "Data Structures & Algorithms",
          courseType: "Theory",
          semester: 4,
          credits: 3,
          teacherId: 2,
          description:
            "Advanced concepts in data structures and algorithm design",
        },
        {
          courseCode: "CS301",
          courseTitle: "Machine Learning Fundamentals",
          courseType: "Theory",
          semester: 4,
          credits: 3,
          teacherId: 2,
          description: "Introduction to ML algorithms and applications",
        },
        {
          courseCode: "CS101",
          courseTitle: "Web Development Basics",
          courseType: "Practical",
          semester: 2,
          credits: 3,
          teacherId: 3,
          description: "HTML, CSS, JavaScript fundamentals",
        },
        {
          courseCode: "MATH201",
          courseTitle: "Linear Algebra",
          courseType: "Theory",
          semester: 4,
          credits: 3,
          teacherId: 4,
          description: "Matrix operations and linear transformations",
        },
        {
          courseCode: "MATH101",
          courseTitle: "Calculus I",
          courseType: "Theory",
          semester: 2,
          credits: 4,
          teacherId: 4,
          description: "Differential and integral calculus",
        },
      ]);

    console.log("✅ Courses created");

    // ============================================
    // CLASSES
    // ============================================
    console.log("📝 Creating classes...");

    const classIds = await db
      .insert(classes)
      .values([
        {
          teacherId: 2,
          className: "Data Structures - Section A",
          subject: "Data Structures & Algorithms",
          section: "A",
          schoolYear: "2024-2025",
        },
        {
          teacherId: 2,
          className: "Data Structures - Section B",
          subject: "Data Structures & Algorithms",
          section: "B",
          schoolYear: "2024-2025",
        },
        {
          teacherId: 3,
          className: "Web Dev Batch 2024",
          subject: "Web Development",
          section: "A",
          schoolYear: "2024-2025",
        },
        {
          teacherId: 4,
          className: "Linear Algebra - Morning",
          subject: "Linear Algebra",
          section: "A",
          schoolYear: "2024-2025",
        },
        {
          teacherId: 4,
          className: "Linear Algebra - Evening",
          subject: "Linear Algebra",
          section: "B",
          schoolYear: "2024-2025",
        },
      ]);

    console.log("✅ Classes created");

    // ============================================
    // CLASS ENROLLMENTS
    // ============================================
    console.log("📝 Creating class enrollments...");

    await db.insert(classEnrollments).values([
      { classId: 1, studentId: 1 },
      { classId: 1, studentId: 2 },
      { classId: 1, studentId: 5 },
      { classId: 2, studentId: 3 },
      { classId: 2, studentId: 4 },
      { classId: 3, studentId: 1 },
      { classId: 3, studentId: 3 },
      { classId: 4, studentId: 2 },
      { classId: 4, studentId: 4 },
      { classId: 4, studentId: 6 },
      { classId: 5, studentId: 3 },
      { classId: 5, studentId: 5 },
    ]);

    console.log("✅ Class enrollments created: 12 enrollments");

    // ============================================
    // COURSE ENROLLMENTS
    // ============================================
    console.log("📝 Creating course enrollments...");

    await db.insert(enrollments).values([
      { studentId: 1, courseId: 1, status: "active" },
      { studentId: 1, courseId: 3, status: "active" },
      { studentId: 2, courseId: 1, status: "active" },
      { studentId: 2, courseId: 4, status: "active" },
      { studentId: 3, courseId: 1, status: "active" },
      { studentId: 3, courseId: 3, status: "active" },
      { studentId: 4, courseId: 5, status: "active" },
      { studentId: 5, courseId: 1, status: "active" },
      { studentId: 5, courseId: 2, status: "active" },
      { studentId: 6, courseId: 4, status: "active" },
    ]);

    console.log("✅ Course enrollments created: 10 enrollments");

    // ============================================
    // ASSIGNMENTS
    // ============================================
    console.log("📝 Creating assignments...");

    const now = new Date();
    const assignmentIds = await db
      .insert(assignments)
      .values([
        {
          classId: 1,
          teacherId: 2,
          title: "Assignment 1: Array Operations",
          description: "Implement basic array operations",
          instructions:
            "Write functions for insertion, deletion, and search",
          dueDate: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          maxScore: 100,
          section: "A",
        },
        {
          classId: 1,
          teacherId: 2,
          title: "Assignment 2: Linked Lists",
          description: "Implement a singly linked list data structure",
          instructions:
            "Create a complete LinkedList class with all operations",
          dueDate: new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000).toISOString(),
          maxScore: 100,
          section: "A",
        },
        {
          classId: 2,
          teacherId: 2,
          title: "Quiz 1: DSA Fundamentals",
          description: "Multiple choice quiz on DSA basics",
          instructions: "Answer 20 questions in 1 hour",
          dueDate: new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000).toISOString(),
          maxScore: 50,
          section: "B",
        },
        {
          classId: 3,
          teacherId: 3,
          title: "Project 1: Personal Website",
          description: "Create a responsive personal portfolio website",
          instructions:
            "Use HTML5, CSS3, and JavaScript. Must be mobile responsive",
          dueDate: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          maxScore: 100,
          section: "A",
        },
        {
          classId: 3,
          teacherId: 3,
          title: "Assignment 1: CSS Styling",
          description: "Style a provided HTML template",
          instructions: "Create a modern, professional-looking stylesheet",
          dueDate: new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000).toISOString(),
          maxScore: 50,
          section: "A",
        },
        {
          classId: 4,
          teacherId: 4,
          title: "Assignment 1: Matrix Operations",
          description: "Solve 10 matrix problems",
          instructions: "Use both manual and code-based solutions",
          dueDate: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          maxScore: 100,
          section: "A",
        },
      ]);

    console.log("✅ Assignments created: 6 assignments");

    // ============================================
    // SUBMISSIONS
    // ============================================
    console.log("📝 Creating submissions...");

    await db.insert(submissions).values([
      {
        assignmentId: 1,
        studentId: 1,
        status: "graded",
        marksObtained: 95,
        remarks: "Excellent implementation with good optimization",
        submittedAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        reviewedAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        assignmentId: 1,
        studentId: 2,
        status: "graded",
        marksObtained: 92,
        remarks: "Good work, minor issues with edge cases",
        submittedAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        reviewedAt: now.toISOString(),
      },
      {
        assignmentId: 2,
        studentId: 1,
        status: "submitted",
        submittedAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        assignmentId: 2,
        studentId: 2,
        status: "pending",
      },
      {
        assignmentId: 3,
        studentId: 3,
        status: "graded",
        marksObtained: 45,
        remarks: "Good performance",
        submittedAt: new Date(now.getTime() - 1 * 60 * 60 * 1000).toISOString(),
        reviewedAt: now.toISOString(),
      },
      {
        assignmentId: 3,
        studentId: 4,
        status: "graded",
        marksObtained: 38,
        remarks: "Need to study more",
        submittedAt: new Date(now.getTime() - 2 * 60 * 60 * 1000).toISOString(),
        reviewedAt: now.toISOString(),
      },
      {
        assignmentId: 4,
        studentId: 1,
        status: "submitted",
        submittedAt: new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        assignmentId: 5,
        studentId: 1,
        status: "graded",
        marksObtained: 48,
        remarks: "Very professional design",
        submittedAt: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        reviewedAt: now.toISOString(),
      },
      {
        assignmentId: 5,
        studentId: 3,
        status: "submitted",
        submittedAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        assignmentId: 6,
        studentId: 2,
        status: "graded",
        marksObtained: 98,
        remarks: "Perfect solutions with detailed explanations",
        submittedAt: new Date(now.getTime() - 4 * 24 * 60 * 60 * 1000).toISOString(),
        reviewedAt: now.toISOString(),
      },
    ]);

    console.log("✅ Submissions created: 10 submissions");

    // ============================================
    // GRADES
    // ============================================
    console.log("📝 Creating grades...");

    await db.insert(grades).values([
      { studentId: 1, courseId: 1, grade: "A", marks: 95, percentage: "95%" },
      { studentId: 1, courseId: 3, grade: "A", marks: 93, percentage: "93%" },
      { studentId: 2, courseId: 1, grade: "A", marks: 92, percentage: "92%" },
      { studentId: 2, courseId: 4, grade: "A", marks: 94, percentage: "94%" },
      { studentId: 3, courseId: 1, grade: "B", marks: 88, percentage: "88%" },
      { studentId: 3, courseId: 3, grade: "B", marks: 85, percentage: "85%" },
      { studentId: 4, courseId: 5, grade: "A", marks: 91, percentage: "91%" },
      { studentId: 5, courseId: 1, grade: "A", marks: 96, percentage: "96%" },
      { studentId: 5, courseId: 2, grade: "A", marks: 94, percentage: "94%" },
      { studentId: 6, courseId: 4, grade: "B", marks: 84, percentage: "84%" },
    ]);

    console.log("✅ Grades created: 10 grades");

    // ============================================
    // ATTENDANCE
    // ============================================
    console.log("📝 Creating attendance records...");

    await db.insert(attendance).values([
      {
        classId: 1,
        studentId: 1,
        date: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        status: "present",
        recordedBy: 2,
      },
      {
        classId: 1,
        studentId: 2,
        date: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        status: "present",
        recordedBy: 2,
      },
      {
        classId: 1,
        studentId: 5,
        date: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        status: "absent",
        remarks: "Sick leave",
        recordedBy: 2,
      },
      {
        classId: 1,
        studentId: 1,
        date: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        status: "present",
        recordedBy: 2,
      },
      {
        classId: 1,
        studentId: 2,
        date: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        status: "late",
        recordedBy: 2,
      },
      {
        classId: 3,
        studentId: 1,
        date: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        status: "present",
        recordedBy: 3,
      },
      {
        classId: 3,
        studentId: 3,
        date: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        status: "present",
        recordedBy: 3,
      },
      {
        classId: 4,
        studentId: 2,
        date: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        status: "present",
        recordedBy: 4,
      },
      {
        classId: 4,
        studentId: 4,
        date: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        status: "absent",
        recordedBy: 4,
      },
    ]);

    console.log("✅ Attendance records created: 9 records");

    // ============================================
    // ANNOUNCEMENTS
    // ============================================
    console.log("📝 Creating announcements...");

    await db.insert(announcements).values([
      {
        teacherId: 2,
        classId: 1,
        title: "Welcome to DSA Class!",
        content:
          "This is an introductory course to Data Structures and Algorithms. Please check the syllabus for class schedule and grading policy.",
        priority: "high",
        isGlobal: 0,
      },
      {
        teacherId: 2,
        classId: 1,
        title: "Assignment 1 Released",
        content:
          "Assignment 1: Array Operations has been released. Due date: Next Friday. Please submit through the portal.",
        priority: "normal",
        isGlobal: 0,
      },
      {
        teacherId: 3,
        classId: 3,
        title: "Project 1 Guidelines",
        content:
          "Please review the project guidelines document uploaded in the resources section. Submit your projects by the deadline.",
        priority: "high",
        isGlobal: 0,
      },
      {
        teacherId: 4,
        classId: 4,
        title: "Office Hours",
        content:
          "I will be available for office hours every Tuesday from 2-4 PM in room 301. Feel free to drop by with any questions.",
        priority: "normal",
        isGlobal: 0,
      },
      {
        teacherId: 2,
        title: "University Holiday Notice",
        content:
          "The university will be closed on April 13 for Foundation Day. Classes will resume on April 14.",
        priority: "high",
        isGlobal: 1,
      },
      {
        teacherId: 2,
        title: "Library Extended Hours",
        content:
          "The library will have extended hours during exam season: Open until 11 PM on weekdays.",
        priority: "normal",
        isGlobal: 1,
      },
    ]);

    console.log("✅ Announcements created: 6 announcements");

    // ============================================
    // NOTIFICATIONS
    // ============================================
    console.log("📝 Creating notifications...");

    await db.insert(notifications).values([
      {
        userId: 5,
        type: "assignment_created",
        title: "New Assignment",
        message: "Prof. Wilson created a new assignment: Array Operations",
        relatedId: 1,
        isRead: 0,
      },
      {
        userId: 5,
        type: "assignment_graded",
        title: "Assignment Graded",
        message: "Your Assignment 1 has been graded: 95/100",
        relatedId: 1,
        isRead: 1,
      },
      {
        userId: 6,
        type: "assignment_created",
        title: "New Assignment",
        message: "Prof. Wilson created a new assignment: Linked Lists",
        relatedId: 2,
        isRead: 0,
      },
      {
        userId: 6,
        type: "assignment_graded",
        title: "Assignment Graded",
        message: "Your Assignment 1 has been graded: 92/100",
        relatedId: 1,
        isRead: 1,
      },
      {
        userId: 7,
        type: "assignment_created",
        title: "New Assignment",
        message: "Prof. Johnson created: CSS Styling",
        relatedId: 5,
        isRead: 0,
      },
      {
        userId: 8,
        type: "assignment_graded",
        title: "Quiz Graded",
        message: "Your Quiz 1 has been graded: 38/50",
        relatedId: 3,
        isRead: 1,
      },
      {
        userId: 2,
        type: "submission_received",
        title: "New Submission",
        message: "John Doe submitted Assignment 1",
        relatedId: 1,
        isRead: 1,
      },
      {
        userId: 2,
        type: "submission_received",
        title: "New Submission",
        message: "Michael Brown submitted Assignment 2",
        relatedId: 2,
        isRead: 0,
      },
    ]);

    console.log("✅ Notifications created: 8 notifications");

    // ============================================
    // ATTACHMENTS
    // ============================================
    console.log("📝 Creating attachments...");

    await db.insert(attachments).values([
      {
        assignmentId: 1,
        fileName: "DSA_Basics_Slides.pdf",
        fileUrl: "s3://eduportal/files/dsa_basics.pdf",
        fileType: "pdf",
        fileSize: 2048576,
        uploadedBy: 2,
      },
      {
        assignmentId: 1,
        fileName: "Array_Operations_Template.java",
        fileUrl: "s3://eduportal/files/array_template.java",
        fileType: "java",
        fileSize: 524288,
        uploadedBy: 2,
      },
      {
        assignmentId: 4,
        fileName: "Web_Dev_Project_Guidelines.pdf",
        fileUrl: "s3://eduportal/files/project_guidelines.pdf",
        fileType: "pdf",
        fileSize: 1024000,
        uploadedBy: 3,
      },
      {
        submissionId: 1,
        fileName: "John_Doe_Assignment1.java",
        fileUrl: "s3://eduportal/submissions/john_doe_a1.java",
        fileType: "java",
        fileSize: 125000,
        uploadedBy: 5,
      },
      {
        submissionId: 2,
        fileName: "Jane_Smith_Assignment1.java",
        fileUrl: "s3://eduportal/submissions/jane_smith_a1.java",
        fileType: "java",
        fileSize: 128000,
        uploadedBy: 6,
      },
    ]);

    console.log("✅ Attachments created: 5 attachments");

    console.log("\n✨ Test data seeding completed successfully!");
    console.log("\n📊 Summary:");
    console.log("   ✓ 1 Admin + 3 Teachers + 6 Students = 10 Users");
    console.log("   ✓ 5 Courses");
    console.log("   ✓ 5 Classes with 12 enrollments");
    console.log("   ✓ 10 Course enrollments");
    console.log("   ✓ 6 Assignments");
    console.log("   ✓ 10 Submissions (various statuses)");
    console.log("   ✓ 10 Grades");
    console.log("   ✓ 9 Attendance records");
    console.log("   ✓ 6 Announcements (4 class-specific + 2 global)");
    console.log("   ✓ 8 Notifications");
    console.log("   ✓ 5 Attachments");
    console.log("\n🧪 Ready to test all features!\n");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding test data:", error);
    process.exit(1);
  }
}

seedTestData();



