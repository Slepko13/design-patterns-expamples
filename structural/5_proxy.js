//webDev 

class carAccess {
    open() {
        console.log('Opening car door');
    }

    close() {
        console.log('Closing car door')
    }
}

class SecuritySystem {
    constructor(door) {
        this.door = door;
    }

    open(password) {
        if (this.authenticate(password)) {
            this.door.open();
        } else {
            console.log('Access denied!');
        }
    }

    authenticate(password) {
        return password === 'Ilon';
    }

    close() {
        this.door.close();
    }
}

const door = new SecuritySystem(new carAccess());
door.open('Lack');
door.open('Ilon');
door.close();