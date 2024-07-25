# PAYTM

**PAYTM** is a web application that enables users to send money from one account to another. It features a modern frontend built with React and Vite, along with a robust backend powered by Node.js and Express. 

## Technologies Used

### Frontend
- **React** with **Vite**: For building the user interface.
- **React Router DOM**: For routing within the application.
- **Recoil**: For state management.
- **Axios**: For making HTTP requests.

### Backend
- **JavaScript** with **Node.js**: For server-side logic.
- **Express.js**: For building the RESTful API.
- **MongoDB**: For database management.
- **Mongoose**: For MongoDB object modeling.
- **JWT**: For user authentication.
- **Zod**: For input validation.

## Getting Started

### Prerequisites
- Node.js installed on your machine.
- MongoDB instance running (local or cloud).

### Backend Setup

1. Navigate to the backend directory of your project.
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npx nodemon index.js
   ```
   The backend will be up and running on your specified port.

### Frontend Setup

1. Navigate to the frontend directory of your project.
2. Install the necessary dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend will be accessible in your browser at the provided local URL.

## Features
- User registration and authentication.
- Secure money transfers between users.
- Input validation and error handling.

## API Endpoints

- `POST /api/v1/user/signup` - Register a new user.
- `POST /api/v1/user/signin` - Authenticate a user and receive a JWT.
- `GET /api/v1/user/bulk` - To get all user Data from backend.
- `PUT /api/v1/user/` - To Update user imfo in backend.
- `POST /api/v1/account/tranfer` - Transfer money between users (requires authentication).
- `GET /api/v1/account/balance` - To check logedin user balance.

## Contributing

Feel free to fork the repository and submit pull requests. If you encounter any issues, please open an issue on the GitHub repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to adjust any sections or add additional details as needed!