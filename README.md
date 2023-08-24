# Setting up Local Environment for Node.js Express App and React App

This guide outlines the steps required to set up a local development environment for running a Node.js Express app that interacts with a PostgreSQL database and fetches data, along with setting up a React app to work alongside it.

## Prerequisites

- Node.js and npm (Node Package Manager) installed on your local machine
- PostgreSQL database installed and running locally


## Steps

### 1. Clone the Repository

Clone the repository containing the Node.js Express app and React app.

```bash
git clone https://github.com/vamsi2106/Quadb-assignment-nxtwave.git
```

### 2. Set Up Backend (Node.js Express App)

Navigate to the backend directory.

```bash
cd Quadb-assignment-nxtwave/backend
```

Install backend dependencies.

```bash
npm install
```

### 3. Set Up PostgreSQL Database

Ensure your local PostgreSQL server is running.
create a "demodb" database in local PostgresSQL and 
Open the `database.js` file in the `backend` directory and update the PostgreSQL configuration:

```javascript
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "demodb",
  password: "root",
  port: 5432,
});
```

### 4. Start the Express Server

Run the following command in the `backend` directory:

```bash
node database.js
```

The Express server will start and listen on port 4000.

### 5. Access Data through API

You can access the fetched data through the `/get-data` API endpoint. Open your web browser or a tool like [Postman](https://www.postman.com/) and navigate to:

```
http://localhost:4000/get-data
```

### 6. Set Up Frontend (React App)

Navigate to the frontend directory.

```bash
cd ../frontend
```

Install frontend dependencies.

```bash
npm install
```

### 7. Start the React App

Run the following command in the `frontend` directory:

```bash
npm start
```

Your default web browser will open, and you'll see the React app running at `http://localhost:3000`.


