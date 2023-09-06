import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const db = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI);
        console.log('Successful connection with MongoDB.');
    } catch (error) {
        console.log(error);
        process.exit(1);

    }
};

export default db;