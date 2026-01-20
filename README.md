# User Management REST API

A simple RESTful API using **Node.js**, **Express.js**, and **MongoDB** for user CRUD operations.

## 🛠️ Tech Stack

- Node.js, Express.js
- MongoDB, Mongoose
- ES Modules (.mjs)
- Thunder Client

## 📂 Project Structure

```
project-root/
├── DB/db.mjs          # MongoDB connection
├── Schemas/user.mjs   # User Schema
├── index.js           # Main server file
├── package.json
└── README.md
```

## ⚙️ Setup

1. Clone repo & install dependencies:
    ```sh
    git clone https://github.com/badri-2005/MONGODB_CRUD.git
    cd mongodb-crud
    npm install
    ```
2. Configure MongoDB in `DB/db.mjs`:
    ```js
    mongoose.connect("mongodb://127.0.0.1:27017/usersDB");
    ```
3. Start server:
    ```sh
    npm run dev
    # or
    node index.js
    ```

## 🌐 API Endpoints

| Method | Endpoint              | Description         |
|--------|----------------------|---------------------|
| GET    | `/`                  | Health check        |
| GET    | `/api/users`         | Get all users       |
| GET    | `/api/users/:id`     | Get user by ID      |
| POST   | `/api/users`         | Create user         |
| PUT    | `/api/users/:id`     | Update user         |
| DELETE | `/api/users/:id`     | Delete user         |



## 🧪 Testing

Test endpoints using Postman, Thunder Client, or `curl`.

