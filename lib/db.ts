import mongoose, { Connection } from "mongoose";

let isConnected:Connection | boolean = false;

const connectDB = async () => {
    if(isConnected){
        console.log("Mongodb already connected");
        return isConnected;
    }
    try {
        const res = await mongoose.connect(process.env.MONGO_URI!);
        isConnected = res.connection;
        console.log("Mongodb connected.");
        return isConnected;
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;