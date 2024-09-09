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

export default connection;
