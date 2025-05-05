# CNIT Academy UI PRD

## Status: Draft

## Intro

This document outlines the requirements for the Minimum Viable Product (MVP) of the CNIT Academy UI frontend, specifically focusing on the features related to Courses and Lectures. The goal is to build a functional user interface on top of the existing CNIT Academy backend API, enabling students to view and interact with learning materials (Courses and Lectures) and administrators to manage them. This PRD serves as the source of truth for the development team (junior developers and AI agents) for the next development cycle (approx. 2 weeks).

## Goals and Context

The primary objective of this development phase is to implement the core user interface components and pages within the `/dashboard` section for Course and Lecture functionalities.

-   **Project Objectives**:
    -   Enable students to browse available courses.
    -   Allow students to view detailed information about courses and their associated lectures.
    -   Allow students to track their progress by starting and finishing courses and lectures.
    -   Enable administrators to perform CRUD (Create, Read, Update, Delete) operations on courses.
    -   Enable administrators to perform CRUD operations on lectures, associating them with courses.
-   **Measurable Outcomes**:
    -   Functional UI pages for listing and detailing courses and lectures.
    -   Functional UI forms and actions for admin management of courses and lectures.
    *   User interaction buttons (Start/Finish) successfully call the corresponding backend API endpoints.
-   **Success Criteria**:
    -   Students can navigate the dashboard to find, view, start, and finish courses and lectures.
    -   Administrators can successfully create, view, update, and delete courses and lectures through the UI.
    -   The UI adheres to the specified modern/professional look and feel using Shadcn/UI.
    -   Data fetching and state management are handled efficiently using TanStack Query (react-query) and Zustand/Context API where appropriate.
-   **Key Performance Indicators (KPIs)**:
    -   Completion rate of the defined Epic Stories within the 2-week timeframe.
    *   Successful manual testing of all implemented user flows (student and admin).

## Features and Requirements

**Functional Requirements:**

-   **Student View:**
    -   Display a paginated list of all available courses.
    -   Display detailed view of a single course, including its description, metadata, and list of lectures.
    -   Display detailed view of a single lecture.
    -   Allow users to mark a course as "started".
    *   Allow users to mark a course as "finished" (potentially awarding coins via backend).
    *   Allow users to mark a lecture as "started".
    *   Allow users to mark a lecture as "finished" (potentially awarding coins via backend).
    -   Display lists of "My Courses" and "My Lectures" (courses/lectures the user has interacted with).
-   **Admin View:**
    -   Display a paginated list of all courses with options to edit/delete.
    -   Provide a form to create new courses.
    -   Provide a form to edit existing courses.
    -   Implement functionality to delete courses.
    -   Display a paginated list of all lectures (potentially filterable by course) with options to edit/delete.
    -   Provide a form to create new lectures, including associating them with a course.
    -   Provide a form to edit existing lectures.
    -   Implement functionality to delete lectures.
    -   Admin sections/actions should only be visible/accessible to users with the admin role.

**Non-functional Requirements:**

-   **UI Framework**: Use Next.js App Router.
-   **Component Library**: Utilize Shadcn/UI components for UI elements.
-   **Styling**: Use Tailwind CSS for styling.
-   **Responsiveness**: Ensure the UI is reasonably responsive on common desktop screen sizes. Mobile responsiveness is a secondary goal for this phase.
-   **Performance**: Optimize data fetching using TanStack Query (react-query) to ensure a smooth user experience.

**User Experience Requirements:**

-   **Look and Feel**: Modern and professional aesthetic.
-   **Navigation**: Clear and intuitive navigation within the dashboard section.
-   **Forms**: Use `react-hook-form` and `zod` for form validation and management.
-   **Feedback**: Provide appropriate loading states and user feedback for actions (e.g., success/error messages using Shadcn/UI Toasts).

**Integration Requirements:**

-   Integrate with the existing CNIT Academy backend API endpoints documented in the `README.md`.
-   Handle authentication tokens (JWT) for accessing protected backend routes (fetching user-specific data, admin actions). Assume a basic mechanism exists to obtain and store the token (e.g., after login).

**Testing Requirements:**

-   Manual testing of all user flows and features is required as this is a demo project. Automated testing is out of scope for this phase.

## Epic Story List

### Epic 0: Initial Setup & Dashboard Foundation

*(Assumption: Basic login functionality exists to obtain a JWT token and user role info. If not, a prerequisite story is needed).*

