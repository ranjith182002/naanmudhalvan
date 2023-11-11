const express = require('express');
const app = express();
const port = 3000; // Change to your desired port

// Serve static files from your website's directory
app.use(express.static('public'));

// Define routes and route handlers
app.get('/', (req, res) => {
  res.send('Hello, this is your server.');
});

// You can create more routes to handle form submissions or other interactions.

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
