export type BicycleType = "Mountain" | "Road" | "Hybrid" | "BMX" | "Electric";

// this is main interface of bicycle
export type TBicycle = {
    name: string,
    brand: string,
    price: number,
    type: BicycleType, // bicycle type
    description: string,
    quantity: number,
    inStock: boolean
}

