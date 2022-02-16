const obj: {
    firstName: string;
    lastName: string;
    age: number;
    gender: false;
} = {
    firstName: "Eze",
    lastName: "Ast",
    age: 3000,
    gender: false
}

const obj2: {
    firstName: string;
    lastName: string;
    age: number;
    gender: false;
} = {
    firstName: "Eze",
    lastName: "Ast",
    age: 3000,
    gender: false
}

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    gender: false;
}

const obj3: Person = {
    firstName: "Eze",
    lastName: "Ast",
    age: 3000,
    gender: false
}

type PersonType = {
    firstName: string;
    lastName: string;
    age: number;
    gender: false;
}

const obj4: PersonType = {
    firstName: "Eze",
    lastName: "Ast",
    age: 3000,
    gender: false
}

type BooleanType = boolean 

const array: BooleanType = false