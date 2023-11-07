## project in process

# 🛒 Online Store Project (E-commerce)

Welcome to the backend project for the Online Store! In this project, we will combine our knowledge of Node.js, Express, and MySQL/Sequelize to develop a RESTful API for managing an online store. 🚀

## 📝 Description

🛴 The eCommerce project I've developed focuses on a scooter rental store, leveraging the power of MySQL and Sequelize as the database and ORM, respectively. The system comprises several key entities, enabling efficient store management and offering scalability for future expansions 🚀.

🏪 **Store Table**: This table stores information about scooter rental stores. Each store is associated with multiple scooters available for rent.

🛴 **Scooters Table**: In this table, details of the scooters available for rent are recorded. It is related in a one-to-many relationship with the Store table, meaning one store can have multiple scooters for rent.

👥 **Customers Table**: Customer data using the scooter rental service is registered here.

📈 **Intermediate CustomerScooter Table**: This table plays a crucial role as it establishes a many-to-many relationship between customers and scooters. Each entry in this table indicates which customer has rented which scooter at a given time 🕒.

🏪 The database architecture allows the scooter rental store to maintain a detailed record of its stores, available scooters, and customers. Furthermore, the many-to-many relationship between scooters and customers through the intermediate table provides flexibility to handle multiple rentals by a customer and the ability to track the scooters in use 📈.

📈🌟 The project's scalability is ensured, as new stores and services can be added in the future seamlessly, maintaining data integrity and efficient management. This provides a solid foundation for the continuous growth of the scooter rental store and adaptation to changing market needs.

Once the project's requirements have been analyzed, the student will need to develop a RESTful API capable of:

- 🔐 User registration using Bcrypt.
- 🚪 User login with tokens and middleware.
- ✍️ Creating a CRUD.
- ↔️ Establishing at least one "Many to Many" and one "One to Many" relationship.
- 🌱 Using seeders to populate the initial database.

### 📌 Essential Project Requirements

Make sure the README is excellent. 😉✨

## 💻 Technologies Used

For the development of this API, we will be using the following technologies:

- Node.js
- Express
- MySQL with Sequelize

The project will be hosted in a public GitHub repository, and we will appreciate the presence of multiple branches and commits with clear and readable commit messages to analyze the project's evolution. It is essential for the repository to include a comprehensive README.

### 📊 Endpoints

### 📦 Products

- **Products CRUD:** Endpoint for managing products.
- **Create Product:** Create a new product.
- **Update Product:** Update an existing product.
- **Delete Product:** Delete a product.
- **List Products with Categories:** Display products along with their categories.
- **Product by ID:** Retrieve a product by its ID.
- **Filter by Name:** Search for products by name.
- **Filter by Price:** Search for products by price.
- **Sort by Price:** Sort products from highest to lowest price.
- **Creation Validation:** Validate that all fields are completed when creating a product.
- **Authentication Required:** Only authenticated users can create, update, and delete products.

### 🗂️ Categories

- **Categories CRUD:** Endpoint for managing categories.
- **Create Category:** Create a new category.
- **Update Category:** Update an existing category.
- **Delete Category:** Delete a category.
- **View Categories with Products:** Display categories along with the products that belong to them.
- **Category by ID:** Retrieve a category by its ID.
- **Filter by Name:** Search for categories by name.

### 🛍️ Orders

- **View Orders with Products:** Display orders along with the products they contain.
- **Create Order:** Create a new order.

### 👤 Users

- **User Registration:** Register a user using Bcrypt.
- **Log In:** Log in a user using Bcrypt and JWT.
- **User Information:** Retrieve information of the logged-in user, including their orders and the products in each order.
- **Log Out:** Allow the user to log out.
- **Registration Validation:** Validate that all fields are completed when creating a user.

### 🌾 Seeders

- **Create 5 Products with Seeder:** Populate the database with 5 initial products.

### 🌟 Extras

- **Role Implementation:** Create an "Admin" role to allow only users with that role to create, update, and delete products.
- **Multer Middleware:** Investigate and apply the Multer middleware to attach images when creating or updating products.
- **Reviews CRUD:** Add endpoints for managing reviews.
- **Display Reviews:** Show reviews along with the user who made them.
- **Update Endpoints:** Update the endpoints to display products with their categories and reviews.

### 💻 📱 Preview

<p align="center">
  <img src="assets/diagram.png" width="700">
</p>

<p align="center">
<img src="https://imgs.search.brave.com/50JDDd4L1QxFtnwMrj6rn158HP4VG0qHPxVKtKvCPn4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9wb3N0bWFuLnN2/Zw.svg" width="30">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="30" alt="JavaScript">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" width="30" alt="Node.js">
  <img src="https://imgs.search.brave.com/ziXbll6Eu_vanLF_3jITiNkpTCtx7YcJeFlLoeAvjIA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9naXRs/YWIuc3ZnLnpvbmUv/b21uaWFpdC9kZXZl/bG9wZXItbG9nb3Mv/cmF3L21hc3Rlci9s/b2dvcy9mcm9udC1l/bmQtd2ViL25wbS5z/dmc.svg" width="30">
  <img src="https://imgs.search.brave.com/TAJpmj8JiLXeqQeY3vY0YqGp0mmJn4jz0oGqxhU12dc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL00vbXlzcWwt/bG9nby1CNDk0M0ZF/NkRELXNlZWtsb2dv/LmNvbS5wbmc" width="30">
  <img src="https://imgs.search.brave.com/YAQjymUefXu_L42AtByzTWMvbnqnKQnzMYyxE7tvXrI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGVwcy5jb20vbG9n/by1kb3dubG9hZC9T/L1NlcXVlbGl6ZS1s/b2dvLXZlY3Rvci0w/MS5zdmc.svg" width="30">
</p>
