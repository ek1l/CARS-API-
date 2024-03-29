import { carsDatabase, generateCarsId } from '../database/cars';
import { ICar, TCreateBody, TupdateBody } from '../database/cars.interface';

interface ICarsServices {
  create(body: TCreateBody): ICar;
  getMany(search?: string, year?: string): ICar[];
  getOne(id: string): ICar;
  update(id: string, body: Partial<TupdateBody>): ICar;
  delete(id: string): void;
}

export class CarsServices implements ICarsServices {
  create(body: TCreateBody) {
    const date = new Date();
    const newCar: ICar = {
      id: generateCarsId(),
      model: body.model,
      year: body.year,
      km: body.km,
      brand: body.brand,
      price: body.price,
      createdAt: date,
      updatedAt: date,
    };
    carsDatabase.push(newCar);
    return newCar;
  }

  getMany(search?: string, year?: string): ICar[] {
    const carList = carsDatabase.filter((car) => {
      const searchRule = search
        ? car.model.toLowerCase().includes(search.toLocaleLowerCase())
        : true;

      const yearRule = year ? car.year === Number(year) : true;
      return searchRule && yearRule;
    });
    return carList;
  }

  getOne(id: string) {
    const car = carsDatabase.find((car) => car.id === Number(id)) as ICar;

    return car;
  }

  update(id: string, body: Partial<TCreateBody>): ICar {
    const currentCar = carsDatabase.find(
      (car) => car.id === Number(id),
    ) as ICar;
    const newCar = {
      ...currentCar,
      ...body,
      updatedAt: new Date(),
    };
    const index = carsDatabase.findIndex((car) => car.id === Number(id));
    carsDatabase.splice(index, 1, newCar);

    return newCar;
  }

  delete(id: string) {
    const index = carsDatabase.findIndex((car) => car.id === Number(id));
    carsDatabase.splice(index, 1);
  }
}
