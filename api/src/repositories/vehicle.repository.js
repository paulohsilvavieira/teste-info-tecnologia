import { randomUUID } from 'crypto'
import fs from 'fs'

export class VehicleRepository {

  constructor(fileName) {
    this.fileName = fileName
    this.#loadFile()
  }

  save = (vehicleData) => {
    this.#loadFile()

    if (this.#isExistsVehicle(vehicleData)) {
      return false
    }
    const vehicleDataToSave = { ...vehicleData, id: randomUUID() }
    this.vehicles.push(vehicleDataToSave)

    this.#writeFile(JSON.stringify(this.vehicles))
    return vehicleDataToSave.id
  }

  update = (vehicleData, vehicleId) => {
    this.#loadFile()

    const indexVehicle = this.vehicles.findIndex(vehicle => vehicle.id === vehicleId);

    this.vehicles[indexVehicle] = {
      ... this.vehicles[indexVehicle],
      ...vehicleData
    }
    this.#writeFile(JSON.stringify(this.vehicles))

    return true

  }
  delete = (vehicleId) => {
    this.vehicles = this.vehicles.filter(function (vehicle) { return vehicle.id !== vehicleId; });
    this.#writeFile(JSON.stringify(this.vehicles))

    return true
  }

  get = (vehicleId) => {

    this.#loadFile()
    const indexVehicle = this.vehicles.findIndex(vehicle => vehicle.id === vehicleId);

    return this.vehicles[indexVehicle]
  }

  getAll = () => {
    this.#loadFile()
    return this.vehicles
  }

  #loadFile = () => {
    const existsFile = fs.existsSync(this.fileName)
    if (existsFile) {
      this.vehicles = JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
      return
    }
    this.#writeFile(JSON.stringify([]))
  }

  #writeFile = (data) => {
    fs.writeFileSync(this.fileName, data, 'utf-8')
  }

  #isExistsVehicle = (vehicleData) => {
    const index = this.vehicles.findIndex(vehicle => vehicle.placa === vehicleData.placa ||
      vehicle.chassi === vehicleData.chassi ||
      vehicle.renavam === vehicleData.renavam
    );
    return index === -1 ? false : true
  }
}