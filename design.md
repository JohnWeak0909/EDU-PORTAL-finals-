# EduPortal – Design Specification

## Overview
A modern educational mobile application featuring role-based dashboards for students and teachers with green/teal gradient theme, minimalist design, and smooth animations.

## Screen List

### Authentication Screens
1. **Login Screen** – Role-agnostic login with username/password
2. **Register Screen** – User registration with role selection
3. **Role Selection Screen** – Choose between Student or Teacher account

### Student Screens
4. **Student Dashboard** – Overview with attendance, GPA, assignments, announcements
5. **My Courses** – Semester-filtered course list with status
6. **Grades Module** – View grades, GPA, semester performance
7. **Attendance Module** – View attendance records, calendar history
8. **Assignments** – View and manage assignments
9. **Announcements** – Read announcements with priorities
10. **Profile** – Edit student profile, upload picture
11. **Settings** – App preferences, dark mode toggle
12. **Sidebar Menu** – Navigation drawer with menu items

### Teacher Screens
13. **Teacher Dashboard** – Class overview, student count, analytics
14. **Grade Management** – Add, edit, delete grades; view class performance
15. **Attendance Management** – Mark attendance, generate reports
16. **Announcements (Teacher)** – Create, edit, delete announcements
17. **Assignment Management** – Upload assignments, set deadlines, manage submissions
18. **Manage Students** – View and manage enrolled students
19. **Profile** – Edit teacher profile
20. **Settings** – App preferences

## Primary Content & Functionality

### Login Screen
- Minimalist centered layout with soft mint background
- Large graduation cap logo
- Username and password input fields (rounded, soft shadows)
- "Forgot Password" text link
- Rounded login button with arrow icon
- Role indicator or post-login redirect

### Student Dashboard
- Top navigation bar with hamburger menu and notification icon
- Search bar for courses/assignments
- Student profile card (name, ID, profile picture)
- Attendance percentage chart (circular progress)
- GPA card with current semester GPA
- Subject cards showing current courses
- Assignment cards (upcoming deadlines)
- Announcements preview section
- Bottom tab navigation (Dashboard, Courses, Grades, Attendance, Profile)

### Teacher Dashboard
- Class overview cards with student count
- Attendance management quick access
- Grade management summary
- Assignment uploads section
- Announcement posting area
- Analytics dashboard (class performance, attendance trends)
- Same bottom tab navigation adapted for teacher

### My Courses (Student)
- Semester dropdown filter
- Course table with columns: Course Code, Course Title, Course Type, Status
- Rounded white card container
- Green table headers
- Minimalist clean design

### Grades Module
- View grades per subject
- GPA display with interpretation
- Progress bars for each subject
- Semester filter
- Colored grade indicators (A, B, C, etc.)
- GPA calculator input (for student self-calculation)
- Circular charts and animated progress indicators

### Attendance Module
- Present/Absent/Late records display
- Attendance percentage overview
- Calendar attendance history
- Monthly/semester view toggle

## Key User Flows

### Student Login Flow
1. User opens app → Login Screen
2. Enters username/password → Taps Login
3. System validates credentials → Redirects to Student Dashboard
4. Dashboard loads with student data

### Student Viewing Grades
1. From Dashboard → Tap "Grades" tab or sidebar
2. Grades Module loads with current semester
3. User can filter by semester
4. View grades, GPA, progress bars
5. Optional: Use GPA calculator

### Teacher Creating Announcement
1. From Dashboard → Tap "Announcements" or sidebar
2. Announcements screen loads
3. Tap "Create New" button
4. Fill in title, content, priority
5. Tap "Post" → Announcement saved and visible to students

### Sidebar Navigation
1. User taps hamburger menu icon
2. Animated sidebar slides in from left with gradient green background
3. User selects menu item (Dashboard, Courses, Grades, etc.)
4. Screen transitions to selected section
5. Sidebar slides out automatically

## Color Scheme

| Element | Color | Usage |
|---------|-------|-------|
| Primary Gradient | Green → Teal | Headers, buttons, sidebar |
| Background | White (#FFFFFF) | Main screen backgrounds |
| Surface | Light Gray (#F5F5F5) | Cards, elevated surfaces |
| Text Primary | Dark Gray (#11181C) | Main text |
| Text Secondary | Medium Gray (#687076) | Secondary text, labels |
| Border | Light Gray (#E5E7EB) | Dividers, card borders |
| Success | Green (#22C55E) | Passing grades, success states |
| Warning | Amber (#F59E0B) | Warnings, pending states |
| Error | Red (#EF4444) | Failures, errors |

## Typography

- **Headers**: Bold, 24-32px (screen titles)
- **Subheaders**: Semibold, 18-20px (section titles)
- **Body**: Regular, 14-16px (main content)
- **Labels**: Regular, 12-14px (input labels, captions)
- **Buttons**: Semibold, 16px (call-to-action)

## Component Patterns

### Cards
- Rounded corners (16px border-radius)
- Soft shadows (elevation: 2-4)
- White background with light border
- Padding: 16px

### Buttons
- Rounded corners (12px border-radius)
- Primary: Green gradient background, white text
- Secondary: White background, green text, green border
- Height: 48px minimum (touch target)

### Input Fields
- Rounded corners (12px border-radius)
- Light gray background
- Soft border
- Padding: 12px 16px
- Placeholder text in medium gray

### Tab Navigation (Bottom)
- 5 tabs (Dashboard, Courses, Grades, Attendance, Profile)
- Icons + labels
- Active tab highlighted in green
- Fixed at bottom with safe area padding

### Sidebar Menu
- Gradient green background (top to bottom)
- White outlined icons
- Menu items with smooth slide animation
- Logout button at bottom

## Responsive Design

- **Portrait orientation only** (9:16 aspect ratio)
- **One-handed usage**: Primary actions within thumb reach
- **Safe area handling**: Content respects notch, home indicator
- **Tab bar spacing**: Bottom content has 60px padding for tab bar

## Animation Guidelines

- **Sidebar**: 300ms slide-in/out animation
- **Button press**: 80ms scale feedback (0.97)
- **Screen transitions**: 250ms fade or slide
- **Loading indicators**: Subtle spinning animation
- **Pull-to-refresh**: Standard iOS-style animation

## Dark Mode Support

- All colors adapt automatically
- Text colors invert (dark text → light text)
- Backgrounds invert (white → dark gray)
- Gradients maintain hue but adjust brightness
- No explicit `dark:` classes needed (CSS variables handle it)

## Accessibility

- Minimum touch target: 48x48px
- Color contrast: WCAG AA compliant
- Icon labels for all tab bar icons
- Semantic HTML/React structure
- Haptic feedback on button press
