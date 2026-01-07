# Simple Todo App

A full-stack Todo application consisting of a React frontend and an Express/MongoDB backend.

## Features

- Create, Read, Update, and Delete (CRUD) Todos.
- Toggle completion status.
- Persist data using MongoDB.
- Modern UI with React and CSS variables.

## Prerequisites

- Node.js (v14+ recommended)
- MongoDB (running locally on port 27017)

## Getting Started

### 1. Database Setup

Ensure your local MongoDB instance is running.

```bash
# Example command to check status or start (depends on OS)
sudo systemctl start mongod
```

### 2. Backend Setup

Navigate to the `server` directory and install dependencies:

```bash
cd server
npm install
```

Start the backend server:

```bash
# Runs on http://localhost:5000
npm start
# OR for development with nodemon
npm run dev
```

### 3. Frontend Setup

Navigate to the `client` directory and install dependencies:

```bash
cd client
npm install
```

Start the frontend development server:

```bash
# Runs on http://localhost:5173 (or 5174 if 5173 is busy)
npm run dev
```

## Configuration

- **Backend Port**: 5000 (default)
- **MongoDB URI**: `mongodb://localhost:27017/todo-app`
- **Frontend API URL**: Configured in `client/src/App.jsx` pointing to `http://localhost:5000/todos`.

## Usages

Open your browser and navigate to the frontend URL (usually `http://localhost:5173`). You can now add tasks, mark them as complete, and delete them.
