//Vladilen

class Complaints {
    constructor() {
        this.complaints = [];
    }
    reply(complaint) { };
    add(complaint) {
        this.complaints.push(complaint);
        return this.reply(complaint);
    }
}
class ProductComplaints extends Complaints {
    reply({ id, customer, details }) {
        return `Product: ${id}: ${customer} (${details})`;
    }
}
class ServiceComplaints extends Complaints {
    reply({ id, customer, details }) {
        return `Service: ${id}: ${customer} (${details})`;
    }
}
class ComplaintRegistry {
    register(customer, type, details) {
        const id = Date.now();
        let complaint;
        if (type === 'service') {
            complaint = new ServiceComplaints();
        } else {
            complaint = new ProductComplaints();
        }
        return complaint.add({ id, customer, details })
    }
}

const registry = new ComplaintRegistry();
console.log(registry.register('Mykola', 'service', 'outline'));
console.log(registry.register('Olena', 'product ', 'outline'));

//webDev

class Conveyor {
    setBody() { console.log('Body set!'); }
    getEngine() { console.log('Dismantle engine!'); }
    setEngine() { console.log('Engine set'); }
    setWheels() { console.log('Wheels!'); }
    paint() { console.log('car painted!'); }
}

class ConveyorFacade {
    constructor(car) {
        this.car = car;
    }

    assembleCar() {
        this.car.setBody();
        this.car.setEngine();
        this.car.setWheels();
        this.car.paint();
    }

    changeEngine() {
        this.car.getEngine();
        this.car.setEngine();
    }
}

const conveyor = new ConveyorFacade(new Conveyor());


let car = conveyor.assembleCar();
car = conveyor.changeEngine();