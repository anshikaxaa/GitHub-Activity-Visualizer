const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/user', require('./routes/user'));
app.use('/api/repos', require('./routes/repos'));
app.use('/api/activity', require('./routes/activity'));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'GitHub Activity Visualizer Backend' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
