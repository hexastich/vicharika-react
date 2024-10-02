import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.REACT_APP_DB_HOST,
  user: process.env.REACT_APP_DB_USER,
  password: process.env.REACT_APP_DB_PASSWORD,
  database: process.env.REACT_APP_DB_NAME
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    throw err; 
  }

  console.log('Connected to MySQL database');
  //Create tables if they don't exist
  createTables();
});

// SQL queries to create tables
const userTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      user_id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE,
      phone VARCHAR(20),
      country VARCHAR(100),
      state VARCHAR(100),
      city VARCHAR(100),
      zip_code VARCHAR(20),
      account_type ENUM('registered', 'guest') DEFAULT 'guest',
      joined_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`;

const complaintsTableQuery = `
    CREATE TABLE IF NOT EXISTS complaints (
      complaint_id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      category VARCHAR(255) NOT NULL,
      department VARCHAR(255) NOT NULL,
      country VARCHAR(255) NOT NULL,
      state VARCHAR(255) NOT NULL,
      city VARCHAR(255) NOT NULL,
      zip_code VARCHAR(20) NOT NULL,
      status ENUM('submitted', 'in_review', 'resolved', 'closed') NOT NULL,
      submission_date DATE NOT NULL,
      last_updated DATE NOT NULL,
      anonymous BOOLEAN NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
    );
`;

const attachmentsTableQuery = `
    CREATE TABLE IF NOT EXISTS attachments (
      attachment_id INT AUTO_INCREMENT PRIMARY KEY,
      complaint_id INT NOT NULL,
      type ENUM('image', 'video', 'audio', 'document') NOT NULL,
      file_name VARCHAR(255) NOT NULL,
      file_url VARCHAR(255) NOT NULL,
      FOREIGN KEY (complaint_id) REFERENCES complaints(complaint_id) ON DELETE CASCADE
    );
`;

// Function to create tables if they don't exist
const createTables = () => {
  // Check if 'users' table exists and create it if not
  connection.query("SHOW TABLES LIKE 'users'", (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      connection.query(userTableQuery, (err, result) => {
        if (err) throw err;
        console.log("'Users' table created");
      });
    } else {
      console.log("'Users' table already exists");
    }
  });

  // Check if 'complaints' table exists and create it if not
  connection.query("SHOW TABLES LIKE 'complaints'", (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      connection.query(complaintsTableQuery, (err, result) => {
        if (err) throw err;
        console.log("'Complaints' table created");
      });
    } else {
      console.log("'Complaints' table already exists");
    }
  });

  // Check if 'attachments' table exists and create it if not
  connection.query("SHOW TABLES LIKE 'attachments'", (err, result) => {
    if (err) throw err;
    if (result.length === 0) {
      connection.query(attachmentsTableQuery, (err, result) => {
        if (err) throw err;
        console.log("'Attachments' table created");
      });
    } else {
      console.log("'Attachments' table already exists");
    }
  });
};


export default connection;
