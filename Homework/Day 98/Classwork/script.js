class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return `${this.name} makes a sound.`;
    }

}
class Dinosaur extends Animal {
     constructor(name, period) {
        super(name)
        this.period = period
     }
     roar(){
        return `${this.name} roars from the ${this.period} period!`;
     }

    }
    
const dino = new Dinosaur("T-Rex", "Cretaceous");
console.log(dino.speak()); 
console.log(dino.roar());