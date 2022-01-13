//Vladilen

class OldCalc {
    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return t1 + t2;
            case 'sub': return t1 - t2;
            default: return NaN;
        }
    }
}

class NewCalc {
    add(t1, t2) {
        return t1 + t2;
    }

    sub(t1, t2) {
        return t1 - t2;
    }
}

class CalcAdapter {
    constructor() {
        this.calc = new NewCalc()
    }
    operations(t1, t2, operation) {
        switch (operation) {
            case 'add': return this.calc.add(t1, t2);
            case 'sub': return this.calc.sub(t1, t2);
            default: return NaN;
        }
    }
}

const oldCalc = new OldCalc();
console.log(oldCalc.operations(10, 5, 'add'));
const newCalc = new NewCalc()
console.log(newCalc.add(10, 5, 'add'));
const adapter = new CalcAdapter();
console.log(adapter.operations(10, 5, 'sub'));

//webDev

class Engine2 {
    simpleInterface() {
        console.log('Engine 2.0 running');
    }
};

class EngineV8 {
    complicatedInterface() {
        console.log('Engine V8 running');
    }
}

class EngineV8Adapter {
    constructor(engine) {
        this.engine = engine;
    }

    simpleInterface() {
        this.engine.complicatedInterface();
    }
}

class Auto {
    startEngine(engine) {
        engine.simpleInterface();
    }
}

const myCar = new Auto;
myCar.startEngine(new Engine2());//simple engine
myCar.startEngine(new EngineV8Adapter(new EngineV8()));//complicated engine
myCar.startEngine(new EngineV8());//error without adapter