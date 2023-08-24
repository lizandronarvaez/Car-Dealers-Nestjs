import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    getAllCars(): {
        id: any;
        brand: string;
        model: string;
    }[];
    getCarById(id: string): {
        id: any;
        brand: string;
        model: string;
    };
    createCar(createCarDto: CreateCarDto): import("./interfaces/car.interface").Car;
    updateCar(id: string, updateCarDto: UpdateCarDto): {
        id: any;
        brand: string;
        model: string;
    };
    deleteCar(id: string): void;
}
