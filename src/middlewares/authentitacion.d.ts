import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config({ path: './.env' })

const verifyToken = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const token = req.get('token')

        const resToken = await jwt.verify(String(token), String(process.env.SECRET))

        if (!resToken) {
            return res.status(400).json({ message: 'Token error' })
        }

        req.user = resToken.data;

        next();

    } catch (error) {
        
    }
}