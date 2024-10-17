import { Schema, model } from "mongoose";

const workshopSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    specialties: {
        type: [String],
        require: true
    }
});

export default model("Workshop", workshopSchema);