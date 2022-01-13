//Abstract factory(webDev)

function bwmProducer(kind) {
    return kind === 'sport' ? sportFactory : familyFactory;
};

//Factories
function sportCarFactory() {
    return new Z4();
};

function familyFactory() {
    return new I3();
}

class Z4 {
    info() {
        return `Z4 is a sport car`;
    }
};

class I3 {
    info() {
        return `I3 is a family car`;
    }
};

//Initializing Abstract factory of sport cars
const produce = bwmProducer('sport');

//Car producing factory
const car = new produce()
console.log(myCar.info())