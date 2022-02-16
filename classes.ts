class Car {
    public model: string
    color: string
    age: number
    private peopleInPolicy: string[] = []
    private readonly manufactorDate: string = "2021-02-02"
    constructor(model, color, age){
        this.model = model;
        this.color = color;
        this.age = age;
    }
    describe(){
        console.log(`A ${this.age} year old ${this.color} ${this.model}`)
    }

    addToPolicy(name: string){
        this.peopleInPolicy.push(name)
    }

    getPolicy(){
        console.log(this.peopleInPolicy)
    }
}

const myJaguar = new Car("jaguar", "red", 2)
myJaguar.addToPolicy("Eze")
myJaguar.peopleInPolicy.push("Messi")
myJaguar.age
myJaguar.age = 8
myJaguar.getPolicy()
myJaguar.manufactorDate = "qwert"

class Vehicle {
    private peopleInPolicy: string[] = []
    private readonly manufactorDate: string = "2021-02-02"
    constructor(public model: string, public color: string, public age: number){}
    describe(){
        console.log(`A ${this.age} year old ${this.color} ${this.model}`)
    }

    addToPolicy(name: string){
        this.peopleInPolicy.push(name)
    }

    getPolicy(){
        console.log(this.peopleInPolicy)
    }
}


const myVehicule = new Car("jaguar", "red", 2)
myVehicule.addToPolicy("Eze")
myVehicule.peopleInPolicy.push("Messi")
myVehicule.age
myVehicule.age = 8
myVehicule.getPolicy()
myVehicule.manufactorDate = "qwert"
