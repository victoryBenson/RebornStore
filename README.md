# E-Commerce Website

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)

## Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Architecture](#architecture)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [Contact](#contact)

## About the Project

This is a full-featured e-commerce website that allows users to browse products, add them to a shopping cart, and purchase them through an integrated payment system. The application is built using modern web technologies to ensure a smooth and responsive user experience.

## Features

- **User Authentication:** Sign up, log in, and manage user accounts.
- **Product Catalog:** Browse and search products by category and name.
- **Shopping Cart:** Add, remove, and update product quantities.
- **Checkout Process:** Complete orders and process payments securely.
- **Order History:** View past orders and order details.
- **Admin Dashboard:** Manage products, orders, and users.

## Screenshots

![Home Page](path/to/homepage-screenshot.png)
![Product Page](path/to/product-page-screenshot.png)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   [git clone https://github.com/victoryBenson/RebornStore.git]
   cd client to start the client side &
   cd serevr to start the server
npm install

## setup environment variable
SKIP_PREFLIGHT_CHECK = true
ACCESS_TOKEN_SECRET = your-access-token
NODE_ENV = your_node_env
MONGO_URL =your-mongo-url
PORT = your-port

FRONTEND =your-frontend-url
 --cloudinary_keys
API_SECRET = your-api-secret-secret
API_KEY = your-api-key
CLOUD_NAME = your-cloud-name

## Usage
Create an account or log in to an existing account.
Browse products and add them to your cart.
Proceed to checkout to complete your purchase.
View your order history and track orders.


## Architecture
Frontend: Built with React and styled using Tailwind CSS for responsive and modular design.
Backend: Node.js and Express handle RESTful APIs and business logic.
Database: MongoDB stores user, product, and order data.
Authentication: JSON Web Tokens (JWT) are used for secure authentication.
Payment Integration: Paystack API processes payments securely.


## Technologies Used
React
Node.js
Express
MongoDB
PayStack
Tailwind CSS
JWT


## API Endpoints
Here are some key API endpoints:

--User Authentication:

POST /api/v1/auth/register - Register a new user
POST /api/v1/auth/login - Log in an existing user

Products:
GET /api/v1/products/getProducts - Retrieve a list of products
GET /api/v1/products/getProduct:id - Retrieve a single product by ID

user route:
Get api/v1/users/getUsers - fetch all users
Get api/v1/users/getUser - get single
Get api/v1/users/getUserCount - get total number of users
Get api/v1/users/deletUser - delete user
Get api/v1/users/updateUser - update user

## Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:
- Fork the repository.
- Create a new branch: git checkout -b feature/YourFeature
- Commit your changes: git commit -m 'Add some feature'
- Push to the branch: git push origin feature/YourFeature
- Open a pull request.
Please make sure your code follows the project's coding style and standards.


## Contact
Your Name - Kennyech
Your Email - kennytech360@gmail.com
Project Link: https://github.com/victoryBenson/RebornStore/tree/main
