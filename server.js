require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(`${__dirname}/public`));

// Start the server on port 4000
app.listen(4000, () => {
  console.log('Server running on port 4000');
});
