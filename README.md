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
4. **Start the Backend Server**
   ```bash
   cd Server
   npm start
5. **Start the Frontend**
   ```bash
   cd Client
   npm start
6.**Access the Website** Visit http://localhost:8000 in your browser to start exploring YamYam.

## Usage

### For Users:
- **Sign Up / Sign In**: Create an account to place orders, track your delivery status, and leave reviews.
- **Browse Restaurants**: Use the search filters to find restaurants by location, cuisine type, rating, delivery fee, and more.
- **Order Food**: Select your favorite meals, add them to your cart, and proceed to secure payment using Stripe.
- **Save Addresses & Order History**: Easily save delivery addresses for quick reordering of past meals.

### For Restaurant Owners:
- **Restaurant Dashboard**: Register as a restaurant owner to create and manage your restaurant's profile, including adding location, working hours, and branding details.
- **Menu Management**: Add, update, or delete menu items, and categorize them to help users search for their favorite meals.
- **Track Orders**: View and manage incoming orders in real-time, and update their statuses as they are processed.
- **Review Management**: Monitor customer reviews and ratings to improve service and engage with diners.
- **Analytics & Insights**: Track business metrics such as sales, top dishes, and order frequency to make data-driven decisions for growth.

## Credits

**YamYam** would not have been possible without the contributions of the amazing team I worked with. Huge thanks to:

- **Frontend Development**:  
  - Youssif Adel  
  - Elsayed Essam

- **Backend Development**:  
  - Mohamed Amr  
  - Mohamed Elsayed

- **UI/UX Design**:  
  - Mohamed Waleed

A special thank you to **Digital Egypt Pioneers Initiative (DEPI)** for providing this incredible learning opportunity. I’d also like to extend my deepest gratitude to **Ali Magdi**, our mentor and instructor, for his constant guidance, support, and invaluable insights throughout this project.  
