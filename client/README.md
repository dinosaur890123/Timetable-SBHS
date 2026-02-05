# SBHS Timetable App

A modern, responsive timetable application built with React, Vite, and Tailwind CSS, designed for the SBHS Student Portal API.

## Features

- **Daily Timetable**: Shows periods, subjects, rooms, and teachers.
- **Real-Time Status**: Highlights the current period and shows time remaining.
- **Daily Notices**: Displays school announcements and meetings.
- **Responsive Design**: Works on mobile and desktop.
- **Dark Mode**: Sleek dark UI by default.

## Getting Started

1.  Navigate to the client directory:
    ```bash
    cd client
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

## API Integration

Currently, the app uses **Mock Data** located in `src/services/mockData.js` to demonstrate functionality without needing OAuth credentials.

To connect to the real SBHS API:
1.  Obtain your Client ID and Secret from the school.
2.  Implement the OAuth2 flow in `src/services/api.js`.
3.  Replace the mock resolves with actual `fetch` calls to `https://student.sbhs.net.au/api/`.

## Architecture

- **React**: UI Component library.
- **Tailwind CSS**: Utility-first styling.
- **Vite**: Build tool and dev server.
- **Lucide React**: Icon set.
