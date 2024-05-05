export class VehicleService {

  #repository;
  constructor(repository) {
    this.#repository = repository
  }

  create = (vehicleData) => {
    return this.#repository.save(vehicleData)
  }

  update = (vehicleData, vehicleId) => {
    if (!this.#repository.get(vehicleId)) {
      return false
    }
    return this.#repository.update(vehicleData, vehicleId)

  }

  delete = (vehicleId) => {
    if (!this.#repository.get(vehicleId)) {
      return false
    }
    return this.#repository.delete(vehicleId)

  }

  getAll = () => {
    return this.#repository.getAll()
  }

  get = (vehicleId) => {
    return this.#repository.get(vehicleId)
  }

  validator = (vehicleData) => {
    const requiredFields = ['placa', 'chassi', 'renavam', 'modelo', 'marca', 'ano']
    const errors = []
    for (const field of requiredFields) {
      if (!vehicleData[field]) {
        errors.push(`${field} is required!`)
      }
    }

    return {
      isValid: errors.length === 0 ? true : false,
      errors
    };

  }
}