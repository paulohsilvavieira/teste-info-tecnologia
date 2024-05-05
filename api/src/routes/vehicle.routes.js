import express from 'express'
import { VehicleService } from '../services/vehicle.service.js'
import { VehicleRepository } from '../repositories/vehicle.repository.js'
import { VehiclesController } from '../controllers/vehicles.controller.js'

const router = express.Router()

const repository = new VehicleRepository('vehicles.json')
const service = new VehicleService(repository)
const constroler = new VehiclesController(service)

router.post('/vehicles', constroler.create)
router.get('/vehicles/:id', constroler.get)
router.get('/vehicles', constroler.getAll)
router.delete('/vehicles/:id', constroler.delete)
router.put('/vehicles/:id', constroler.update)

export default router