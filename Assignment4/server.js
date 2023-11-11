const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Middleware to parse JSON in POST requests
app.use(bodyParser.json());

// Serve your HTML and CSS files
app.use(express.static(__dirname));

// Handle POST requests for feedback submission
app.post('/submit-feedback', (req, res) => {
  const newFeedback = req.body;
  const feedbackData = JSON.parse(fs.readFileSync('feedback-data.json'));
  feedbackData.push(newFeedback);
  fs.writeFileSync('feedback-data.json', JSON.stringify(feedbackData, null, 2));
  res.send('Feedback submitted successfully');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
