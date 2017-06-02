// Give a response to user input. ONLY WORKS WHEN EXECUTED FROM A TERMINAL WINDOW

var rl = require("readline");
var prompts = rl.createInterface({input: process.stdin,  output: process.stdout});
prompts.question("Enter experience level: ", function experience(){
    var result = "";
    if (experience < 5){
        result = "You're too junior";
    } else {
        result = "You're hired!";
    }
    console.log(result);
    process.exit();
});
