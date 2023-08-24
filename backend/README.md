#Setting up the Local Environment for the Node.js Express App and 

steps required to set up a local development environment for running a Node.js Express app that interacts with a PostgreSQL database and fetches data 

#Prerequisites
1.Node.js and npm (Node Package Manager) installed on your local machine
2.PostgreSQL database installed and running locally
3.

Steps:
1. Clone the Repository
git clone https://github.com/vamsi2106/Quadb-assignment-nxtwave.git

2. Install Dependencies
   cd backend
   npm install
3. Set Up PostgreSQL Database
  Ensure that your local PostgreSQL server is up and running.
  Open the database.js file in the repository.
  Locate the following lines and update the PostgreSQL configuration according to your local setup.
 const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "demodb",
  password: "root",
  port: 5432,
 });
4.Start the Express Server
  node database.js
5.Access Data through API
  http://localhost:4000/get-data
6.Set Up Frontend (React App)
  cd frontend
7.Install Dependencies
  npm install
8.Start the React App
  npm start


