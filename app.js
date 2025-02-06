const express = require('express');
const app = express();
const port = 3000;

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World! This is my first Node.js app.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port} is tested`);
});
