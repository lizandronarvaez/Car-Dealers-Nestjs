import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';
export declare class CarsService {
    private cars;
    findAll(): {
        id: any;
        brand: string;
        model: string;
    }[];
    findOneById(id: string): {
        id: any;
        brand: string;
        model: string;
    };
    create(createCarDto: CreateCarDto): Car;
    update(id: string, updateCarDto: UpdateCarDto): {
        id: any;
        brand: string;
        model: string;
    };
    delete(id: string): void;
    fillCarsWithSeedData(cars: Car[]): void;
}
