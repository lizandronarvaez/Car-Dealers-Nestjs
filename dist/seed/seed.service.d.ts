import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';
export declare class SeedService {
    private readonly carsService;
    private readonly brandsService;
    constructor(carsService: CarsService, brandsService: BrandsService);
    populateDB(): string;
}
