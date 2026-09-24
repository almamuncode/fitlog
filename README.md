# FitLog

FitLog is a responsive workout library and daily workout planner built with Next.js. Users can browse workouts, view detailed exercise information, build a daily workout plan, save workouts for later, track completed exercises, and organize workouts using sorting options.

## Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React
- Sonner
- LocalStorage
- REST API

## Features

- Browse a library of 12 workouts covering multiple muscle groups
- View detailed workout information, instructions, equipment, sets, reps, duration, calories, and ratings
- Add up to 5 workouts to today's workout plan
- Save workouts for later
- Mark planned workouts as completed
- Remove workouts from the daily plan or saved list
- View live exercise, duration, and calorie totals
- Sort workouts by duration, calories, or rating
- Persist plan, saved, and completed workout data using LocalStorage
- Responsive design for mobile, tablet, and desktop
- Toast notifications for workout actions
- Custom loading and 404 states

## API

Workout data is loaded from the FitLog API:

`https://api.abcz.workers.dev/api/fitlog`

Individual workouts:

`https://api.abcz.workers.dev/api/fitlog/:id`

## Getting Started

Install dependencies:

```bash
npm install