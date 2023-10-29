// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const port = 3000; // You can choose any port you like

// Define a route and its handler
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.get('/data', (req, res) => {
  res.send('Hello, Oshayer ');
});

console.log("Datathon");


// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
