const convert = () => {

    let input = document.getElementById("number").value;

    if (input === "") {
        document.getElementById("output").classList.add("error");
        document.getElementById("output").classList.remove("success");
        document.getElementById("output-text").innerHTML = "Please enter a valid number";
    } else if (input <= 0) {
        document.getElementById("output").classList.add("error");
        document.getElementById("output").classList.remove("success");
        document.getElementById("output-text").innerHTML = "Please enter a number greater than or equal to 1";
    } else if (input > 3999) {
        document.getElementById("output").classList.add("error");
        document.getElementById("output").classList.remove("success");
        document.getElementById("output-text").innerHTML = "Please enter a number less than or equal to 3999";
    } else {
        document.getElementById("output").classList.add("success");
        document.getElementById("output").classList.remove("error");
        document.getElementById("output-text").innerHTML = convertToRoman(input);
    }
}

const convertToRoman = (num) => {
    let romanNumeral = "";
    const romanNumerals = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I"
    };

    for (let value of Object.keys(romanNumerals).map(Number).sort((a, b) => b - a)) {
        while (num >= value) {
            romanNumeral += romanNumerals[value];
            num -= value;
        }
    }

    return romanNumeral;
}