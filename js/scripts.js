function saySomething(whatToSay) {
    window.alert(whatToSay);
}

function add(number1 , number2) {
    return number1 + number2;
}

// saySomething("hi");

// // add(3, 5);

// const result = add(3, 5);
// window.alert(result);

// const outputText = "The sum is " + result + ".";
// saySomething(outputText);

saySomething("The sum is " + add(3, 5) + ".");
