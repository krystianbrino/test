var age = parseInt(prompt("How old are you?"));

console.log("Only +18 can access the website");

if(age >= 18) {
    alert("Welcome to the website");
}
else {
    alert("You're not allowed to access to the website");
}