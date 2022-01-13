//Vladilen

class SimpleMembership {
    constructor(name) {
        this.name = name;
        this.cost = 50;
    }
}

class StandardMembership {
    constructor(name) {
        this.name = name;
        this.cost = 100;
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name;
        this.cost = 150;
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership
    }
    create(name, type = "simple") {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
        const member = new Membership(name);
        member.type = type;
        member.define = function () {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        }
        return member;
    }
}

const factory = new MemberFactory();

const members = [
    factory.create('Mykola', 'simple'),
    factory.create('Mirko', 'standard'),
    factory.create('Olena', 'premium')
];
console.log(members);
members.forEach((member) => {
    member.define();
})


//webDew 

class Bmw {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
};

class BmwFactory {
    create(type) {
        if (type = 'X5') {
            return new Bmw(type, 10000, 300);
        }
        if (type = 'X6') {
            return new Bmw(type, 12000, 320);
        }
    }
}

const newFactory = new BmwFactory();

const x5 = newFactory.create('X5');
const x6 = newFactory.create('X6');

console.log(x5);
console.log(x6);

