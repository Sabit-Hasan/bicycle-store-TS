# Bicycle Store API

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Bicycles](#bicycles)
  - [Orders](#orders)
  - [Revenue](#revenue)
- [Contributing](#contributing)

## Overview
This is a RESTful API for a bicycle store, built using Node.js, Express, and MongoDB. The API provides endpoints for managing bicycles, orders, and revenue.

## Features
- Manage bicycles (CRUD operations)
- Manage orders (CRUD operations)
- Calculate revenue
- Error handling and logging

## Requirements
- **Node.js** (version 14 or higher)
- **MongoDB** (version 4 or higher)
- **Express** (version 4 or higher)

## Installation
1. Clone the repository:

    ```bash
    git clone https://github.com/Sabit-Hasan/bicycle-store-TS.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    npm start:dev
    ```

## Usage
- Use a tool like [Postman](https://www.postman.com/) or [cURL](https://curl.se/) to send HTTP requests to the API endpoints.
- Refer to the **API Endpoints** section below for more information.

## API Endpoints

### Bicycles

- **GET /bicycles**: Retrieve a list of all bicycles.
    ```bash
    GET http://localhost:3000/api/products
    ```

- **GET /bicycles/:id**: Retrieve a single bicycle by ID.
    ```bash
    GET http://localhost:3000/api/products/<bicycle-id>
    ```

- **POST /bicycles**: Create a new bicycle.
    ```bash
    POST http://localhost:3000/api/products/create-bicycle
    ```

- **PUT /bicycles/:id**: Update a single bicycle by ID.
    ```bash
    PUT http://localhost:3000/api/products/<bicycle-id> 
    ```

- **DELETE /bicycles/:id**: Delete a single bicycle by ID.
    ```bash
    DELETE http://localhost:3000/api/products/<bicycle-id> 
    ```

### Orders

- **POST /orders**: Create a new order.
    ```bash
    POST http://localhost:3000/api/orders/create-order
    '{"email": "customer@example.com", "product": "648a45e5f0123c45678d9012", "quantity": 2, "totalPrice": 600}'
    ```

### Revenue

- **GET /revenue**: Calculate the total revenue.
    ```bash
    GET http://localhost:3000/api/orders/revenue
    ```

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request. Ensure that you follow the code style and include relevant tests.
# bicycle-store-TS
