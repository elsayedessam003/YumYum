# YamYam 🍽️

**YamYam** is a restaurant browsing and management platform that connects diners with a variety of restaurants and empowers restaurant owners to manage their online presence and orders efficiently. Built as a final project for the **React Web Development Track** in the **Digital Egypt Pioneers Initiative (DEPI)**, YamYam offers a comprehensive range of features for users and restaurant owners alike.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
  - [For Users](#for-users)
  - [For Restaurant Owners](#for-restaurant-owners)
- [Technologies Used](#technologies-used)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [Credits](#credits)

## Project Overview

YamYam is a user-friendly platform designed to enhance the restaurant browsing experience and streamline online ordering. Users can browse various restaurants, filter them based on personal preferences, place orders, and leave reviews. For restaurant owners, YamYam provides a powerful dashboard to manage their menus, orders, and customer feedback, making it an all-in-one solution for food service management.

## Features

### For Users
- **Restaurant Browsing**: Explore restaurants with advanced filters by location, cuisine, rating, delivery fee, and more.
- **Order Placement**: Sign up to place and track orders, complete with online payment support via Stripe.
- **Review and Rating**: Leave reviews and ratings for restaurants after orders are completed.
- **Address & Order History Management**: Save addresses and reorder past favorites with just a few clicks for convenience.

### For Restaurant Owners
- **Restaurant Setup**: Create and customize a restaurant profile with detailed location, hours, delivery options, and branding.
- **Menu Management**: Add unlimited meals and categorize them for easy browsing by users.
- **Order Management**: Track and manage incoming orders in real-time to ensure efficient service.
- **Customer Engagement**: Monitor and respond to user reviews and ratings for better customer satisfaction.
- **Business Insights**: Access metrics on sales, top-rated dishes, and order frequency to optimize business performance.
- **Business Settings**: Set custom delivery fees, hours, and operational options for more control.

## Technologies Used

### Frontend
- **HTML, CSS, JavaScript**
- **React**: Main JavaScript library for building the user interface
- **Tailwind CSS**: For a modern, responsive design

### Backend
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web framework for handling routes and API requests
- **MongoDB**: NoSQL database for data management

### Additional Tools
- **Stripe**: Secure payment integration for online orders
- **Figma**: UI/UX design and prototyping
- **Postman**: API testing and development
- **MongoDB Compass**: Database management and visualization

## Setup & Installation

To run YamYam locally, follow these steps:

### Prerequisites
- [Node.js](https://nodejs.org/en/download/) (v14 or above)
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running
- [Stripe API keys](https://stripe.com/docs/keys) (for payment integration)

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/yamyam.git](https://github.com/elsayedessam003/YumYum
2. **Install Dependencies**
   ```bash
    # Install backend dependencies
    cd Server
    npm install

    # Install frontend dependencies
    cd Client
    npm install
3. **Set Up Environment Variables**
   add your environment variables to the `.env` file.
   ```bash
    MONGODB_URI=<Your MongoDB URI>
    STRIPE_SECRET_KEY=<Your Stripe Secret Key>
    PORT=5000 (or any preferred port for backend)
5. **Start the Backend Server**
   ```bash
   cd Server
   npm start
7. **Start the Frontend**
   ```bash
   cd Client
   npm start
