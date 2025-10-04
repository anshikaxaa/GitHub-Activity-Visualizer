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

1. Create a `.env` file in the `backend` directory
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
