// Relational Operators : == != > < >= <=
// === : Equal value and type
// Logical Operators : && \\ !
 
var age = 8;
 
if ((age >= 5) && (age <= 6)){
  document.write("Go to Kindergarten<br />");
} else if (age > 18) {
  document.write("Go to College<br />");
} else {
  document.write("Go to Grade ", age - 5, "<br />");
}
 
document.write("true || false = ", true || false, "<br />");
 
document.write("!true = ", ! true, "<br />");
 
document.write("\"5\" == 5 = ", ("5" == 5), "<br />");
 
document.write("\"5\" === 5 = ", ("5" === 5), "<br />");
 
// Switch is used to match a limited number of options
switch(age) {
  case 5 : // We have fall-through (yikes!)
  case 6 :
    document.write("Go to Kindergarten<br />");
    break;
 
  case 7 :
    document.write("Go to 1st Grade<br />");
    break;
 
  default :
    document.write("Subtract 5 from your age<br />");
}
 
// Ternary Operator assigns a value based on a condition
// (condition) ? iftrue : ifFalse
var canIVote = (age >= 18) ? true : false;
 
document.write("Can I Vote : ", canIVote, "<br />");
 