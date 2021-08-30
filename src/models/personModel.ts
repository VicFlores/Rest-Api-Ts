import { Schema, model } from 'mongoose';
import { Iperson } from '../interfaces/Iperson';

enum roles {
    admin,
    user,
}

const personSchema = new Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    role: { type: String, default: 'user', enum: roles, required: true },
    pass: { type: String, required: true }
})

export default model<Iperson>('Person', personSchema)