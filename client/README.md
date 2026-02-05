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

## Deployment Guide (Vercel)

Your production URL is: `https://timetable-sbhs-gcdd.vercel.app/`

### 1. Configure SBHS Developer Portal
1.  Log in to the execution SBHS Developer Portal.
2.  Select your App.
3.  In the **Redirect URIs** field, add exactly:
    ```
    https://timetable-sbhs-gcdd.vercel.app/
    ```
    *(Note: If you also develop locally, keep `http://localhost:5173/` in the list as well)*

### 2. Configure Vercel Environment Variables
Go to your **Vercel Project Settings > Environment Variables** and ensure these allow-listed values are set:

| Variable | Value |
|----------|-------|
| `VITE_SBHS_CLIENT_ID` | *Your App ID* |
| `VITE_SBHS_CLIENT_SECRET` | *Your App Secret* |
| `VITE_SBHS_REDIRECT_URI` | `https://timetable-sbhs-gcdd.vercel.app/` |

**Important:** After updating variables in Vercel, you must go to **Deployments** and click **Redeploy** on the latest commit for changes to take effect.

## Architecture

- **React**: UI Component library.
- **Tailwind CSS**: Utility-first styling.
- **Vite**: Build tool and dev server.
- **Lucide React**: Icon set.
