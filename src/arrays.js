// Arrays have variable sizes and can contain multiple types in JS
var tomSmith = ["Tom Smith", "123 Main", 120.50];
 
// Access first array item
document.write("1st State : ", tomSmith[0], "<br />");
 
// Add an item
tomSmith[3] = "tsmith@aol.com";
 
// Overwrite index 2 and fit everything else after index 2 without
// overwriting (Put 0 for second parameter to not overwrite)
tomSmith.splice(2, 1, "Pittsburgh", "PA");
 
// Delete the 4th index item
tomSmith.splice(4,1);
 
// Convert an array into a string (Also use toString())
document.write("Array : ", tomSmith.valueOf(), "<br />");
 
// Convert an array into a string with separator
document.write("Array : ", tomSmith.join(", "), "<br />");
 
// Delete an index
delete tomSmith[3];
 
// Sort an array (reverse() for reverse sort)
// Works for sorting strings
tomSmith.sort();
 
// Sort numbers
var numbers = [4,3,9,1,20,43];
 
// Descending sort return y - x
numbers.sort(function(x,y){ return x - y });
document.write("Num Array : ", numbers.toString(), "<br />");
 
// Combine arrays
var combinedArray = numbers.concat(tomSmith);
 
// Remove the last item
tomSmith.pop();
 
// Add items to the end
tomSmith.push("555-1212", "US");
 
// Deletes the first item
tomSmith.shift();
 
// Adds item to the first index
tomSmith.unshift("Tom Smith");
 
for (var i = 0; i < tomSmith.length; i++) {
  document.write(tomSmith[i], "<br />");
}

// Lots of neat things can be done with the spread ('...') operator:
let nums1 = [1,2,3];
let nums2 = [4,5,6];
let nums = [...nums1, ...nums2];
document.write("nums : ", nums, "<br />");

// We can make a (deep) copy..
let numsCopy = [...nums];
document.write("numsCopy : ", numsCopy, "<br />");

// We can concatonate with it..
let evenMoreNums = [...nums, 7, 8, 9, 10];
document.write("evenMoreNums : ", evenMoreNums, "<br />");
