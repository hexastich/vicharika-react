import connection from '../config/db.js';

export const getAllUsersQuery = (callback) => {
  connection.query('SELECT * FROM users', callback);
};

export const getUserByIdQuery = (id, callback) => {
  connection.query('SELECT * FROM users WHERE id = ?', [id], callback);
};

export const createUserQuery = (user, callback) => {
  connection.query('INSERT INTO users SET ?', user, callback);
};

export const updateUserQuery = (id, user, callback) => {
  connection.query('UPDATE users SET ? WHERE id = ?', [user, id], callback);
};

export const deleteUserQuery = (id, callback) => {
  connection.query('DELETE FROM users WHERE id = ?', [id], callback);
};
