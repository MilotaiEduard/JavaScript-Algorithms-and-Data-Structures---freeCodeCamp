let regex1 = /^1 [0-9]{3}-[0-9]{3}-[0-9]{4}$/;
let regex2 = /^1 \([0-9]{3}\) [0-9]{3}-[0-9]{4}$/;
let regex3 = /^1\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;
let regex4 = /^1 [0-9]{3} [0-9]{3} [0-9]{4}$/;
let regex5 = /^[0-9]{10}$/;
let regex6 = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
let regex7 = /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;



const checkButton = () => {
    let value = document.getElementById("user-input").value;
    if (value.trim() == "") {
        window.alert("Please provide a phone number");
    } else if (regex1.test(value) || regex2.test(value) || regex3.test(value) || regex4.test(value) || regex5.test(value) || regex6.test(value) || regex7.test(value)) {
        let result = document.createElement("p");
        result.innerHTML = `Valid US number: ${value}`;
        document.getElementById("results-div").appendChild(result);
    } else {
        let result = document.createElement("p");
        result.innerHTML = `Invalid US number: ${value}`;
        document.getElementById("results-div").appendChild(result);
    }
}


const clearButton = () => {
    document.getElementById("results-div").innerHTML = "";
}