# Full Stack Next.js + Node.js Application

This is a full-stack web application using Next.js for the frontend and Node.js with Express for the backend.

## Project Structure

```
├── frontend/          # Next.js frontend application
│   ├── src/          # Source files
│   ├── public/       # Static files
│   └── ...
├── backend/          # Node.js backend application
│   ├── src/         # Source files
│   └── ...
```

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file with the following content:
   ```
   PORT=5000
   NODE_ENV=development
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

### Backend

- `npm run dev`: Start the development server with hot-reload
- `npm run build`: Build the application
- `npm start`: Start the production server

### Frontend

- `npm run dev`: Start the development server
- `npm run build`: Build the application
- `npm start`: Start the production server
- `npm run lint`: Run ESLint
