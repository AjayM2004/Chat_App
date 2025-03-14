import express from 'express';

import { signup,logout,login } from '../controllers/auth.controller.js';
const app = express();
const port = process.env.PORT || 3000;

const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);
export default router;