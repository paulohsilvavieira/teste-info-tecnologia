import express from "express";
import vehicleRoutes from './routes/vehicle.routes.js';
const app = express();

app.use(express.json())

app.use(vehicleRoutes)

app.listen(3000, () => {
  console.log("Running on 3000");
});
export default app;
