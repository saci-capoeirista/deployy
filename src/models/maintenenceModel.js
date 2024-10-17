import { Schema, model } from "mongoose";

const maintenanceSchema = new Schema({
    workshop: {
        type: Schema.Types.ObjectId,
        ref: "Workshop",
        require: true
    },
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: "Vehicle",
        require: true
    },
    services: {
        type: [{name:String,
            price: Number
        }],
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    totalCost: {
        type: Number,
        require: true
    }
});

export default model("Maintenance", maintenanceSchema);