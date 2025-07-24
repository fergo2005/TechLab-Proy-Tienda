//router
import { Router } from "express";
import authorizationController from '../controllers/auth.controller.js';

const router = Router()

router.get('/', authorizationController.login);

export default router;

