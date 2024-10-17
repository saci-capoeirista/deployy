import Vehicle from "../models/vehicleModel.js";

export const store = async (req, res) => {
    try {
        const vehicle = await Vehicle.create(req.body);
        return res.status(201).json(vehicle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const index = async (req, res) => {
    try {
        const vehicles = await Vehicle.find().exec();
        return res.status(200).json(vehicles);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(vehicle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const destroy = async (req, res) => {
    try {
        const content = await Vehicle.findByIdAndDelete(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

