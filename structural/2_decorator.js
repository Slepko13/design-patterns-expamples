//Vladilen

class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port;
    }

    get url() {
        return `https://${this.ip}:${this.port}`
    }
}

function aws(server) {
    server.isAws = true;
    server.awsInfo = function () {
        return server.url;
    }
    return server;
}

function azure(server) {
    server.isAzure = true;
    server.port += 500;
    return server;

}
const s1 = aws(new Server('12.12.12.56', 8080));
console.log(s1.isAws);
console.log(s1.awsInfo());

const s2 = azure(new Server('12.12.12.56', 8080));
console.log(s2.isAzure);
console.log(s2.url);

//webDew

class Car {
    constructor() {
        this.price = 10000;
        this.model = 'Car'
    }

    getPrice() {
        return this.price;
    }

    getDescription() {
        return this.model;
    }
}

class Tesla extends Car {
    constructor() {
        super();
        this.price = 25000;
        this.model = 'Tesla';
    }
}

class Autopilot {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 5000;
    }

    getDescription() {
        return `${this.car.getDescription()} with autopilot`;
    }
}

class Parktronic {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 3000;
    }

    getDescription() {
        return `${this.car.getDescription()} with parktronik`;
    }
}

let tesla = new Tesla();
console.log(tesla);
console.log(tesla.getPrice(), tesla.getDescription());
tesla = new Autopilot(tesla);
console.log(tesla.getPrice(), tesla.getDescription());
console.log(tesla);
tesla = new Parktronic(tesla);
console.log(tesla.getPrice(), tesla.getDescription());
console.log(tesla);