-   **Story 0.1: Basic Dashboard Layout & Navigation**
    -   **Requirements**:
        -   Create a main layout component for the `/dashboard` route group (`app/dashboard/layout.tsx`).
        -   Include a persistent sidebar or header for navigation within the dashboard.
        -   Use Shadcn/UI components for layout structure (e.g., `Resizable Panel Group`, basic `Card`).
        -   Navigation links should include placeholders for Courses, My Learning, Admin (conditional), Profile (future), Logout.
        -   Fetch and store basic user info (like role) using Zustand/Context API upon dashboard load to control conditional rendering (e.g., Admin links).

### Epic 1: Student Course & Lecture UI

-   **Story 1.1: Display Course List Page**
    -   **Requirements**:
        -   Create page `app/dashboard/courses/page.tsx`.
        -   Fetch data from `GET /api/course` using TanStack Query, handling pagination (`page`, `limit` query params).
        -   Display courses in a list or grid format using Shadcn/UI components (e.g., `Card`, `Table`).
        -   Include basic course info (title, description snippet, duration, coins).
        -   Each course item should link to its detailed view (`/dashboard/courses/[id]`).
        -   Implement pagination controls (e.g., Shadcn/UI `Pagination` component) based on `paginationMeta`.
        -   Add loading and error states.
-   **Story 1.2: Display Course Detail Page**
    -   **Requirements**:
        -   Create page `app/dashboard/courses/[id]/page.tsx`.
        -   Fetch data from `GET /api/course/:id` using TanStack Query.
        -   Display detailed course information (title, description, duration, coins, etc.).
        -   Display the list of lectures associated with the course (id, title).
        -   Each lecture item should link to its detailed view (`/dashboard/lectures/[lectureId]`).
        -   Display "Start Course" / "Finish Course" buttons (functional implementation in Story 1.4).
        -   Show course status (started/finished) if available in the API response.
        -   Add loading and error states.
-   **Story 1.3: Display Lecture Detail Page**
    -   **Requirements**:
        -   Create page `app/dashboard/lectures/[id]/page.tsx`.
        -   Fetch data from `GET /api/lecture/:id` using TanStack Query.
        -   Display lecture details (title, content, video URL if present).
        -   Display "Start Lecture" / "Finish Lecture" buttons (functional implementation in Story 1.5).
        -   Show lecture status (started/finished) if available in the API response.
        -   Add loading and error states.
        -   (Optional: Embed video using a suitable player if `videoUrl` exists).
-   **Story 1.4: Implement Course Start/Finish Actions**
    -   **Requirements**:
        -   On the Course Detail page (Story 1.2), implement the logic for the "Start Course" and "Finish Course" buttons.
        -   "Start Course" button calls `PUT /api/course/:id/start`.
        -   "Finish Course" button calls `PUT /api/course/:id/finish`.
        -   Use TanStack Query mutations for these actions.
        -   Provide user feedback on success/failure (e.g., toast notifications).
        -   Update UI state accordingly (e.g., disable buttons, show status change) and potentially invalidate relevant query cache.
        -   Button visibility/state should depend on the current course status (`started`, `finished` flags from `GET /api/course/:id`).
-   **Story 1.5: Implement Lecture Start/Finish Actions**
    -   **Requirements**:
        -   On the Lecture Detail page (Story 1.3), implement the logic for the "Start Lecture" and "Finish Lecture" buttons.
        -   "Start Lecture" button calls `PUT /api/lecture/:id/start`.
        -   "Finish Lecture" button calls `PUT /api/lecture/:id/finish`.
        -   Use TanStack Query mutations.
        -   Provide user feedback and update UI state/invalidate cache.
        -   Button visibility/state should depend on the current lecture status.
-   **Story 1.6: Display "My Courses" Page**
    -   **Requirements**:
        -   Create page `app/dashboard/my-courses/page.tsx` (or similar route).
        -   Fetch data from `GET /api/course/my`.
        -   Display the list of courses the user has started/finished.
        -   Include status indicators (started, finished).
        -   Link to course detail pages.
-   **Story 1.7: Display "My Lectures" Page**
    -   **Requirements**:
        -   Create page `app/dashboard/my-lectures/page.tsx` (or similar route).
        -   Fetch data from `GET /api/lecture/my`.
        -   Display the list of lectures the user has started/finished.
        -   Include status indicators (started, finished).
        -   Link to lecture detail pages.

### Epic 2: Admin Course & Lecture Management UI

*(Requires admin role check implemented in Story 0.1)*

