var myName = "Derek";
document.write("myName = ", myName, "<br/>");
    
var myAge = 40;
document.write("myAge = ", myAge, "<br/>");
    
// Variables don't have a defined type, so we can use myName to store an int
myName = 100;
document.write("myName = ", myName, "<br/>");

// We can declare variables with var, const and let
const pi = 3.1415
document.write("pi = ", pi, "<br/>");

// The following line won't work and should cause a 'Uncaught TypeError: Assignment to constant variable.' error (F12 in Chrome to debug)
//pi = 123.45;

// 'let' variables only exist within the scope of their creation.
if (true == true) {
    let let_variable = "something";
    document.write("let_variable = ", let_variable, " (inside if)<br/>");
}
// The following line won't work because 'let_variable' no longer exists. 'Uncaught ReferenceError: let_variable is not defined'
//document.write("let_variable = ", let_variable, " (outside if)<br/>");

// 'var' will create a variable that still exists outside of the scope of its creation
if (true == true) {
    var var_variable = "something else";
    document.write("var_variable = ", var_variable, " (inside if)<br/>");
}
// Unlike with 'let', this is fine!
document.write("var_variable = ", var_variable, " (outside if)<br/>");

