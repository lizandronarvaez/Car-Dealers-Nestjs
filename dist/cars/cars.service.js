"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let CarsService = class CarsService {
    constructor() {
        this.cars = [
            {
                id: (0, uuid_1.v4)(),
                brand: 'Toyota',
                model: 'Corolla'
            },
        ];
    }
    findAll() {
        return this.cars;
    }
    findOneById(id) {
        const car = this.cars.find(car => car.id === id);
        if (!car)
            throw new common_1.NotFoundException({
                message: `No se encontro el familiar con el id ${id}`,
            });
        return car;
    }
    create(createCarDto) {
        const newCar = Object.assign({ id: (0, uuid_1.v4)() }, createCarDto);
        this.cars.push(newCar);
        return newCar;
    }
    update(id, updateCarDto) {
        let newCar = this.findOneById(id);
        if (updateCarDto.id && updateCarDto.id !== id)
            throw new common_1.BadRequestException('El id introducido, no es igual al que aparece');
        this.cars = this.cars.map(car => {
            if (car.id === id) {
                newCar = Object.assign(Object.assign(Object.assign({}, newCar), updateCarDto), { id });
                return newCar;
            }
            return car;
        });
        return newCar;
    }
    delete(id) {
        this.findOneById(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }
    fillCarsWithSeedData(cars) {
        this.cars = cars;
    }
};
CarsService = __decorate([
    (0, common_1.Injectable)()
], CarsService);
exports.CarsService = CarsService;
//# sourceMappingURL=cars.service.js.map