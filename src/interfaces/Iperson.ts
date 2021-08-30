import { Document } from "mongoose";

export interface Iperson extends Document {
    fullname: string;
    email: string;
    age: number;
    role: string;
    pass: string;
}