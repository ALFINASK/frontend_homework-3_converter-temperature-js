function emptyForm() {
    document.getElementById("temperature").value = "";
    document.getElementById("result").value = "";
}

const converter = new Converter
function convert(){
    if (document.getElementById("from").value == "celcius") {
        const result = converter.celcius(
            document.getElementById("to").value,
            Number(document.getElementById("temperature").value)
        );

        document.getElementById("result").value = result;
    } else if (document.getElementById("from").value == "farenheit"){
        const result = converter.farenheit(
            document.getElementById("to").value,
            Number(document.getElementById("temperature").value)
        );

        document.getElementById("result").value = result;
    }
}

function change_color() {
    document.body.style.backgroundColor = document.getElementById("background").value;
}