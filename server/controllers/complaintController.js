import { getAllComplaintsQuery, getComplaintByIdQuery, createComplaintQuery, updateComplaintQuery, deleteComplaintQuery } from '../models/complaintModel.js';

export const getComplaints = (req, res) => {
  getAllComplaintsQuery((err, results) => {
    if (err) res.status(500).send(err);
    res.json(results);
  });
};

export const getComplaint = (req, res) => {
  getComplaintByIdQuery(req.params.id, (err, results) => {
    if (err) res.status(500).send(err);
    res.json(results);
  });
};

export const addComplaint = (req, res) => {
  createComplaintQuery(req.body, (err, results) => {
    if (err) res.status(500).send(err);
    res.json(results);
  });
};

export const updateComplaint = (req, res) => {
  updateComplaintQuery(req.params.id, req.body, (err, results) => {
    if (err) res.status(500).send(err);
    res.json(results);
  });
};

export const deleteComplaint = (req, res) => {
  deleteComplaintQuery(req.params.id, (err, results) => {
    if (err) res.status(500).send(err);
    res.json(results);
  });
};
