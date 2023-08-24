import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   brand: "Toyota",
    //   createdAt: new Date().getTime(),
    // }
  ]
  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      brand: createBrandDto.brand,
      createdAt: new Date().getTime()
    }
    return brand;
  }

  findAll() {
    return this.brands
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);
    if (!brand) {
      throw new NotFoundException(`El brand con el id ${id} no existe!`)
    }
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    this.brands = this.brands.map(brand => {
      if (brand.id === id) {
        brand.createdAt = new Date().getTime();
        brandDB = { ...brandDB, ...UpdateBrandDto }
        return brandDB;
      }
      return brand
    })

  }

  remove(id: string) {
    this.brands = this.brands.filter(brand => brand.id !== id)
  }

  fillBrandsWithSeedData(brand: Brand[]) {
    this.brands = brand;
}
}
