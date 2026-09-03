import express from 'express';
import verifyAuth from '../middlewares/verifyAuth.js';
import {getProfile} from '../controllers/intern.controller.js';

const router = express.Router();

router.use(verifyAuth, (req, res, next) => {
	if (req.user.role !== 'intern') {
		return res.status(403).json({ message: 'Forbidden' });
	}

	next();
});

router.get('/profile', getProfile);



export default router;