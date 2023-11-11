const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Change this to the desired port

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (CSS and JavaScript)
app.use(express.static('public'));

// Define a route to handle form submissions
app.post('/submit-details', (req, res) => {
  const { name, address, email, pincode, phone, date, time } = req.body;

  // You can process the form data, store it in a database, or perform other actions here.

  // For this example, we'll just log the data to the console.
  console.log('Received form data:');
  console.log('Name:', name);
  console.log('Address:', address);
  console.log('Email:', email);
  console.log('Pincode:', pincode);
  console.log('Phone:', phone);
  console.log('Date:', date);
  console.log('Time:', time);

  // Redirect to a thank you page or any other page
  res.redirect('/thank-you.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
