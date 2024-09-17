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
});

const checkAndCreateTable = (tableName, tableSchema) => {
  const checkQuery = `SHOW TABLES LIKE '${tableName}'`;
  connection.query(checkQuery, (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length === 0) {
      const createQuery = `CREATE TABLE ${tableName} (${tableSchema})`;
      connection.query(createQuery, (err, result) => {
        if (err) {
          throw err;
        }
        console.log(`Table '${tableName}' created`);
      });
    } else {
      console.log(`Table '${tableName}' already exists`);
    }
  });
};

const tables = [
  { name: 'users', schema: 'id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, email VARCHAR(255) UNIQUE, phone VARCHAR(20), country VARCHAR(100), state VARCHAR(100), city VARCHAR(100), zip_code VARCHAR(20), account_type ENUM(\'registered\', \'guest\') DEFAULT \'guest\', anonymous BOOLEAN DEFAULT FALSE, joined_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP' },
  { name: 'complaints', schema: 'id INT AUTO_INCREMENT PRIMARY KEY, user_id INT, title VARCHAR(255) NOT NULL, description TEXT NOT NULL, category VARCHAR(255) NOT NULL, department VARCHAR(255), country VARCHAR(100), state VARCHAR(100), city VARCHAR(100), zip_code VARCHAR(20), status ENUM(\'submitted\', \'in_review\', \'resolved\', \'closed\') DEFAULT \'submitted\', submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP, anonymous BOOLEAN DEFAULT FALSE, FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE' },
  { name: 'attachments', schema: 'id INT AUTO_INCREMENT PRIMARY KEY, complaint_id INT, type ENUM(\'image\', \'video\', \'audio\', \'document\'), file_name VARCHAR(255), file_url VARCHAR(255), FOREIGN KEY (complaint_id) REFERENCES complaints(id) ON DELETE CASCADE' }
];

// Create the tables
tables.forEach(table => checkAndCreateTable(table.name, table.schema));


export default connection;
