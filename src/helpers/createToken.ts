import jwt from 'jsonwebtoken'
import { IuserToken } from '../interfaces/IuserToken';

export const createToken = (user:IuserToken, secret:string, expiresIn:string) => {
    const { id, fullname, email, age} = user;
    return jwt.sign({ id, fullname, email, age }, secret, { expiresIn })
}