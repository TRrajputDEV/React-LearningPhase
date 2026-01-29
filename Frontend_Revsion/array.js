/* some legend said in JS array aren't primitive - they are the object of Array instead.
    array are not associative arrays - only non negative to access it means..
    ** array copy operations create the Shallow copy.

    
*/

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); 

fruits[5] = 'mango'
console.log(fruits[5])
console.log(Object.keys(fruits)); // [ '0', '1', '2', '5' ] it doesnt add new value. -it says hey obj create a new property - 5 and store mango. 

console.log(typeof(fruits)); // object - - key is the array index and value we put there.

fruits.length = 10;

console.log(fruits.length);
console.log(fruits[8])
console.log(Object.keys(fruits)); 

const func = function(a, b){
    return a + b;
}

console.log(
    func(3,4)
);

console.log(typeof(func));

