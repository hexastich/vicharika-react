import express from 'express';
import { getUsers, getUser, addUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.post('/user', addUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;
