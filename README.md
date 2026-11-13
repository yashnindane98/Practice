# BackendPractice

## Stack
Node.js, Express, MongoDB (Mongoose)

## Dependencies
bcryptjs, jsonwebtoken, dotenv

## Setup Instructions
1. Clone this repository.
2. Open your terminal in the project folder and run `npm install` to install dependencies
3. Create a `.env` file in the root directory and add your MongoDB connection string and JWT secret:
   MONGO_URI=mongodb://127.0.0.1:27017/your_db_uri
   JWT_SECRET=your_super_secret_key
4. Run `node seed.js` to populate the database with 50,000 dummy users.
5. Run `node server.js` to start the server on port 3000.

## API Endpoints
* **POST** `/api/auth/register` - Expects `{ "email": "...", "password": "..." }`
* **POST** `/api/auth/login` - Expects `{ "email": "...", "password": "..." }`
* **GET** `/api/users?page=1&limit=10` - Returns a paginated list of users
