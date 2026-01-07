const app = require('../src/app');
const connectDB = require('../src/config/db');

// Explicitly connect to DB for Serverless environment
connectDB();

module.exports = app;
