import mongoose from "mongoose";

const MONGO_DB_URI = 'mongodb+srv://sahil:sahil123@cluster0.13sii.mongodb.net/'

const ConnectDb = () => {
    mongoose.connect(`${MONGO_DB_URI}`, {
    }).then(
        () => {
            console.log("monodb connnected Succesfully");
        }
    )
}

export { ConnectDb }