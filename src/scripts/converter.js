class Converter {
    constructor() {
    }

    celcius(to, number) {
        if (to == "celcius") {
            return number;
        }

        if (to == "farenheit") {
            return (number * (9 / 5)) + 32;
        }
    }
    
    farenheit(to, number) {
        if (to == "farenheit") {
            return number;
        }
        if (to == "celcius") {
            return (number - 32) * (5 / 9);
        }
    }
}

module.exports = {
    Converter,
}