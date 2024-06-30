const express = require('express');
const cors = require('cors');
const path= require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Adjusted path
const cookieParser = require('cookie-parser');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/users', require('./routes/userRoutes')); // Adjusted path

app.get("/", (req, res) => {
  app.use(express.static(path.join(__dirname, '../client/build')));
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
