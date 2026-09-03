import express from 'express';
import { registerValidator } from '../validators/auth.validator.js';
import verifyAuth from '../middlewares/verifyAuth.js';
import { createIntern } from '../controllers/teamleader.controller.js';

const teamleaderRouter = express.Router();

teamleaderRouter.post('/create-intern', verifyAuth, registerValidator, createIntern);

export default teamleaderRouter;
