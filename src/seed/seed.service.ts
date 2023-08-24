import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';

import Cars_Seed from './data/cars.seed';
import Brands_Seed from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
  ) { }
  populateDB() {

    this.brandsService.fillBrandsWithSeedData(Brands_Seed);
    this.carsService.fillCarsWithSeedData(Cars_Seed);

    return `Servicio Seed Ejecutandose`
  }
}
