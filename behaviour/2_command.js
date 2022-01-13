//Vladilen 

class MyMath {
    constructor(initialValue = 0) {
        this.num = initialValue;
    }

    square() {
        return this.num ** 2;
    }

    cube() {
        return this.num ** 3;
    }
}

class Command {
    constructor(subject) {
        this.subject = subject;
        this.commandsExecuted = [];
    }

    execute(command) {
        this.commandsExecuted.push(command);
        return this.subject[command]()
    }
}

const x = new Command(new MyMath(5));
// console.log(x.execute('square'));
// console.log(x.execute('cube'));
// console.log(x.commandsExecuted);


//webDev
class Driver {
    constructor(command) {
        this.command = command
    }

    execute() {
        this.command.execute();
    }
}

class Engine {
    constructor() {
        this.state = false;
    }

    on() {
        this.state = true;
        console.log(this.state);
    }

    off() {
        this.state = false;
        console.log(this.state);

    }
}

class OnStartCommand {
    constructor(engine) {
        this.engine = engine;
    }

    execute() {
        this.engine.on()
    }
}

class OnSwitchOffCommand {
    constructor(engine) {
        this.engine = engine;
    }
    execute() {
        this.engine.off();
    }
}

const start = new Driver(new OnStartCommand(new Engine()));
start.execute();
const stop = new Driver(new OnSwitchOffCommand(new Engine()));
stop.execute();