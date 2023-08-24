"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const Brands_Seed = [
    {
        id: (0, uuid_1.v4)(),
        brand: "Nissan",
        createdAt: new Date().getTime()
    },
    {
        id: (0, uuid_1.v4)(),
        brand: "Honda",
        createdAt: new Date().getTime()
    },
    {
        id: (0, uuid_1.v4)(),
        brand: "Opel",
        createdAt: new Date().getTime()
    },
    {
        id: (0, uuid_1.v4)(),
        brand: "Audi",
        createdAt: new Date().getTime()
    }
];
exports.default = Brands_Seed;
//# sourceMappingURL=brands.seed.js.map