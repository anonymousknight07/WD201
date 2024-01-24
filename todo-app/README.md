# Todo App

Welcome to the Todo App! This is a user-friendly web application built with Node.js and Express, designed to help you efficiently manage your tasks.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. **Clone the Repository:**
   ```bash 
   git clone https://github.com/your-username/todo-app.git
```

2. **Change into the Project Directory:**
```bash
  cd todo-app
```
    
3. **Install Dependencies:**
    
```bash
  npm install
```
    
4. **Start the Application on Port 3000:**
    ```bash
   npm start
```
    
5. **Additional Scripts:**

```bash
  npm test    # Run tests (uses the test database) 
  npm run dev # Run a dev server (uses the development database)`
    
```
    

### Features

- User authentication with Passport.js
- Secure password storage using bcrypt
- Sequelize ORM for PostgreSQL database interactions
- Jest for running tests

### Dependencies

- bcrypt: Password hashing library
- cheerio: HTML parsing and manipulation
- connect-ensure-login: Ensures a user is logged in
- connect-flash: Flash messages for Express
- cookie-parser: Parse cookies in Express
- csurf: CSRF token middleware
- ejs: Embedded JavaScript templates
- express: Web application framework for Node.js
- express-session: Session middleware for Express
- passport: Authentication middleware for Node.js
- passport-local: Local authentication strategy for Passport
- pg: PostgreSQL client for Node.js
- sequelize: Promise-based ORM for Node.js
- tiny-csrf: Lightweight CSRF token middleware

### Database Setup

To set up the database for the Todo App, follow these steps:

1. **Install PostgreSQL:**
    
    - Download and install PostgreSQL from the official website.
2. **Configure Database Connection:**
    
    - Open the `config/config.json` file in your Todo App project.
    - Update the development configuration with your PostgreSQL credentials:
        
    ``` json
        
`{   "development": {     "username": "your_postgresql_username",     "password": "your_postgresql_password",     "database": "your_database_name",     "host": "127.0.0.1",     "dialect": "postgres"   } }`

Update the production and testing database details similarly.
```   
3. **Run Migrations:**
    
    - Open a terminal in your project directory.
    - Run the following command to apply the database migrations:
        ```bash
        
        npx sequelize-cli db:migrate
        
```
        
4. **Start the Application:**
    
    - After configuring the database, start your Todo App with:
        
```bash
   npm start
```
        

Remember to replace placeholders like `your_postgresql_username`, `your_postgresql_password`, and `your_database_name` with your actual PostgreSQL credentials. If you encounter any issues, ensure PostgreSQL is running, and your credentials are correctly configured.