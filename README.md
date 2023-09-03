# Book Catalog API

Welcome to the Book Catalog API documentation. This API provides endpoints for managing users, categories, books, and orders for a book catalog application.

## Live Link

You can access the live version of this API here: [Book Catalog API](https://book-catalog-beta.vercel.app/)

## Application Routes

### User

- **api/v1/auth/signup (POST)** - Create a new user account.
- **api/v1/users (GET)** - Get a list of all users.
- **api/v1/users/:id (Single GET)** - Get a specific user by ID. Replace `:id` with a valid user ID.
- **api/v1/users/:id (PATCH)** - Update a specific user's information. Replace `:id` with a valid user ID.
- **api/v1/users/:id (DELETE)** - Delete a specific user. Replace `:id` with a valid user ID.
- **api/v1/profile (GET)** - Get the user's profile information.

### Category

- **api/v1/categories/create-category (POST)** - Create a new category.
- **api/v1/categories (GET)** - Get a list of all categories.
- **api/v1/categories/:id (Single GET)** - Get a specific category by ID. Replace `:id` with a valid category ID.
- **api/v1/categories/:id (PATCH)** - Update a specific category's information. Replace `:id` with a valid category ID.
- **api/v1/categories/:id (DELETE)** - Delete a specific category. Replace `:id` with a valid category ID.

### Books

- **api/v1/books/create-book (POST)** - Create a new book.
- **api/v1/books (GET)** - Get a list of all books.
- **api/v1/books/:categoryId/category (GET)** - Get a list of books within a specific category. Replace `:categoryId` with a valid category ID.
- **api/v1/books/:id (GET)** - Get a specific book by ID. Replace `:id` with a valid book ID.
- **api/v1/books/:id (PATCH)** - Update a specific book's information. Replace `:id` with a valid book ID.
- **api/v1/books/:id (DELETE)** - Delete a specific book. Replace `:id` with a valid book ID.

### Orders

- **api/v1/orders/create-order (POST)** - Create a new order.
- **api/v1/orders (GET)** - Get a list of all orders.
- **api/v1/orders/:orderId (GET)** - Get a specific order by order ID. Replace `:orderId` with a valid order ID.

Please refer to the respective routes for detailed information on how to use each endpoint.

## Getting Started

To get started with the Book Catalog API, make requests to the provided routes based on your requirements.

## Contributing

If you'd like to contribute to this project, please follow our [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
