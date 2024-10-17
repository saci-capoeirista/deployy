import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connect(`${process.env.URI}`)
    .then(() => console.log("conectado ao mongoDB"))
    .catch((error) => console.log(error));
}
export default connectDB;