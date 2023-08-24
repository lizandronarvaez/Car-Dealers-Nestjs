"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsService = void 0;
const common_1 = require("@nestjs/common");
const update_brand_dto_1 = require("./dto/update-brand.dto");
const uuid_1 = require("uuid");
let BrandsService = class BrandsService {
    constructor() {
        this.brands = [];
    }
    create(createBrandDto) {
        const brand = {
            id: (0, uuid_1.v4)(),
            brand: createBrandDto.brand,
            createdAt: new Date().getTime()
        };
        return brand;
    }
    findAll() {
        return this.brands;
    }
    findOne(id) {
        const brand = this.brands.find(brand => brand.id === id);
        if (!brand) {
            throw new common_1.NotFoundException(`El brand con el id ${id} no existe!`);
        }
        return brand;
    }
    update(id, updateBrandDto) {
        let brandDB = this.findOne(id);
        this.brands = this.brands.map(brand => {
            if (brand.id === id) {
                brand.createdAt = new Date().getTime();
                brandDB = Object.assign(Object.assign({}, brandDB), update_brand_dto_1.UpdateBrandDto);
                return brandDB;
            }
            return brand;
        });
    }
    remove(id) {
        this.brands = this.brands.filter(brand => brand.id !== id);
    }
    fillBrandsWithSeedData(brand) {
        this.brands = brand;
    }
};
BrandsService = __decorate([
    (0, common_1.Injectable)()
], BrandsService);
exports.BrandsService = BrandsService;
//# sourceMappingURL=brands.service.js.map