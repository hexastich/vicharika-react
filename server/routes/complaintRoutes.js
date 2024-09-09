import express from 'express';
import { getComplaints, getComplaint, addComplaint, updateComplaint, deleteComplaint } from '../controllers/complaintController.js';

const router = express.Router();

router.get('/complaints', getComplaints);
router.get('/complaints/:id', getComplaint);
router.post('/complaints', addComplaint);
router.put('/complaints/:id', updateComplaint);
router.delete('/complaints/:id', deleteComplaint);

export default router;
