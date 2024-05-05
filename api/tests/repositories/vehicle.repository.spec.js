import { VehicleRepository } from "../../src/repositories/vehicle.repository.js"
import fs from 'node:fs'
import { cleanDatabase } from "../utils/cleanDatabase.js";
describe('VechicleRepository', () => {
  const fileName = 'vehicles.json'
  const sut = new VehicleRepository(fileName);
  beforeEach(() => {
    cleanDatabase()
  })
  it('create a vehicle', () => {
    const result = sut.save({
      "placa": "1234567",
      "chassi": "1234567",
      "renavam": "1234567",
      "modelo": "Gallardo",
      "marca": "Lamborghini",
      "ano": 2025
    })
    const vehicles = JSON.parse(fs.readFileSync(fileName, 'utf-8'))

    expect(vehicles.length).to.eq(1)
    expect(vehicles[0].marca).to.eq('Lamborghini')


  })

  it('update a vehicle', () => {

    fs.writeFileSync(fileName, JSON.stringify([
      {
        "placa": "1234567",
        "chassi": "1234567",
        "renavam": "1234567",
        "modelo": "Gallardo",
        "marca": "Lamborghini",
        "ano": 2025,
        "id": 123456

      }
    ]))
    sut.update({

      "placa": "1234567",
      "chassi": "1234567",
      "renavam": "1234567",
      "modelo": "Gallard12",
      "marca": "Lamborghini",
      "ano": 2025,

    }, 123456);

    const vehicles = JSON.parse(fs.readFileSync(fileName, 'utf-8'))

    expect(vehicles[0].modelo).to.eq('Gallard12')


  })


  it('delete a vehicle', () => {
    fs.writeFileSync(fileName, JSON.stringify([
      {
        "placa": "1234567",
        "chassi": "1234567",
        "renavam": "1234567",
        "modelo": "Gallardo",
        "marca": "Lamborghini",
        "ano": 2025,
        "id": 123456

      }
    ]))
    sut.delete(123456)
    const vehicles = JSON.parse(fs.readFileSync(fileName, 'utf-8'))
    expect(vehicles.length).to.eq(0)

  })

  it('read a vehicle', () => {

    fs.writeFileSync(fileName, JSON.stringify([
      {
        "placa": "1234567",
        "chassi": "1234567",
        "renavam": "1234567",
        "modelo": "Gallardo",
        "marca": "Lamborghini",
        "ano": 2025,
        "id": 123456

      }
    ]))
    const vehicle = sut.get(123456)

    expect(vehicle.modelo).to.eq('Gallardo')

  })
  it('read all vehicles', () => {
    fs.writeFileSync(fileName, JSON.stringify([
      {
        ano: 2025,
        chassi: '1234567',
        id: 123456,
        modelo: 'Gallardo',
        marca: 'Lamborghini',
        placa: '1234567',
        renavam: '1234567'
      },
      {
        ano: 2025,
        chassi: '9876654',
        id: 12389,
        modelo: 'Palio',
        marca: 'Fiat',
        placa: '9876654',
        renavam: '9876654'
      }
    ]))
    const vehicles = sut.getAll()


    expect(vehicles[0].marca).to.equal('Lamborghini')
    expect(vehicles[1].marca).to.equal('Fiat')

  })
  after(() => {
    cleanDatabase()
  })
})