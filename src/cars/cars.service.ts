import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuidv4 } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: uuidv4(),
            brand: 'Toyota',
            model: 'Corolla'
        },
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {

        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException({
            message: `No se encontro el familiar con el id ${id}`,
        });

        return car;
    }
    create(createCarDto: CreateCarDto) {
        const newCar: Car = {
            id: uuidv4(),
            ...createCarDto,
        };
        this.cars.push(newCar);

        return newCar;
    }

    update(id: string, updateCarDto: UpdateCarDto) {
        let newCar = this.findOneById(id);
        if (updateCarDto.id && updateCarDto.id !== id)
            throw new BadRequestException(
                'El id introducido, no es igual al que aparece',
            );

        this.cars = this.cars.map(car => {
            if (car.id === id) {
                newCar = { ...newCar, ...updateCarDto, id };
                return newCar;
            }

            return car;
        });

        return newCar;
    }
    delete(id: string) {
        // Buscamos el familiar
        this.findOneById(id);
        // Reasignamos valores
        this.cars = this.cars.filter(car => car.id !== id);
    }
    fillCarsWithSeedData(cars: Car[]) {
        this.cars = cars;
    }
}
