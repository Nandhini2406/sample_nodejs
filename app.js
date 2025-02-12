const { CronJob } = require('cron');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
// Define a base route
app.get('/', (req, res) => {
    res.json('Hello, World! This is my first Node.js app. This changes is triggered by push event. I think Finally its working.');
    res.json('will this response be sent?');
});
// a cron job tosent a msg  in response for every minute


const job = CronJob.from({
	cronTime: '* * * * *',
	onTick: function () {
        console.log('You will see this message every minute');
	},
	start: true,
	timeZone: 'America/Los_Angeles'
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
