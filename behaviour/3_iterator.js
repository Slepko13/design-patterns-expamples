//webDev

class Iterator {
    constructor(elements) {
        this.elements = elements;
        this.index = 0;
    }

    next() {
        return this.elements[this.index++];
    }

    hasNext() {

        return this.index < this.elements.length
    }

    getIndex() {
        return this.index;
    }
}

const auto = new Iterator(["audi", "bmw", "opel", "fiat"]);

while (auto.hasNext()) {
    console.log(auto.getIndex(), auto.next(), auto.getIndex());
}