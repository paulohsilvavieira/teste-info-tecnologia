
export class VehiclesController {
  constructor(vehicleService) {
    this.vehicleService = vehicleService;
  }

  create = (request, response) => {

    const { isValid, errors } = this.vehicleService.validator(request.body)

    if (!isValid) {
      return response.status(400).json({
        errors,
      });
    }

    const vehicleId = this.vehicleService.create(request.body);

    if (!vehicleId) {
      return response.status(400).json({
        msg: "Vehicle Already Exists!",
      });
    }

    return response.status(201).json({
      vehicleId,
    });


  }


  update = (request, response) => {

    const { isValid, errors } = this.vehicleService.validator(request.body)

    if (!isValid) {
      return response.status(400).json({
        errors,
      });
    }

    const isUpdated = this.vehicleService.update(request.body, request.params.id)
    if (!isUpdated) {
      return response.status(400).json({
        msg: 'Vehicle not found'
      });
    }
    return response.status(204).json();


  }
  getAll = (request, response) => {

    const vehicles = this.vehicleService.getAll()
    return response.status(200).json(vehicles);

  }

  get = (request, response) => {

    const vehicle = this.vehicleService.get(request.params.id)
    return response.status(200).json(vehicle ?? { msg: 'Vehicle not found' })


  }


  delete = (request, response) => {

    const vehicle = this.vehicleService.delete(request.params.id)
    return response.status(204).json();


  }


}
