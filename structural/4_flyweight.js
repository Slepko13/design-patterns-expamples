//Vladilen

class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    }

    create(model, price) {
        const candidate = this.getCar(model)
        if (candidate) {
            return candidate;
        }
        const newCar = new Car(model, price);
        this.cars.push(newCar);
        return newCar;
    }

    getCar(model) {
        return this.cars.find(car => car.model === model);
    }
}

const factory = new CarFactory();
const bmwX6 = factory.create('bmw', 10000);
const audi = factory.create('audi', 12000);
const bmwX3 = factory.create('bmw', 8000);

console.log(bmwX6);
console.log(audi);
console.log(bmwX3);
console.log(bmwX6 === bmwX3);

//webDev

class Auto {
    constructor(model) {
        this.model = model
    }
};

class AutoFactory {
    constructor(name) {
        this.models = {};
    }
    create(name) {
        let model = this.models[name];
        if (model) return model;
        console.count('model');
        this.models[name] = new Auto(name);
        return this.models[name];
    }

    getModels() {
        console.table(this.models);
    }
};

const newFactory = new AutoFactory();
const newBmw = newFactory.create('BMW');
const newTesla = newFactory.create('tesla');
const newAudi = newFactory.create('audi');
const newBlackTesla = newFactory.create('tesla');

console.log(newFactory.getModels());