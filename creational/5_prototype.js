//Vladilen

const car = {
    wheels: 4,
    init() {
        console.log(`I have ${this.wheels} wheels, my owner is ${this.owner}`);
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Mykola'
    }
})
console.log(carWithOwner.__proto__ === car);
carWithOwner.init();

//webDev

class TeslaCar {
    constructor(model, price, interior, autopilot) {
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }
    produce() {
        return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
    }
}
//Produce base auto
const prototypeCar = new TeslaCar('S', 80000, 'black', false);

//Cloning of base auto
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

//Changes for particular auto
car1.interior = 'white';
car2.autopilot = true;