# EduPortal TODO

## Backend Setup
- [x] Express.js server with JWT authentication
- [x] MySQL database schema (users, students, teachers, subjects, grades, attendance, announcements, assignments, courses)
- [x] bcrypt password hashing integration
- [x] API routes: Authentication (register, login)
- [x] API routes: Student endpoints (profile, grades, attendance, announcements)
- [x] API routes: Teacher endpoints (grade management, attendance, announcements, assignments)
- [x] API routes: Course management
- [x] Database migrations and seed data
- [x] CORS and middleware setup

## Frontend - Authentication
- [x] Login screen UI (minimalist, centered, gradient background)
- [x] Register screen UI with role selection
- [ ] JWT token storage and session persistence
- [ ] Login/Register form validation
- [ ] Forgot password flow (UI)
- [ ] Auth context and hooks setup
- [ ] Protected route navigation

## Frontend - Navigation
- [ ] Bottom tab bar (5 tabs: Dashboard, Courses, Grades, Attendance, Profile)
- [ ] Animated sidebar/hamburger menu with gradient background
- [ ] Tab navigation routing with Expo Router
- [ ] Sidebar menu items (Dashboard, My Courses, Attendance, Results, Assignments, Announcements, Profile, Settings, Logout)
- [ ] Role-based menu differentiation (Student vs Teacher)

## Frontend - Student Dashboard
- [x] Dashboard layout with header, search, profile card
- [x] Attendance percentage circular chart
- [x] GPA card display
- [x] Subject cards listing
- [x] Assignment cards with deadlines
- [x] Announcements preview section
- [ ] Pull-to-refresh functionality
- [ ] Loading states and empty states

## Frontend - Student Screens
- [x] My Courses screen with semester filter and table
- [x] Grades module with subject breakdown and GPA calculator
- [x] Attendance module with calendar history
- [x] Assignments screen with filtering and details
- [ ] Announcements screen with priority indicators
- [ ] Profile screen with edit functionality and image upload
- [ ] Settings screen with dark mode toggle

## Frontend - Teacher Dashboard
- [x] Teacher dashboard layout with class overview
- [ ] Class performance analytics
- [ ] Student count cards
- [ ] Quick access buttons for management features
- [ ] Attendance and grade summary

## Frontend - Teacher Screens
- [ ] Grade Management screen (add, edit, delete grades)
- [ ] Attendance Management screen (mark attendance, generate reports)
- [ ] Announcements screen (create, edit, delete)
- [ ] Assignment Management screen (upload, set deadlines)
- [ ] Manage Students screen
- [ ] Profile screen (teacher-specific)
- [ ] Settings screen

## Frontend - UI Components
- [ ] Reusable card component with rounded corners and shadows
- [ ] Input field component (rounded, themed)
- [ ] Button component (primary, secondary, loading states)
- [ ] Circular progress chart component
- [ ] Table component for courses/grades
- [ ] Loading spinner and skeleton loaders
- [ ] Empty state component
- [ ] Notification/toast component
- [ ] Modal/bottom sheet component

## Frontend - Styling & Theme
- [ ] NativeWind/Tailwind CSS configuration with green/teal theme
- [ ] Dark mode support with CSS variables
- [ ] Responsive layout for portrait orientation
- [ ] Safe area handling for notch and home indicator
- [ ] Icon mapping in icon-symbol.tsx

## Frontend - API Integration
- [ ] Axios setup with base URL and interceptors
- [ ] Login/Register API calls
- [ ] Student data fetching (dashboard, grades, attendance, etc.)
- [ ] Teacher data fetching (class data, grades, attendance)
- [ ] CRUD operations for announcements, assignments, grades
- [ ] Error handling and retry logic
- [ ] Loading states during API calls

## Frontend - State Management
- [ ] Auth context (login state, user role, tokens)
- [ ] Student data context (dashboard data, grades, attendance)
- [ ] Teacher data context (class data, students)
- [ ] AsyncStorage for token persistence
- [ ] User preference storage (dark mode, etc.)

## Frontend - Polish & Features
- [ ] Haptic feedback on button press
- [ ] Smooth animations for sidebar, transitions
- [ ] Pull-to-refresh on dashboard
- [ ] Search functionality for courses/students
- [ ] Filter by semester/date range
- [ ] Logout confirmation dialog
- [ ] Session timeout handling
- [ ] Network error handling and offline mode

## Testing & Deployment
- [ ] Unit tests for API integration
- [ ] Component tests for screens
- [ ] End-to-end flow testing
- [ ] APK build configuration
- [ ] GitHub-ready project structure
- [ ] Production environment setup
- [ ] Final QA and bug fixes

## Branding
- [ ] Generate custom app logo/icon
- [ ] Update app.config.ts with branding (name, logo URL)
- [ ] Create splash screen assets
- [ ] Configure app colors in theme.config.js
