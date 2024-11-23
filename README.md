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
- [License](#license)

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
    git clone https://github.com/your-username/bicycle-store-api.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    npm start
    ```

## Usage
- Use a tool like [Postman](https://www.postman.com/) or [cURL](https://curl.se/) to send HTTP requests to the API endpoints.
- Refer to the **API Endpoints** section below for more information.

## API Endpoints

### Bicycles

- **GET /bicycles**: Retrieve a list of all bicycles.
    ```bash
    curl -X GET http://localhost:3000/bicycles
    ```

- **GET /bicycles/:id**: Retrieve a single bicycle by ID.
    ```bash
    curl -X GET http://localhost:3000/bicycles/<bicycle-id>
    ```

- **POST /bicycles**: Create a new bicycle.
    ```bash
    curl -X POST http://localhost:3000/bicycles -d '{"name": "Mountain Bike", "brand": "BrandName", "price": 500, "type": "Mountain", "description": "Description of the bike", "quantity": 10, "inStock": true}'
    ```

- **PUT /bicycles/:id**: Update a single bicycle by ID.
    ```bash
    curl -X PUT http://localhost:3000/bicycles/<bicycle-id> -d '{"name": "Updated Bike", "price": 550}'
    ```

- **DELETE /bicycles/:id**: Delete a single bicycle by ID.
    ```bash
    curl -X DELETE http://localhost:3000/bicycles/<bicycle-id>
    ```

### Orders

- **GET /orders**: Retrieve a list of all orders.
    ```bash
    curl -X GET http://localhost:3000/orders
    ```

- **GET /orders/:id**: Retrieve a single order by ID.
    ```bash
    curl -X GET http://localhost:3000/orders/<order-id>
    ```

- **POST /orders**: Create a new order.
    ```bash
    curl -X POST http://localhost:3000/orders -d '{"email": "customer@example.com", "product": "648a45e5f0123c45678d9012", "quantity": 2, "totalPrice": 600}'
    ```

- **PUT /orders/:id**: Update a single order by ID.
    ```bash
    curl -X PUT http://localhost:3000/orders/<order-id> -d '{"quantity": 3}'
    ```

- **DELETE /orders/:id**: Delete a single order by ID.
    ```bash
    curl -X DELETE http://localhost:3000/orders/<order-id>
    ```

### Revenue

- **GET /revenue**: Calculate the total revenue.
    ```bash
    curl -X GET http://localhost:3000/revenue
    ```

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request. Ensure that you follow the code style and include relevant tests.
# bicycle-store-TS
