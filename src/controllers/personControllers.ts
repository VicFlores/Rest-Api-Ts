import { Request, Response } from 'express'
import personModel from '../models/personModel'
import bcrypt from 'bcrypt'

const getPerson = async (req: Request, res: Response) => {
    try {
        const personDB = await personModel.find({})
        return res.status(200).json(personDB)
    } catch (error) {
        res.status(200).json({ message: 'error in get person', error })
    }
}

const postPerson = async (req:Request, res: Response)  => {
    const body = req.body;

    const person = {
        fullname: body.fullname,
        email: body.email,
        age: body.age,
        role: body.role,
        pass: bcrypt.hashSync(body.pass, 10),
    }

    try {
        const personDB = await personModel.create(person)
        return res.status(200).json(personDB)
    } catch (error) {
        res.status(400).json({ message: 'error in add person', error})
    }
}

const putPerson = async (req:Request, res: Response) => {
    try {
        let id = req.params.id;
        const personDB = await personModel.findByIdAndUpdate(id, req.body, { new: true })
        return res.status(200).json(personDB)
    } catch (error) {
        res.status(400).json({ message: 'error in update person', error })
    }
}

const deletePerson = async (req:Request, res: Response) => {
    try {
        let id = req.params.id;
        const personDB = await personModel.findByIdAndDelete(id)
        res.status(400).json(personDB)
    } catch (error) {
        res.status(400).json({ message: 'error in delete person', error })
    }
}

export { getPerson, postPerson, putPerson, deletePerson }