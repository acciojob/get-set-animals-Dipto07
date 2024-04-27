//complete this code
class Animal {

	constructor(species) {
        this._species = species;
    }

    get species() {
        return this._species;
    }

    makeSound() {
        console.log(`The ${this._species} makes a sound`);
    }
}

class Dog extends Animal {

	 constructor(species) {
        super(species);
    }

    bark() {
        console.log("woof");
    }
}
}

class Cat extends Animal {

	 constructor(species) {
        super(species);
    }

    purr() {
        console.log("purr");
    }
}

describe('Animal Classes', () => {
    beforeEach(() => {
        cy.visit(baseUrl + "/main.html");
    });

    it('should make sound and bark', () => {
        cy.window().then(win => {
            const DogClass = win.Dog;
            const species = "Golden Retriever";
            const myDog = new DogClass(species);
            cy.stub(win.console, "log").as("consoleLog");
            myDog.makeSound();
            cy.get("@consoleLog").should("be.calledWith", `The ${species} makes a sound`);
            myDog.bark();
            cy.get("@consoleLog").should("be.calledWith", `woof`);
        });
    });
});
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
