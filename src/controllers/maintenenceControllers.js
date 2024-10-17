import Maintenence from "../models/maintenenceModel.js";

export const store = async (req, res) => {
    try {
        const maintenence = await Maintenence.create(req.body);
        return res.status(201).json(maintenence);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const index = async (req, res) => {
    try {
        const maintenences = await Maintenence.find().exec();
        return res.status(200).json(maintenences);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const update = async (req, res) => {
    try {
        const maintenence = await Maintenence.findByIdAndUpdate(req.params.id, req.body).exec();
        return res.status(200).json(maintenence);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const destroy = async (req, res) => {
    try {
        const content = await Maintenence.findByIdAndDelete(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

