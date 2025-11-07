import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

const connectDb = async() => {
    mongoose
    .connect(process.env.MONGO_DB_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => console.log("DB Error:", err));
}
export default connectDb;