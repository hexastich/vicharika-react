import connection from '../config/db.js';

export const getAllComplaintsQuery = (callback) => {
  connection.query('SELECT * FROM complaints', callback);
};

export const getComplaintByIdQuery = (id, callback) => {
  connection.query('SELECT * FROM complaints WHERE id = ?', [id], callback);
};

export const createComplaintQuery = (complaint, callback) => {
  connection.query('INSERT INTO complaints SET ?', complaint, callback);
};

export const updateComplaintQuery = (id, complaint, callback) => {
  connection.query('UPDATE complaints SET ? WHERE id = ?', [complaint, id], callback);
};

export const deleteComplaintQuery = (id, callback) => {
  connection.query('DELETE FROM complaints WHERE id = ?', [id], callback);
};
