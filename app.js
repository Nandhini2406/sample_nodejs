const { CronJob } = require('cron');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
// Define a base route
app.get('/', (req, res) => {
    res.json('Hello, World! This is my first Node.js app. This changes is triggered by push event. I think Finally its working.');
});
const job = CronJob.from({
	cronTime: '* * * * *',
	onTick: function () {
		res.json('You will see this message every minute');
	},
	start: true,
	timeZone: 'America/Los_Angeles'
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port} is tested`);
});
