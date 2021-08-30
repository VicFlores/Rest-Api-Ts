import mongoose from 'mongoose';

let config = {
useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  poolSize: 10,
  /* serverSelectionTimeoutMS: 5000, */
  /* socketTimeoutMS: 45000, */
}

const connection = async () => {
    try {
        console.log(process.env.MONGODB)
        await mongoose.connect(String(process.env.MONGODB), config)
        console.info(`Database connected`)
    } catch (error) {
        throw new Error(`Database error ${error}`)
    }
}

export default connection