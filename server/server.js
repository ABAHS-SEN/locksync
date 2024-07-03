const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const userRoutes = require('./routes/userRoutes');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Security Middleware
app.use(helmet());
app.use(mongoSanitize());

// Middleware
app.use(cors({
  origin: ['https://locksync-frontend.vercel.app/'], // Update this with your frontend's URL
  methods :["POST", "GET"],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/users', userRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
