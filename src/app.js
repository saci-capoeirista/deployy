import express from "express";
import connectDB from "./config/db.js";
import workshopRouters from "./routers/workshopRouters.js";
import vehicleRouters from "./routers/vehicleRouters.js";
import maintenanceRouters from "./routers/maintenanceRouters.js";

connectDB();

const app = express();
app.use(express.json());

app.use("/workshop", workshopRouters);
app.use("/vehicle", vehicleRouters);
app.use("/maintenance", maintenanceRouters);

app.listen(3000, () => console.log("Tá rodando o servidor rapá, na porta 3000"));