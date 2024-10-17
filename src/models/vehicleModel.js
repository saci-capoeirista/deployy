import { Schema, model } from "mongoose";

const vehicleSchema = new Schema({
    plate: {
        type: String,
        require: true
    },
    model: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    owner: {
        type: String,
        require: true
    },
    maintenances: [{
        type: Schema.Types.ObjectId,
        ref: "Maintence",
        require: true
    }]
});

export default model("Vehicle", vehicleSchema);