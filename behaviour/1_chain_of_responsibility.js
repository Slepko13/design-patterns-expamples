//Vladilen

class MySum {
    constructor(initialValue = 28) {
        this.sum = initialValue;
    }

    add(value) {
        this.sum += value;
        return this;
    }
}

const sum1 = new MySum();
// console.log(sum1.add(8).add(5).add(9));

class Account {
    pay(orderPrice) {
        if (this.canPay(orderPrice)) {
            console.log(`Paid ${orderPrice} with ${this.name}`);
        } else if (this.incomer) {
            console.log(`Cannot pay with ${this.name}`);
            this.incomer.pay(orderPrice);
        } else {
            console.log('Not enough money');
        }
    }

    canPay(amount) {
        return this.balance >= amount;
    }

    setNext(account) {
        this.incomer = account;
    }
}

//webDev
class Master extends Account {
    constructor(balance) {
        super();
        this.name = 'Master Card';
        this.balance = balance;
    }
};

class Paypal extends Account {
    constructor(balance) {
        super();
        this.name = 'Paypal';
        this.balance = balance;
    }
};

class Visa extends Account {
    constructor(balance) {
        super();
        this.name = 'Visa';
        this.balance = balance;
    }
};


const master = new Master(800);
const paypal = new Paypal(1200);
const visa = new Visa(8000);

master.setNext(paypal);
paypal.setNext(visa);
master.pay(3000);
