import express from "express";
import vehicleRoutes from "./routes/vehicle.routes.js";
import cors from "cors";
const app = express();
app.use(cors('*'))
app.use(express.json());

app.use(vehicleRoutes);

app.listen(3000, () => {
  console.log("Running on 3000");
});
export default app;
