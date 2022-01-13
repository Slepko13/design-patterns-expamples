//Vladilen

class Database {
    constructor(data) {
        if (Database.exist) {
            return Database.instance;
        }

        Database.instance = this;
        Database.exist = true;
        this.data = data
    }
    getData() {
        return this.data
    }
}

const mongo = new Database('MongoDB');
console.log(mongo.getData());

const mysql = new Database('MySQL');
console.log(mysql.getData());

//webDew


//version 1 with global variable

let instance;
class Counter {
    constructor() {
        if (!instance) {
            instance = this;
        }
        instance.count = 0;
        return instance;
    }

    getCount() {
        return instance.count;
    }

    increaseCount() {
        return instance.count++;
    }
}

const counter1 = new Counter();
const counter2 = new Counter();

counter1.increaseCount();
counter1.increaseCount();
counter2.increaseCount();
counter2.increaseCount();
counter2.increaseCount();

console.log(counter1.getCount());
console.log(counter2.getCount());


//version 2 without global variable
class CounterLocal {
    constructor() {
        if (typeof CounterLocal.instance === 'object') {
            return CounterLocal.instance;
        }
        this.count = 0;
        CounterLocal.instance = this;
        return this;
    }

    getCount() {
        return this.count;
    }

    increaseCount() {
        return this.count++;
    }
}

const counter1Loc = new CounterLocal();
const counter2Loc = new CounterLocal();

console.log(typeof (counter1Loc));

counter1Loc.increaseCount();

console.log(counter1Loc.instance);

counter1Loc.increaseCount();
counter2Loc.increaseCount();
counter2Loc.increaseCount();
counter2Loc.increaseCount();

console.log(counter1Loc.getCount());
console.log(counter2Loc.getCount());
