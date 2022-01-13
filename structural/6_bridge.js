//webDev
class Model {
    constructor(color) {
        this.color = color;
    }
};

class Color {
    constructor(type) {
        this.type = type;
    }

    get() {
        return this.type;
    }
}

class BlackColor extends Color {
    constructor() {
        super("dark-black");
    }
}

class SilverColor extends Color {
    constructor() {
        super("silver-metallic")
    }
}

class Audi extends Model {
    constructor(color) {
        super(color)
    }

    paint() {
        return `Auto: Audi, Color: ${this.color.get()}`;
    }
}

class Bmw extends Model {
    constructor(color) {
        super(color)
    }

    paint() {
        return `Auto: BMW, Color: ${this.color.get()}`;
    }
}

const audi = new Audi(new SilverColor());
console.log(audi.paint());