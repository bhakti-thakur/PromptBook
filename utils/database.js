

import mongoose from "mongoose";

let isConnected = false

export const  connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if(mongoose.connections[0].readyState && isConnected){
        console.log('DB is already connected')
    }
    try {
        await  mongoose.connect(process.env.MONGODB_URI, {
            dbName:"share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected= true;
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error)
    }
}
