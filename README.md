# Simple note maker app using the MERN stack.

To be able to run this app you need NODEJS and MONGODB installed on your system.

Clone the repo from https://github.com/amit-07/mern-notes-app.git

## Setting up the MongoDB database

After Installing MongoDB successfully on your system follow the below mentioned steps to hook up your db for creating and editing notes.

1. In your suitable directory open terminal(MacOS)/cmd(Windows) and enter `mkdir -p /data/db`
2. In the directory where MongoDB is installed open terminal/cmd and run `mongod` to start running MongoDB
3. The next step is to create the MongoDB database instance. Therefore we’re connecting to the database server by using the MondoDB client on the command line:  `mongo`
4. By using the following command we’re creating a new database with the name notes: `use notes`

## Setting up backend Node Server

- Install Nodemon globally by running cmd `npm i -g nodemon`
- Move into the backend folder and run `npm install`
- Once installation is completed
- Then run `nodemon server`

## Running the NoteMaker React App

- Move into the note-maker folder and run cmd `npm install`
- Once installation is completed
- For dev environment run `npm start`
- Then run `npm run-script build` it will create a production build for the application
- Then to deploy it in static local server you need to install serve `npm i -g serve`
- Then run `serve -s build`
- Then open http://localhost:5000 to run the production build of the application
- Login to the application using the username and password provided above only
- Then you can add note by clicking on Add Note or Create Note and view it in the Notes section
- Also you can edit the notes using the edit form.

