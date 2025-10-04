# GitHub Activity Visualizer

A full-stack web application that visualizes GitHub user activity data through interactive charts and graphs.

## Features

- Fetch and display GitHub user profile information
- Visualize repository statistics (stars, forks, languages)
- Show commit activity and contribution heatmaps
- Interactive dashboard with charts using Recharts
- Responsive design with Tailwind CSS
- Smooth animations with Framer Motion

## Tech Stack

### Backend
- Node.js
- Express.js
- GitHub REST API & GraphQL API
- Caching with node-cache
- CORS enabled

### Frontend
- React 18
- Tailwind CSS
- Recharts for data visualization
- Framer Motion for animations
- Axios for API calls
- React Router for navigation

## Project Structure

```
github-activity-visualizer/
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── services/githubAPI.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── utils/
│   └── tailwind.config.js
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- GitHub Personal Access Token

### Installation

1. Clone the repository
2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

### Configuration

1. Create a `.env` file in the `backend` directory (copy from `.env.example`)
2. Add your GitHub Personal Access Token:
   ```
   GITHUB_TOKEN=your_github_token_here
   ```

### Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```

The application will be available at `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## Deployment

### Backend (Render)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the build command: `npm install`
4. Set the start command: `npm start`
5. Add environment variables:
   - `GITHUB_TOKEN`: Your GitHub Personal Access Token
   - `PORT`: 10000 (or Render's default)

### Frontend (Vercel)

1. Create a new project on Vercel
2. Connect your GitHub repository
3. Set the root directory to `frontend`
4. Vercel will automatically detect the React app
5. Add environment variable if needed (proxy is handled by Vercel)

### Alternative Frontend (Netlify)

1. Create a new site on Netlify
2. Connect your GitHub repository
3. Set the build command: `npm run build`
4. Set the publish directory: `build`
5. Add redirect rules in `_redirects` file:
   ```
   /*    /index.html   200
   ```

## API Endpoints

- `GET /api/user/:username` - Get user profile data
- `GET /api/repos/:username` - Get user repositories
- `GET /api/activity/:username` - Get user activity data

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.
