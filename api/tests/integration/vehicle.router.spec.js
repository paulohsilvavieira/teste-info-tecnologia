import { cleanDatabase } from '../utils/cleanDatabase.js'

describe('Vehicle Router', () => {

  beforeEach((done) => {
    cleanDatabase()
    done()
  })

  after((done) => {
    cleanDatabase()
    done()
  })

  describe('POST /vehicles', () => {

    it('Should return status code 400 if dont send required fields', async () => {
      const response = await request.post('/vehicles').send({
        "placa": "1234567",
        "chassi": "1234567",
        "modelo": "Gallardo",
        "marca": "Lamborghini",
        "ano": 2025
      })
      expect(response.status).to.eql(400);
      expect(response.body).to.eql({
        errors: [
          'renavam is required!'
        ]
      })

    })
    it('Should return status code 201 and vehicleId of a new created vehicle', async () => {

      const response = await request.post('/vehicles').send({
        "placa": "1234567",
        "chassi": "1234567",
        "renavam": "1234567",
        "modelo": "Gallardo",
        "marca": "Lamborghini",
        "ano": 2025
      })
      expect(response.status).to.eql(201);

    })
    it('Should return status code 400 and message `Vehicle Already Exists!`', async () => {
      await request.post('/vehicles').send({
        "placa": "1234567",
        "chassi": "1234567",
        "renavam": "1234567",
        "modelo": "Gallardo",
        "marca": "Lamborghini",
        "ano": 2025
      })
      const response = await request.post('/vehicles').send({
        "placa": "1234567",
        "chassi": "1234567",
        "renavam": "1234567",
        "modelo": "Gallardo",
        "marca": "Lamborghini",
        "ano": 2025
      })
      expect(response.status).to.eql(400);
      expect(response.body.msg).to.eql('Vehicle Already Exists!');
    })
  })

  describe('GET /vehicles/{id}', () => {
    it('Should Return Status 200 and a vehicles', async () => {
      const { body } = await request.post('/vehicles').send({
        "placa": "1234567",
        "chassi": "1234567",
        "renavam": "1234567",
        "modelo": "Gallardo",
        "marca": "Lamborghini",
        "ano": 2025
      })

      const response = await request.get(`/vehicles/${body.vehicleId}`)
      expect(response.status).to.eql(200);
      expect(response.body).to.eql({
        "placa": "1234567",
        "chassi": "1234567",
        "renavam": "1234567",
        "modelo": "Gallardo",
        "marca": "Lamborghini",
        "ano": 2025,
        id: body.vehicleId
      });
    })

    it('Should return 200 and message `Vehicle not Found`', async () => {
      const response = await request.get(`/vehicles/123456`)

      expect(response.status).to.eql(200);
      expect(response.body).to.eql({
        msg: 'Vehicle not found'
      });
    })

  })

  describe('GET /vehicles - Get All Vehicles', () => {
    it('Shoud return status code 200 and a list of vehicles', async () => {

      const { body } = await request.post('/vehicles').send({
        "placa": "1234567",
        "chassi": "1234567",
        "renavam": "1234567",
        "modelo": "Gallardo",
        "marca": "Lamborghini",
        "ano": 2025
      })

      const response = await request.get(`/vehicles`)
      expect(response.status).to.eql(200);
      expect(response.body.length).to.eql(1)
    });
  });

  describe('PUT /vehicles/{id}', () => {
    it('Should return a status code 400 if dont send required fields ', async () => {
      const { body } = await request.post('/vehicles').send({
        "placa": "1234567",
        "chassi": "1234567",
        "renavam": "1234567",
        "modelo": "Gallardo",
        "marca": "Lamborghini",
        "ano": 2025
      })
      const response = await request.put(`/vehicles/${body.vehicleId}`).send({
        "placa": "1234567",
        "chassi": "1234567",
        "modelo": "Gallardo",
        "marca": "Ferrari",
        "ano": 2025
      })
      expect(response.status).to.eql(400);
      expect(response.body).to.eql({
        errors: [
          'renavam is required!'
        ]
      })
    })
    it('Should return a status code 204 if vehicle updated sucessful', async () => {
      const { body } = await request.post('/vehicles').send({
        "placa": "1234567",
        "chassi": "1234567",
        "renavam": "1234567",
        "modelo": "Gallardo",
        "marca": "Lamborghini",
        "ano": 2025
      })

      const response = await request.put(`/vehicles/${body.vehicleId}`).send({
        "placa": "1234567",
        "chassi": "1234567",
        "renavam": "1234567",
        "modelo": "Gallardo",
        "marca": "Ferrari",
        "ano": 2025
      })
      const { body: vehicle } = await request.get(`/vehicles/${body.vehicleId}`)
      expect(response.status).to.eql(204);
      expect(vehicle.marca).to.eql('Ferrari')
    })
  });

  describe('DELETE /vehicles/{id}', () => {
    it('Should return status 204 if delete vehicle sucessful', async () => {

      const { body } = await request.post('/vehicles').send({
        "placa": "1234567",
        "chassi": "1234567",
        "renavam": "1234567",
        "modelo": "Gallardo",
        "marca": "Lamborghini",
        "ano": 2025
      })
      const response = await request.delete(`/vehicles/${body.vehicleId}`)
      expect(response.status).to.eql(204);

    })

  });


})

