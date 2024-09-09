import { getAllUsersQuery, getUserByIdQuery, createUserQuery, updateUserQuery, deleteUserQuery } from '../models/userModel.js';

export const getUsers = (req, res) => {
  getAllUsersQuery((err, results) => {
    if (err) res.status(500).send(err);
    res.json(results);
  });
};

export const getUser = (req, res) => {
  getUserByIdQuery(req.params.id, (err, results) => {
    if (err) res.status(500).send(err);
    res.json(results);
  });
};

export const addUser = (req, res) => {
  createUserQuery(req.body, (err, results) => {
    if (err) res.status(500).send(err);
    res.json(results);
  });
};

export const updateUser = (req, res) => {
  updateUserQuery(req.params.id, req.body, (err, results) => {
    if (err) res.status(500).send(err);
    res.json(results);
  });
};

export const deleteUser = (req, res) => {
  deleteUserQuery(req.params.id, (err, results) => {
    if (err) res.status(500).send(err);
    res.json(results);
  });
};
