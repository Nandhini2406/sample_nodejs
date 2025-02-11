const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
// Define a base route
app.get('/', (req, res) => {
    res.send('Hello, World! This is my first Node.js app. This changes is triggered by push event. I think Finally its working.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port} is tested`);
});
