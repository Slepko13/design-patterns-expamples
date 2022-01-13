//webDev

class Car {
    constructor() {
        this.autopilot = false;
        this.parktronic = false;
        this.signaling = false;
    }
}

class CarBuilder {
    constructor() {
        this.car = new Car();
    }
    addAutopilot(autopilot) {
        this.car.autopilot = autopilot;
        return this;
    }
    addParktronic(parktronic) {
        this.car.parktronic = parktronic;
        return this;
    }
    addSignaling(signaling) {
        this.car.signaling = signaling;
        return this;
    }
    updateEngine(engine) {
        this.car.engine = engine;
        return this;
    }
    build() {
        return this.car;
    }
}

const newCar = new CarBuilder();
newCar.addAutopilot(true).addSignaling(true).updateEngine('new').build();