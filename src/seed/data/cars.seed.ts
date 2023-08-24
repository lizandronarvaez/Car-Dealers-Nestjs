import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuidv4 } from 'uuid';

const Cars_Seed: Car[] = [
    {
        id: uuidv4(),
        brand: "Nissan",
        model: "Qashqai"
    },
    {
        id: uuidv4(),
        brand: "Honda",
        model: "Civic"
    },
    {
        id: uuidv4(),
        brand: "Opel",
        model: "Insignia"
    },
    {
        id: uuidv4(),
        brand: "Audi",
        model: "A4"
    }
]

export default Cars_Seed