-   **Story 2.1: Admin Course List Page**
    -   **Requirements**:
        -   Create page `app/dashboard/admin/courses/page.tsx`.
        -   Fetch data from `GET /api/course` (similar to Story 1.1, but potentially showing more admin-relevant data if needed).
        -   Display courses in a `Table` (Shadcn/UI).
        -   Include columns for Title, Duration, Coins, Student Count, Created At.
        -   Add columns/buttons for "Edit" (links to `/admin/courses/[id]/edit`) and "Delete" actions.
        -   Add a "Create New Course" button (links to `/admin/courses/new`).
        -   Implement pagination.
        -   Add loading/error states. Ensure route/page is only accessible to admins.
-   **Story 2.2: Create Course Form Page**
    -   **Requirements**:
        -   Create page `app/dashboard/admin/courses/new/page.tsx`.
        -   Implement a form using `react-hook-form`, `zod` for validation, and Shadcn/UI `Form` components.
        -   Include fields for `title`, `description`, `durationInHours`, `coins`.
        -   On submit, call `POST /api/course/admin` using a TanStack Query mutation.
        -   Provide user feedback (toast) and redirect to the admin course list on success.
        -   Handle errors appropriately. Ensure route/page is only accessible to admins.
-   **Story 2.3: Edit Course Form Page**
    -   **Requirements**:
        -   Create page `app/dashboard/admin/courses/[id]/edit/page.tsx`.
        -   Fetch existing course data using `GET /api/course/:id`.
        -   Pre-populate the form (similar to Story 2.2) with existing data.
        -   On submit, call `PATCH /api/course/admin/:id` using a mutation.
        -   Provide user feedback and redirect to the admin course list on success.
        -   Handle errors. Ensure route/page is only accessible to admins.
-   **Story 2.4: Implement Delete Course Action**
    -   **Requirements**:
        -   On the Admin Course List page (Story 2.1), implement the "Delete" button functionality.
        -   Use Shadcn/UI `AlertDialog` for confirmation.
        -   On confirmation, call `DELETE /api/course/admin/:id` using a mutation.
        -   Provide user feedback and invalidate the course list query cache on success.
        -   Handle errors.
-   **Story 2.5: Admin Lecture List Page**
    -   **Requirements**:
        -   Create page `app/dashboard/admin/lectures/page.tsx`.
        -   Fetch data from `GET /api/lecture`.
        -   Display lectures in a `Table`.
        -   Include columns for Title, Course ID (or Title via a separate fetch/join if needed), Coins.
        -   Add columns/buttons for "Edit" (links to `/admin/lectures/[id]/edit`) and "Delete" actions.
        -   Add a "Create New Lecture" button (links to `/admin/lectures/new`).
        -   Implement pagination.
        -   (Optional: Add filtering by Course ID).
        -   Add loading/error states. Ensure route/page is only accessible to admins.
-   **Story 2.6: Create Lecture Form Page**
    -   **Requirements**:
        -   Create page `app/dashboard/admin/lectures/new/page.tsx`.
        -   Implement a form using `react-hook-form`, `zod`, and Shadcn/UI `Form`.
        -   Include fields for `title`, `content` (use Shadcn/UI `Textarea`), `videoUrl` (optional), `courseId` (use a `Select` populated by fetching courses from `GET /api/course`), `coins`.
        -   On submit, call `POST /api/lecture/admin` using a mutation.
        -   Provide feedback and redirect to the admin lecture list on success.
        -   Handle errors. Ensure route/page is only accessible to admins.
-   **Story 2.7: Edit Lecture Form Page**
    -   **Requirements**:
        -   Create page `app/dashboard/admin/lectures/[id]/edit/page.tsx`.
        -   Fetch existing lecture data using `GET /api/lecture/:id`.
        -   Pre-populate the form (similar to Story 2.6) with existing data.
        -   On submit, call `PATCH /api/lecture/admin/:id` using a mutation.
        -   Provide feedback and redirect to the admin lecture list on success.
        -   Handle errors. Ensure route/page is only accessible to admins.
-   **Story 2.8: Implement Delete Lecture Action**
    -   **Requirements**:
        -   On the Admin Lecture List page (Story 2.5), implement the "Delete" button functionality.
        -   Use `AlertDialog` for confirmation.
        -   On confirmation, call `DELETE /api/lecture/admin/:id` using a mutation.
        -   Provide feedback and invalidate the lecture list query cache on success.
        -   Handle errors.

### Epic-N: Future Epic Enhancements (Beyond Scope of current PRD)

