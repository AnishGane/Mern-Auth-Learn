# MERN Auth App

A full-stack authentication application built with the MERN (MongoDB, Express, React, Node.js) stack. 

## Features
- User registration, login and signup functionality
- Password encryption with bcrypt
- Input validation using Joi
- Secure environment variables with dotenv
- Cross-Origin Resource Sharing (CORS) enabled
- Modularized backend and frontend

---

## Project Structure


### Backend (`/backend`)
Built with Node.js, Express, and MongoDB.

#### Key Packages:
- **dotenv**: Manage environment variables.
- **express**: Web server framework.
- **mongodb**: Database integration.
- **joi**: Data validation.
- **bcrypt**: Password hashing.
- **cors**: Handle CORS policy.
- **body-parser**: Parse incoming request bodies.
- **jsonwebtoken (JWT)**: Generate and verify tokens for user authentication.

# Dependency Installation Guide for MERN App

This guide walks you through installing the required dependencies for the backend and frontend of the MERN app.

---


## Backend Setup

### Required Dependencies:
- **express**: Web server framework.
- **dotenv**: Manage environment variables.
- **mongoose**: MongoDB ORM.
- **cors**: Handle Cross-Origin Resource Sharing.
- **body-parser**: Parse incoming request bodies.
- **joi**: Data validation library.
- **bcrypt**: Hash passwords securely.
- **jsonwebtoken (JWT)**: Generate and verify tokens for user authentication.

### Installation Steps:
1. Navigate to the backend folder:
   ```bash
   cd backend

2. Initialize a Node.js project (if not already done):
    ```bash
    npm init -y

3. Install dependencies:
   ```bash
   npm install express dotenv mongoose cors body-parser joi bcrypt jsonwebtoken

4. (Optional) Install development dependencies like nodemon for auto-restarting the server:
   ```bash
   npm install --save-dev nodemon

5. Set up .env file with the following variables:
   ```bash
   MONGO_URI=<your_mongodb_uri>
   PORT=<backend_server_port>
   JWT_SECRET=<your_jwt_secret>

6. Start the server:
   ```bash
   npm start

## Frontend Setup

### Required Dependencies:
- **react**: Web framework.

### Installation Steps:
1. Navigate to the frontend folder:
   ```bash
   cd frontend

2. Create a new Vite project:
    ```bash
    npm create vite@latest .

3. Install project dependencies:
   ```bash
   npm install

4. Start the development server:
   ```bash
   npm run dev

### Access the application at http://localhost:3000 (default React app port).

### License

This project is licensed under the MIT License.

This README.md provides a concise overview while keeping the structure informative for setting up and running the app.

### Credit
- Original owner @anishgane
