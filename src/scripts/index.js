class Convert {
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

function change_color() {
    document.body.style.backgroundColor = document.getElementById("background").value;
}