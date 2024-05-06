export const mockRepository = {
  save: (vehicleData) => {
    return 'vehicleIdCreated';
  },
  get: (vehicleId) => {
    return {
      placa: "czxcz1op[12o3[po12xczx",
      chassi: "dasdas",
      renavam: "l;k;xzlcklzxkczx;lk3",
      modelo: "Gallardo2",
      marca: "Lamborghini",
      ano: 2025,
      id: "vehicleId",
    };
  },
  delete: (vehicleId) => {
    return true;
  },
  getAll: () => {
    return [
      {
        placa: "czxcz1op[12o3[po12xczx",
        chassi: "dasdas",
        renavam: "l;k;xzlcklzxkczx;lk3",
        modelo: "Gallardo2",
        marca: "Lamborghini",
        ano: 2025,
        id: "id"
      },
      {
        placa: "czxcz1op[12o3[po12xczx",
        chassi: "dasdas",
        renavam: "l;k;xzlcklzxkczx;lk3",
        modelo: "Gallardo2",
        marca: "Lamborghini",
        ano: 2025,
        id: "id"
      },
    ];
  },
  update: (vehicleData, vehicleId) => {
    return true;
  },
};




export const backup = {
  save: (vehicleData) => {
    return 'vehicleIdCreated';
  },
  get: (vehicleId) => {
    return {
      placa: "czxcz1op[12o3[po12xczx",
      chassi: "dasdas",
      renavam: "l;k;xzlcklzxkczx;lk3",
      modelo: "Gallardo2",
      marca: "Lamborghini",
      ano: 2025,
      id: "vehicleId",
    };
  },
  delete: (vehicleId) => {
    return true;
  },
  getAll: () => {
    return [
      {
        placa: "czxcz1op[12o3[po12xczx",
        chassi: "dasdas",
        renavam: "l;k;xzlcklzxkczx;lk3",
        modelo: "Gallardo2",
        marca: "Lamborghini",
        ano: 2025,
        id: "id",
      },
      {
        placa: "czxcz1op[12o3[po12xczx",
        chassi: "dasdas",
        renavam: "l;k;xzlcklzxkczx;lk3",
        modelo: "Gallardo2",
        marca: "Lamborghini",
        ano: 2025,
        id: "id",
      },
    ];
  },
  update: (vehicleData, vehicleId) => {
    return true;
  },
};



export const resetMock = () => {
  mockRepository.create = (vehicleData) => true;
  mockRepository.update = (vehicleData, vehicleId) => true;
  mockRepository.get = (vehicleId) => ({
    placa: "czxcz1op[12o3[po12xczx",
    chassi: "dasdas",
    renavam: "l;k;xzlcklzxkczx;lk3",
    modelo: "Gallardo2",
    marca: "Lamborghini",
    ano: 2025,
    id: "vehicleId",

  });
  mockRepository.delete = (vehicleId) => true;

  mockRepository.getAll = () => (
    [
      {
        placa: "czxcz1op[12o3[po12xczx",
        chassi: "dasdas",
        renavam: "l;k;xzlcklzxkczx;lk3",
        modelo: "Gallardo2",
        marca: "Lamborghini",
        ano: 2025,
        id: "id",
      },
      {
        placa: "czxcz1op[12o3[po12xczx",
        chassi: "dasdas",
        renavam: "l;k;xzlcklzxkczx;lk3",
        modelo: "Gallardo2",
        marca: "Lamborghini",
        ano: 2025,
        id: "id",
      },
    ]
  );


};
