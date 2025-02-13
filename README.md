# sample_nodejs
Created for jenkins pipeline for this project. 

* This Project is totally for triggering the push event using github webhook.
* It will pull the changes from main in push event.
* If there is changes in package.json then the pipeline will run 'npm install'.
* After the pulling the changes and dependencies changes, it will restart pm2 app.
* Now this pipeline also send a notification of the job status to telegram chat bot.

* For testing purpose there are a lot of commits!

## .......


