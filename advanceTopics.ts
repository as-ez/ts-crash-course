let numberOrString = "Eze"

numberOrString = "Ast"
numberOrString = 24;

// UNION TYPE
let numberOrString2: string | number | undefined | null = "Eze"

numberOrString2 = 4;
numberOrString2 = null;

let array: (string | number | boolean)[] = ["", 4, false, null]

let object: {
    hello: string | number
}

///////////////////////////////////////////

let rainbowColor = "red"
rainbowColor = "orange"
rainbowColor = "pink"

let rainbowColor2: "red" | "orange" | "yellow" | "blue" = "red"
rainbowColor2 = "orange"
rainbowColor2 = "pink"


enum RainbowTypes {
    RED,
    ORANGE,
    YELLOW,
    BLUE,
    INDIGO,
    VIOLOT
}

let rainbowColor3: RainbowTypes = RainbowTypes.RED


let obj: {
    property: string
    property2?: string
} = {
    property: "",
}