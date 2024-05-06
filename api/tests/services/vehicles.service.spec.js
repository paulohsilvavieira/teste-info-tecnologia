import { expect } from "chai";
import { VehicleService } from "../../src/services/vehicle.service.js";
import { mockRepository, resetMock } from "../utils/mock-repository.js";

describe("VehicleService", () => {
  beforeEach(() => {
    resetMock()
  })

  describe("create()", () => {
    it("should return vehicleId if repository save sucessfull vehicleData", () => {
      const sut = new VehicleService(mockRepository);
      const result = sut.create({
        placa: "czxcz1op[12o3[po12xczx",
        chassi: "dasdas",
        renavam: "l;k;xzlcklzxkczx;lk3",
        modelo: "Gallardo2",
        marca: "Lamborghini",
        ano: 2025,
      });
      expect(result).to.equal("vehicleIdCreated");
    });
    it("should return false if repository dont save vehicleData", () => {
      mockRepository.save = (params) => false;
      const sut = new VehicleService(mockRepository);
      const result = sut.create({
        placa: "czxcz1op[12o3[po12xczx",
        chassi: "dasdas",
        renavam: "l;k;xzlcklzxkczx;lk3",
        modelo: "Gallardo2",
        marca: "Lamborghini",
        ano: 2025,
      });
      expect(result).to.equal(false);
    });
  });
  describe("update()", () => {
    it("should return true if repository update sucessfull vehicle with new information", () => {
      const sut = new VehicleService(mockRepository);
      const result = sut.update(
        {
          placa: "czxcz1op[12o3[po12xczx",
          chassi: "dasdas",
          renavam: "l;k;xzlcklzxkczx;lk3",
          modelo: "Gallardo2",
          marca: "Lamborghini",
          ano: 1998,
        },
        "vehicleId",
      );
      expect(result).to.equal(true);
    });
    it("should return false if repository dont find vehicle to Update", () => {
      mockRepository.get = (vehicleId) => null;
      const sut = new VehicleService(mockRepository);
      const result = sut.update(
        {
          placa: "czxcz1op[12o3[po12xczx",
          chassi: "dasdas",
          renavam: "l;k;xzlcklzxkczx;lk3",
          modelo: "Gallardo2",
          marca: "Lamborghini",
          ano: 2025,
        },
        "vehicleIdWrong",
      );
      expect(result).to.equal(false);
    });
    it("should return false if repository cant update vehicle", () => {
      mockRepository.update = (vehicleData, vehicleId) => false;
      const sut = new VehicleService(mockRepository);
      const result = sut.update(
        {
          placa: "czxcz1op[12o3[po12xczx",
          chassi: "dasdas",
          renavam: "l;k;xzlcklzxkczx;lk3",
          modelo: "Gallardo2",
          marca: "Lamborghini",
          ano: 2025,
        },
        "vehicleId",
      );
      expect(result).to.equal(false);
    });
  });
  describe("delete()", () => {
    it("should return true if repository delete sucessfull vehicle", () => {
      const sut = new VehicleService(mockRepository);
      const result = sut.delete("vehicleId");
      expect(result).to.equal(true);
    });
    it("should return false if repository dont find vehicle to delete", () => {
      mockRepository.get = (vehicleId) => null;
      const sut = new VehicleService(mockRepository);
      const result = sut.delete("vehicleIdWrong");
      expect(result).to.equal(false);
    });
    it("should return false if repository cant delete vehicle", () => {
      mockRepository.delete = (vehicleId) => false;
      const sut = new VehicleService(mockRepository);
      const result = sut.delete("vehicleId");
      expect(result).to.equal(false);
    });
  });


  describe("get()", () => {
    it("should return a vehicle if repository find a vehicle with vehicleId", () => {
      const sut = new VehicleService(mockRepository);
      const result = sut.get("vehicleId");
      expect(result).to.eql({
        placa: "czxcz1op[12o3[po12xczx",
        chassi: "dasdas",
        renavam: "l;k;xzlcklzxkczx;lk3",
        modelo: "Gallardo2",
        marca: "Lamborghini",
        ano: 2025,
        id: "vehicleId",
      });
    });
    it("should dont find vehicle if repository dont find vehicle with vehicleId", () => {
      mockRepository.get = (vehicleId) => null;
      const sut = new VehicleService(mockRepository);
      const result = sut.delete("vehicleIdWrong");
      expect(result).to.equal(false);
    });

  });
  describe("getAll()", () => {
    it("should return all vehicles that repository finds", () => {
      const sut = new VehicleService(mockRepository);
      const result = sut.getAll("vehicleId");
      expect(result).to.same.deep.members([
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
      ]);
    });
    it("should return empty array if repository dont has saved vehicle ", () => {
      mockRepository.getAll = () => [];
      const sut = new VehicleService(mockRepository);
      const result = sut.getAll();
      expect(result.length).to.equal(0);
    });

  });
});