-   Full Profile View/Edit UI (`/api/profile/*`)
-   Programs UI (Student & Admin) (`/api/program/*`)
-   Leaderboard UI (`/api/leaderboard/*`)
-   Refined Blog UI (Student & Admin) (`/api/blog/*`)
-   Full Authentication Flow UI (Login, Register, Verify Email Pages)
-   Mobile Responsiveness improvements.
-   Automated Testing.

## Technology Stack

| Technology          | Version             | Description                                       |
| ------------------- | ------------------- | ------------------------------------------------- |
| Framework           | Next.js (latest)    | React framework for server-side rendering and SPA |
| Language            | TypeScript (latest) | Superset of JavaScript adding static types        |
| UI Library          | Shadcn/UI (latest)  | Composable and accessible UI components           |
| Styling             | Tailwind CSS(latest)| Utility-first CSS framework                       |
| State Management    | Zustand / Context API | For global/shared state (e.g., user auth state)   |
| Data Fetching       | TanStack Query V5   | Async state management, server state caching      |
| Form Management     | React Hook Form     | Performant form handling                          |
| Schema Validation   | Zod                 | TypeScript-first schema validation                |
| Backend API         | CNIT Academy Backend| Custom NestJS backend                             |
| Package Manager     | npm/yarn/pnpm       | Node package manager                              |

## Project Structure (Proposed)

```
cnit-academy-ui/
├── app/
│   ├── (auth)/             # Routes for login, register (Future)
│   ├── dashboard/
│   │   ├── (student)/      # Routes primarily for students
│   │   │   ├── courses/
│   │   │   │   ├── [id]/
│   │   │   │   │   └── page.tsx      # Story 1.2
│   │   │   │   └── page.tsx          # Story 1.1
│   │   │   ├── lectures/
│   │   │   │   ├── [id]/
│   │   │   │   │   └── page.tsx      # Story 1.3
│   │   │   │   └── page.tsx          # (Optional: standalone list if needed)
│   │   │   ├── my-courses/
│   │   │   │   └── page.tsx          # Story 1.6
│   │   │   └── my-lectures/
│   │   │       └── page.tsx          # Story 1.7
│   │   ├── (admin)/        # Routes primarily for admins
│   │   │   ├── courses/
│   │   │   │   ├── [id]/
│   │   │   │   │   └── edit/
│   │   │   │   │       └── page.tsx  # Story 2.3
│   │   │   │   ├── new/
│   │   │   │   │   └── page.tsx      # Story 2.2
│   │   │   │   └── page.tsx          # Story 2.1
│   │   │   └── lectures/
│   │   │       ├── [id]/
│   │   │       │   └── edit/
│   │   │       │       └── page.tsx  # Story 2.7
│   │   │       ├── new/
│   │   │       │   └── page.tsx      # Story 2.6
│   │   │       └── page.tsx          # Story 2.5
│   │   ├── layout.tsx              # Story 0.1 (Dashboard Layout)
│   │   └── page.tsx                # Dashboard landing/overview (Optional)
│   ├── layout.tsx                # Root Layout
│   └── page.tsx                  # Presentation/Landing Page (Existing)
├── components/
│   ├── ui/                     # Shadcn UI components
│   └── custom/                 # Custom reusable components (e.g., CourseCard, LectureItem, AdminDataTable)
├── hooks/                      # Custom React hooks
│   └── use-auth.ts             # Example hook for accessing auth state
├── lib/
│   ├── api.ts                  # API client setup (e.g., axios instance, base URL)
│   ├── query-client.ts         # TanStack Query client setup/provider
│   ├── utils.ts                # Utility functions
│   └── zod-schemas.ts          # Zod schemas for forms
├── providers/                  # Context/Zustand providers
│   └── query-provider.tsx
├── store/                      # Zustand store definitions
│   └── auth-store.ts
├── .env.local                  # Environment variables (e.g., NEXT_PUBLIC_API_URL)
├── next.config.js
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## POST MVP / PRD Features

-   Profile View/Edit UI
-   Programs (Apply, View, Manage) UI
-   Leaderboard Display
-   Blog Creation/Viewing UI Enhancement
-   Full Authentication Flow (Register, Verify Email, Forgot Password)
-   Enhanced Mobile Responsiveness
-   Notifications System
-   Search Functionality

## Change Log

| Change        | Story ID | Description         |
| ------------- | -------- | ------------------- |
| Initial draft | N/A      | Initial draft PRD   |


</rewritten_file> 