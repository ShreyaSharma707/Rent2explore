# Rent a Car Project

## About

This project is a full-stack rent-a-car application built with React for the frontend and Express, Node.js, and MongoDB for the backend.</br>
The application allows users to:
- Register and log in
- Browse available cars
- View car details
- Make reservations
- View their reservations
- Rate booked car
- Search through their reservations

Administrators can:
- Edit and delete cars
- Add new cars
- View car details
- Approve users' reservations
- View all clients and reservations
- Search through clients and reservations

## Features

- **User Authentication**: Register, login, logout, and profile management.
- **Car Management**: View all cars, add new cars, update car details, delete cars, and upload car images.
- **Reservation Management**: Make reservations, view client-specific reservations, and view all reservations.
- **Responsive Design**: Optimized for various screen sizes using TailwindCSS.


### Backend

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **JWT**
- **Bcrypt**
- **Multer**
- **Other Libraries**: `cookie-parser`, `cors`, `dotenv`, `fs`, `nodemon`.

### Frontend

- **React**
- **Axios**
- **React Router**
- **React Hook Form**
- **Yup**
- **Date-fns**
- **React Icons**
- **TailwindCSS**
- **React Hot Toast**

## API Endpoints

The backend exposes **19 API endpoints** across the user, car, and reservation routes.

### User Routes

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login a user
- `POST /api/users/logout` - Logout a user
- `GET /api/users/profile` - Get user profile
- `GET /api/users` - Get all users (admin)
- `POST /api/users/forgot-password` - Request a password reset
- `POST /api/users/reset-password/:id/:token` - Reset a user's password

### Car Routes

- `GET /api/cars` - Get all cars
- `GET /api/cars/:id` - Get a specific car
- `POST /api/cars/add` - Add a new car
- `POST /api/cars/upload` - Upload car image
- `PUT /api/cars/update/:id` - Update car details
- `DELETE /api/cars/delete/:id` - Delete a car
- `POST /api/cars/:id/rating` - Rate a car

### Reservation Routes

- `GET /api/reservations` - Get all reservations
- `GET /api/reservations/client-reservations` - Get client-specific reservations
- `POST /api/reservations/add/:id` - Add a new reservation
- `PUT /api/reservations/:id/rate` - Mark a reservation as rated
- `POST /api/reservations/:id/approve` - Approve or decline a reservation
