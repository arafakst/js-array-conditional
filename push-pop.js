var numbers = [12, 14, 78, 56];
//use push to add element to an array as the last element
// numbers.push(63);
//console.log(numbers);
var friends = ['balam', 'habib', 'kalam'];
friends.push('gelam');
friends.push('pailam');
// console.log(friends);

//use pop to get last element
console.log(numbers);
var element = numbers.pop();
console.log(numbers);
console.log(element);


// // Add to the start of an array
Array.unshift(element);

// Add to the end of an array
Array.push(element);

// Add to a specified location
Array.splice(start_position, 0, new_element...);

// Add with concat method without mutating original array
let newArray = [].concat(Array, element);