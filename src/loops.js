// while loops as long as a condition is true
var i = 1;
while (i <= 10){
  document.write(i, ", ");
  i++;
}
document.write("<br />");
 
// do while is used when you must go through the loop at least once
do{
  var guess = prompt("Guess a number between 1 and 20");
} while(guess != 15)
 
alert("You guessed it! 15 was the number");
 
// for is a self contained looping structure
for(j = 0; j <= 20; j++){
 
  // If j is divisible by 2 then skip back to the top of the loop
  if((j % 2) == 0){
    continue;
  }
 
  // If j is equal to 15 break completely out of the loop
  if(j == 15){
    break;
  }
  document.write(j, ", ");
}
document.write("<br />");
 
var customer = {name : "Bob Thomas", address : "123 Main", balance : 50.50};
 
// for in cycles through an enumerable properties of an object
for(k in customer) {
  document.write(customer[k], "<br />");
}

// Doesn't appear to be a 'for-each' construct, but there is a property on arrays..
var some_list = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
some_list.forEach(function(value) {
    document.write(value, "<br />");
})

