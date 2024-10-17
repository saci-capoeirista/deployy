import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connect("mongodb://localhost:27017/prova")
    .then(() => console.log("conectado ao mongoDB"))
    .catch((error) => console.log(error));
}
export default connectDB;