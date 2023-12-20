
import { Car } from '../entities/car';
import { CarsRepo } from './api.repo.cars';

describe('Given CarsRepo class', () => {
  const repo = new CarsRepo('');
  describe('When we instantiate it and response is ok', () => {
    
    let jsonMock: jest.Mock;
    beforeEach(() => {
      jsonMock = jest.fn().mockResolvedValue([]);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });

    test('Then method getCars should...', async () => {
      const expected: Car[] = [];
      const result = await repo.getCars();
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });


    test('Then the createCar should be used...', async () => {
      const result = await repo.createCar({} as FormData);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual([]);
    });
  })

  describe('When we call getCars and response is bad', () => {
    const token = '';
    beforeEach(() => {
      const jsonMock = jest.fn().mockResolvedValue([]);
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        json: jsonMock,
      });
    });
    test('Then getCars should throw an error', async () => {
      const repo = new CarsRepo(token);
      await expect(repo.getCars()).rejects.toThrow();
    });
  });

  describe('When we call deleteCar and response is bad', () => {
    const token = '';
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then deleteCar should throw an error', async () => {
      const carId = '1';
      const repo = new CarsRepo(token);
      await expect(repo.deleteCar(carId)).rejects.toThrow();
    });
  });

  describe('When we call updateCar', () => {
    beforeEach(() => {
      
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jsonMock,
      });
    });
    const jsonMock = jest.fn().mockResolvedValue({} as Car);
    test('Then fetch should be called and return a Car', async () => {
      const carId = '1';
      const token = '';
      const updatedCar = {
        name: 'Updated Skin',
      } as unknown as FormData;
      const expected: Car = {} as Car;
      const repo = new CarsRepo(token);
      const result = await repo.updateCar(carId, updatedCar);
      expect(jsonMock).toHaveBeenCalled();
      expect(result).toStrictEqual(expected);
    });
  });
  describe('When we call updateCar and response is bad', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then updateCar should throw an error', async () => {
      const carId = '1';
      const token = '';
      const updatedSkin = {
        name: 'Updated Car',
      } as unknown as FormData;
      const repo = new CarsRepo(token);
      await expect(repo.updateCar(carId, updatedSkin)).rejects.toThrow();
    });
  });

  describe('When we call createCar and response is bad', () => {
    const token = '';
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
      });
    });
    test('Then deleteCar should throw an error', async () => {
      const repo = new CarsRepo(token);
      await expect(repo.createCar({} as FormData)).rejects.toThrow();
    });
  });

  describe('Given CarsRepo class', () => {
    const repo = new CarsRepo('');
    describe('When we call getCarsByPage and response is ok', () => {
      let jsonMock: jest.Mock;
  
      beforeEach(() => {
        jsonMock = jest.fn().mockResolvedValue([]);
        global.fetch = jest.fn().mockResolvedValueOnce({
          ok: true,
          json: jsonMock,
        });
      });
  
      test('Then method getCarsByPage should...', async () => {
        const expected: Car[] = [];
        const pageNumber = '1';
        const result = await repo.getCarsByPage(pageNumber);
        
        expect(global.fetch).toHaveBeenCalledWith(repo.apiUrl + `/page/${pageNumber}`);    
        expect(jsonMock).toHaveBeenCalled();      
        expect(result).toStrictEqual(expected);
      });
    });
  
    describe('When we call getCarsByPage and response is bad', () => {
      const token = '';
  
      beforeEach(() => {
        const jsonMock = jest.fn().mockResolvedValue([]);
        global.fetch = jest.fn().mockResolvedValueOnce({
          ok: false,
          json: jsonMock,
        });
      });
  
      test('Then getCarsByPage should throw an error', async () => {
        const repo = new CarsRepo(token);
        const pageNumber = '1';
        
        await expect(repo.getCarsByPage(pageNumber)).rejects.toThrow();
      });
    });
  });
  
})
