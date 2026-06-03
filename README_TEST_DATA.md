# 🧪 EduPortal Test Data Setup

Complete test data has been created to test all features of EduPortal. Follow these steps to get started.

## ⚡ Quick Start (3 steps)

```bash
# 1. Push database schema
npm run db:push

# 2. Seed test data
npm run seed

# 3. Start development server
npm run dev:metro
# Press 's' to switch to Expo Go
```

## 📊 Test Data Included

✅ **10 Users**: 1 admin + 3 teachers + 6 students  
✅ **5 Courses** with enrollments  
✅ **5 Classes** with 12 student enrollments  
✅ **6 Assignments** with various due dates  
✅ **10 Submissions** (pending, submitted, graded)  
✅ **10 Course Grades**  
✅ **9 Attendance Records**  
✅ **6 Announcements** (class and global)  
✅ **8 Notifications** (read and unread)  
✅ **5 File Attachments**

---

## 👤 Test User Accounts

### **Teachers**
| Name | Email | Dept | Specialization |
|------|-------|------|-----------------|
| Dr. James Wilson | james.wilson@eduportal.edu | Computer Science | ML & AI |
| Prof. Sarah Johnson | sarah.johnson@eduportal.edu | Computer Science | Web Dev |
| Dr. Michael Chen | michael.chen@eduportal.edu | Mathematics | Data Science |

### **Students**
| Name | Email | GPA | Year | Section |
|------|-------|-----|------|---------|
| John Doe | john.doe@student.eduportal.edu | 3.85 | 2nd | A |
| Jane Smith | jane.smith@student.eduportal.edu | 3.92 | 2nd | A |
| Robert Johnson | robert.johnson@student.eduportal.edu | 3.45 | 1st | B |
| Emily Davis | emily.davis@student.eduportal.edu | 3.65 | 1st | B |
| Michael Brown | michael.brown@student.eduportal.edu | 3.78 | 3rd | A |
| Alice Wilson | alice.wilson@student.eduportal.edu | 3.55 | 1st | C |

---

## 🎯 Test Scenarios

### Scenario 1: View Student Dashboard
```
1. Login as John Doe (john.doe@student.eduportal.edu)
2. See enrolled classes: Data Structures, Web Dev
3. See grades: DSA (A - 95%), Web Dev (A - 93%)
4. See assignments: Array Operations (Graded: 95/100)
5. See attendance records
```

### Scenario 2: Check Assignment Submissions
```
1. Login as Dr. James Wilson (james.wilson@eduportal.edu)
2. Go to Classes → Data Structures Section A
3. View 3 enrolled students: John, Jane, Michael
4. Check submissions for Assignment 1
5. See grades: John (95/100), Jane (92/100), Michael (Submitted)
```

### Scenario 3: View Announcements
```
1. Login as any student
2. Go to Announcements tab
3. See class announcements + global announcements
4. Check priorities and post dates
```

---

## 📁 Files Created

- **scripts/seed-test-data.ts** - TypeScript seed script
- **scripts/seed-test-data.sql** - SQL seed file (alternative)
- **scripts/TEST-GUIDE.js** - Comprehensive test guide
- **README_TEST_DATA.md** - This file

## 🔧 Commands

```bash
# Create database schema
npm run db:push

# Seed test data
npm run seed

# View full test guide
node scripts/TEST-GUIDE.js

# Run development server
npm run dev:server

# Start app in Expo Go
npm run dev:metro

# Run tests
npm run test
```

---

## ✅ Feature Checklist

### Student Features
- [x] Dashboard with personal info
- [x] View enrolled classes and courses
- [x] Submit assignments
- [x] View grades
- [x] Check attendance
- [x] Receive notifications
- [x] View announcements

### Teacher Features
- [x] Manage classes and enrollments
- [x] Create and manage assignments
- [x] Grade submissions
- [x] Record attendance
- [x] Post announcements
- [x] Send notifications

### General Features
- [x] OAuth authentication
- [x] Role-based access
- [x] Responsive design
- [x] Dark/Light mode
- [x] Error handling
- [x] File attachments

---

## 🐛 Troubleshooting

### Database not syncing
```bash
npm run db:push
npm run seed
```

### Seed command fails
- Ensure database is accessible
- Check environment variables
- Verify Node.js version (16+)

### App won't load in Expo Go
- Press `r` to reload the app
- Check terminal for error messages
- Ensure `npm run dev:metro` is running

### Missing test data
- Run `npm run seed` again
- Check console for SQL errors
- Query database to verify data exists

---

## 📊 Database Queries for Verification

```sql
-- Count total users
SELECT role, COUNT(*) as count FROM users GROUP BY role;

-- View student enrollments
SELECT s.fullName, COUNT(ce.id) as classes 
FROM students s 
LEFT JOIN classEnrollments ce ON s.id = ce.studentId 
GROUP BY s.id;

-- Check pending submissions
SELECT a.title, COUNT(s.id) as pending 
FROM submissions s 
JOIN assignments a ON s.assignmentId = a.id 
WHERE s.status = 'pending' 
GROUP BY a.id;

-- View attendance summary
SELECT st.fullName, a.status, COUNT(*) as count 
FROM attendance a 
JOIN students st ON a.studentId = st.id 
GROUP BY st.id, a.status;
```

---

## 🚀 Next Steps

1. ✅ Run seed command: `npm run seed`
2. ✅ Start dev server: `npm run dev:metro`
3. ✅ Open Expo Go on your phone
4. ✅ Scan QR code
5. ✅ Login with test accounts
6. ✅ Test all features
7. ✅ Report any issues

---

## 📝 Notes

- All timestamps are set to NOW() during seeding
- Assignment due dates are relative (7, 14, 21 days from now)
- Test data covers all major user workflows
- Ready for comprehensive feature testing
- Can be reset by running `npm run seed` again

Happy testing! 🎉
