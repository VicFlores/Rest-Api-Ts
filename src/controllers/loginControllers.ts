import { Request, Response } from 'express'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import personModel from '../models/personModel'
import { createToken } from '../helpers/createToken'

dotenv.config({ path: './.env' })

const postLogin = async (req:Request, res:Response) => {
    try {
        const personDB = await personModel.findOne({ email: req.body.email })

        if (!personDB) {
            return res.status(400).json({ message: 'User! or password not founded' })
        }
        
        if (!bcrypt.compareSync(req.body.pass, personDB.pass)) {
            return res.status(400).json({ message: 'User or password! not founded' })
        }

        const token = createToken({
            id :personDB.id,
            fullname: personDB.fullname,
            email: personDB.email,
            age: personDB.age,
        }, String(process.env.SECRET), '24h')

        return res.status(200).json({
            personDB,
            token,
        })

    } catch (error) {
        res.status(400).json({ message: 'error in login', error })
    }
}

export { postLogin }