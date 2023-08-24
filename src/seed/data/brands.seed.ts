import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuidv4 } from 'uuid';

const Brands_Seed: Brand[] = [
    {
        id: uuidv4(),
        brand: "Nissan",
        createdAt: new Date().getTime()
    },
    {
        id: uuidv4(),
        brand: "Honda",
        createdAt: new Date().getTime()
    },
    {
        id: uuidv4(),
        brand: "Opel",

        createdAt: new Date().getTime()
    },
    {
        id: uuidv4(),
        brand: "Audi",
        createdAt: new Date().getTime()
    }
]

export default Brands_Seed