import { Router } from 'express';
import { postLogin } from '../controllers/loginControllers';

export const loginRoute = (route:Router) => {
    route.post('/api/login', postLogin)
}