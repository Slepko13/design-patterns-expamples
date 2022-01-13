class AutoNews {
    constructor() {
        this.news = '';
        this.actions = [];
    }

    setNews(text) {
        this.news = text;
        this.notifyAll();
    }

    notifyAll() {
        return this.actions.forEach(subs => subs.inform(this));
    }

    register(observer) {
        this.actions.push(observer);
    }

    unregister(observer) {
        this.actions = this.actions.filter(el => !(el instanceof observer));
    }
}

class Mykola {
    constructor() {
        this.age = 41
    }
    inform(message) {
        console.log(`Mykola has been informed about: ${message.news}`);
    }
}

class Olena {
    inform(message) {
        console.log(`Olena has been informed about: ${message.news}`);
    }
}

const autoNews = new AutoNews();
autoNews.register(new Mykola());
autoNews.register(new Olena());
autoNews.setNews('Hello world!!!');
console.log(autoNews.actions[0]);