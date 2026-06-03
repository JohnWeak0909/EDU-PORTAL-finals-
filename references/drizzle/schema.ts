import { int, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: int("id").primaryKey({ autoIncrement: true }),
  openId: text("openId").notNull().unique(),
  name: text("name"),
  email: text("email"),
  loginMethod: text("loginMethod"),
  role: text("role"),
  createdAt: text("createdAt"),
  updatedAt: text("updatedAt"),
  lastSignedIn: text("lastSignedIn"),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const students = sqliteTable("students", {
  id: int("id").primaryKey({ autoIncrement: true }),
  userId: int("userId"),
  studentId: text("studentId"),
  fullName: text("fullName"),
  email: text("email"),
  contactNumber: text("contactNumber"),
  section: text("section"),
  gradeLevel: text("gradeLevel"),
  department: text("department"),
  semester: int("semester"),
  gpa: text("gpa"),
  profilePicture: text("profilePicture"),
  createdAt: text("createdAt"),
  updatedAt: text("updatedAt"),
});

export type Student = typeof students.$inferSelect;
export type InsertStudent = typeof students.$inferInsert;

export const teachers = sqliteTable("teachers", {
  id: int("id").primaryKey({ autoIncrement: true }),
  userId: int("userId"),
  employeeId: text("employeeId"),
  department: text("department"),
  specialization: text("specialization"),
  profilePicture: text("profilePicture"),
  createdAt: text("createdAt"),
  updatedAt: text("updatedAt"),
});

export type Teacher = typeof teachers.$inferSelect;
export type InsertTeacher = typeof teachers.$inferInsert;

export const courses = sqliteTable("courses", {
  id: int("id").primaryKey({ autoIncrement: true }),
  courseCode: text("courseCode"),
  courseTitle: text("courseTitle"),
  courseType: text("courseType"),
  semester: int("semester"),
  credits: int("credits"),
  teacherId: int("teacherId"),
  description: text("description"),
  createdAt: text("createdAt"),
  updatedAt: text("updatedAt"),
});

export type Course = typeof courses.$inferSelect;
export type InsertCourse = typeof courses.$inferInsert;

export const enrollments = sqliteTable("enrollments", {
  id: int("id").primaryKey({ autoIncrement: true }),
  studentId: int("studentId"),
  courseId: int("courseId"),
  status: text("status"),
  enrolledAt: text("enrolledAt"),
});

export type Enrollment = typeof enrollments.$inferSelect;
export type InsertEnrollment = typeof enrollments.$inferInsert;

export const classes = sqliteTable("classes", {
  id: int("id").primaryKey({ autoIncrement: true }),
  teacherId: int("teacherId"),
  className: text("className"),
  subject: text("subject"),
  section: text("section"),
  schoolYear: text("schoolYear"),
  description: text("description"),
  isArchived: int("isArchived"),
  createdAt: text("createdAt"),
  updatedAt: text("updatedAt"),
});

export type Class = typeof classes.$inferSelect;
export type InsertClass = typeof classes.$inferInsert;

export const classEnrollments = sqliteTable("classEnrollments", {
  id: int("id").primaryKey({ autoIncrement: true }),
  classId: int("classId"),
  studentId: int("studentId"),
  enrolledAt: text("enrolledAt"),
});

export type ClassEnrollment = typeof classEnrollments.$inferSelect;
export type InsertClassEnrollment = typeof classEnrollments.$inferInsert;

export const grades = sqliteTable("grades", {
  id: int("id").primaryKey({ autoIncrement: true }),
  studentId: int("studentId"),
  courseId: int("courseId"),
  grade: text("grade"),
  marks: int("marks"),
  totalMarks: int("totalMarks"),
  percentage: text("percentage"),
  createdAt: text("createdAt"),
  updatedAt: text("updatedAt"),
});

export type Grade = typeof grades.$inferSelect;
export type InsertGrade = typeof grades.$inferInsert;

export const attendance = sqliteTable("attendance", {
  id: int("id").primaryKey({ autoIncrement: true }),
  classId: int("classId"),
  studentId: int("studentId"),
  date: text("date"),
  status: text("status"),
  remarks: text("remarks"),
  recordedBy: int("recordedBy"),
  createdAt: text("createdAt"),
});

export type Attendance = typeof attendance.$inferSelect;
export type InsertAttendance = typeof attendance.$inferInsert;

export const announcements = sqliteTable("announcements", {
  id: int("id").primaryKey({ autoIncrement: true }),
  teacherId: int("teacherId"),
  courseId: int("courseId"),
  classId: int("classId"),
  title: text("title"),
  content: text("content"),
  priority: text("priority"),
  isGlobal: int("isGlobal"),
  createdAt: text("createdAt"),
  updatedAt: text("updatedAt"),
});

export type Announcement = typeof announcements.$inferSelect;
export type InsertAnnouncement = typeof announcements.$inferInsert;

export const assignments = sqliteTable("assignments", {
  id: int("id").primaryKey({ autoIncrement: true }),
  classId: int("classId"),
  teacherId: int("teacherId"),
  title: text("title"),
  description: text("description"),
  instructions: text("instructions"),
  dueDate: text("dueDate"),
  maxScore: int("maxScore"),
  section: text("section"),
  createdAt: text("createdAt"),
  updatedAt: text("updatedAt"),
});

export type Assignment = typeof assignments.$inferSelect;
export type InsertAssignment = typeof assignments.$inferInsert;

export const attachments = sqliteTable("attachments", {
  id: int("id").primaryKey({ autoIncrement: true }),
  assignmentId: int("assignmentId"),
  submissionId: int("submissionId"),
  fileName: text("fileName"),
  fileUrl: text("fileUrl"),
  fileType: text("fileType"),
  fileSize: int("fileSize"),
  uploadedBy: int("uploadedBy"),
  uploadedAt: text("uploadedAt"),
});

export type Attachment = typeof attachments.$inferSelect;
export type InsertAttachment = typeof attachments.$inferInsert;

export const submissions = sqliteTable("submissions", {
  id: int("id").primaryKey({ autoIncrement: true }),
  assignmentId: int("assignmentId"),
  studentId: int("studentId"),
  status: text("status"),
  marksObtained: int("marksObtained"),
  remarks: text("remarks"),
  submittedAt: text("submittedAt"),
  reviewedAt: text("reviewedAt"),
  createdAt: text("createdAt"),
  updatedAt: text("updatedAt"),
});

export type Submission = typeof submissions.$inferSelect;
export type InsertSubmission = typeof submissions.$inferInsert;

export const notifications = sqliteTable("notifications", {
  id: int("id").primaryKey({ autoIncrement: true }),
  userId: int("userId"),
  type: text("type"),
  title: text("title"),
  message: text("message"),
  relatedId: int("relatedId"),
  isRead: int("isRead"),
  createdAt: text("createdAt"),
});

export type Notification = typeof notifications.$inferSelect;
export type InsertNotification = typeof notifications.$inferInsert;
