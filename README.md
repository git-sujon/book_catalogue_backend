# Book Catalog API

Welcome to the Book Catalog API documentation. This API provides endpoints for managing users, categories, books, and orders for a book catalog application.

## Live Link

You can access the live version of this API here: [Book Catalog API](https://book-catalog-beta.vercel.app/)

## Application Routes

### User

- **api/v1/auth/signup (POST)** 
- **api/v1/users (GET)** 
- **api/v1/users/30e9b446-b48a-4640-9ba7-6396deaf7e64 (Single GET)** 
- **api/v1/users/30e9b446-b48a-4640-9ba7-6396deaf7e64 (PATCH)** 
- **api/v1/users/30e9b446-b48a-4640-9ba7-6396deaf7e64 (DELETE)** 
- **api/v1/profile (GET)** 

### Category

- **api/v1/categories/create-category (POST)** 
- **api/v1/categories (GET)** 
- **api/v1/categories/5a2f4052-eed2-488a-88c0-47cf2419c7dd (Single GET)** 
- **api/v1/categories/5a2f4052-eed2-488a-88c0-47cf2419c7dd (PATCH)** 
- **api/v1/categories/5a2f4052-eed2-488a-88c0-47cf2419c7dd (DELETE)** 

### Books

- **api/v1/books/create-book (POST)** 
- **api/v1/books (GET)** 
- **api/v1/books/:df39eb28-7fff-4757-bedd-02ffec1d2520/category (GET)** 
- **api/v1/books/df39eb28-7fff-4757-bedd-02ffec1d2520 (GET)** 
- **api/v1/books/df39eb28-7fff-4757-bedd-02ffec1d2520 (PATCH)** 
- **api/v1/books/df39eb28-7fff-4757-bedd-02ffec1d2520 (DELETE)** 

### Orders

- **api/v1/orders/create-order (POST)** 
- **api/v1/orders (GET)** 
- **api/v1/orders/:657ef95f-3db8-4cf4-9bc6-a08a04fa08d5 (GET)**

