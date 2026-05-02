let a=12;
a=13;
var b=14;
//primitive data types

let c="Hello World"; //string 3 kinds of string--single quotes '', double quotes "", backticks ``
let d=true; //boolean
let e=null; //null
let f=undefined; //undefined
let g=Symbol("sym"); //symbol

//reference data types
//these store references to the actual data in memory, rather than the data itself
//arrays--[]; objects--{}; functions--function(){}

let h=[1,2,3,4,5]; //array
let i={name:"John", age:30}; //object
let j=function(){ //function
    console.log("Hello World");
} 
// FUNCTION EXPRESSION

let k=function(){ //function expression
    console.log("Hello World");
}
// ARRAY METHODS AND EXPRESSIONS
let arr=[1,2,3,4,5];
arr.push(6);
                /*STRING*/ 
let str=`Hello ${c}`; //template literal
console.log(str); //Hello Hello World
//3 kinds of string--single quotes '', double quotes "", backticks ``

                /*Numbers*/
let num1=10;
let num2=20;
let sum=num1+num2;//30
let difference=num1-num2;//-10
let product=num1*num2;//200
let quotient=num1/num2;//0.5
let remainder=num1%num2;//10
//whole numbers--integers; decimal numbers--floats,everything in JavaScript is a number, there is no separate type for integers and floats
//size of numbers in JavaScript is 64-bit floating point, which means they can represent a wide range of values, but they may not be able to represent very large or very small numbers accurately due to precision limitations.
//JavaScript also has a special value called NaN (Not a Number) which is used to represent the result of an invalid mathematical operation, such as dividing by zero or taking the square root of a negative number.
//JavaScript also has a special value called Infinity which is used to represent the result of dividing a non-zero number by zero, or the result of an overflow in a mathematical operation. which is a value that is greater than any other number. It can be positive or negative depending on the sign of the non-zero number being divided by zero. it is represented as a special value in JavaScript and can be used in mathematical operations, but it is not a finite number and cannot be compared to other numbers in the usual way.
//JavaScript also has a special value called -Infinity which is used to represent the result of dividing a negative non-zero number by zero, or the result of an underflow in a mathematical operation. which is a value that is less than any other number. It can be represented as a special value in JavaScript and can be used in mathematical operations, but it is not a finite number and cannot be compared to other numbers in the usual way.
//JavaScript also has a special value called BigInt which is used to represent integers that are too large to be represented as a regular number. It is represented as a string of digits followed by the letter "n", for example: 1234567890123456789012345678901234567890n. BigInt can be used in mathematical operations, but it cannot be mixed with regular numbers without explicit conversion.
//JavaScript also has a special value called Number.MAX_VALUE which is the largest representable number in JavaScript, and Number.MIN_VALUE which is the smallest representable number in JavaScript. These values can be used to check for overflow and underflow in mathematical operations.
//JavaScript also has a special value called Number.EPSILON which is the smallest difference between two representable numbers in JavaScript. It can be used to check for precision issues in mathematical operations, especially when comparing floating-point numbers for equality.
//JavaScript also has a special value called Number.NaN which is used to represent the result of an invalid mathematical operation, such as dividing by zero or taking the square root of a negative number. It is not equal to any other value, including itself, and can be checked using the isNaN() function.
//JavaScript also has a special value called Number.POSITIVE_INFINITY which is used to represent the result of dividing a non-zero number by zero, or the result of an overflow in a mathematical operation. It is a value that is greater than any other number and can be represented as a special value in JavaScript. It can be used in mathematical operations, but it is not a finite number and cannot be compared to other numbers in the usual way.
//JavaScript also has a special value called Number.NEGATIVE_INFINITY which is used to represent the result of dividing a negative non-zero number by zero, or the result of an underflow in a mathematical operation. It is a value that is less than any other number and can be represented as a special value in JavaScript. It can be used in mathematical operations, but it is not a finite number and cannot be compared to other numbers in the usual way.
//JavaScript also has a special value called Number.MIN_SAFE_INTEGER which is the smallest integer that can be safely represented in JavaScript, and Number.MAX_SAFE_INTEGER which is the largest integer that can be safely represented in JavaScript. These values can be used to check for overflow and underflow when working with integers in JavaScript.
                /*booleans*/
let bool1=true;
let bool2=false;
//Booleans are often used in conditional statements and loops to control the flow of a program. They can also be used in logical operations, such as AND (&&), OR (||), and NOT (!), to combine or negate boolean values. In JavaScript, any value can be evaluated as a boolean in a boolean context, with certain values being considered "falsy" (such as 0, "", null, undefined, NaN) and all other values being considered "truthy".
                /*null*/
let nullValue=null;
//null is a special value in JavaScript that represents the absence of any object value. It is often used to indicate that a variable has no value or that an object property is intentionally empty. It is important to note that null is different from undefined, which represents the absence of a value for a variable that has not been assigned a value. In JavaScript, null is considered an object type, and it can be assigned to variables or used as a value in expressions.
                /*undefined*/
let undefinedValue=undefined;
//undefined is a special value in JavaScript that represents the absence of a value for a variable that has not been assigned a value. It is often used to indicate that a variable has not been initialized or that a function does not return a value. It is important to note that undefined is different from null, which represents the absence of any object value. In JavaScript, undefined is considered a primitive type, and it can be assigned to variables or used as a value in expressions.
//this occurs when a variable is declared but not assigned a value, or when a function does not return a value. It can also occur when trying to access a property of an object that does not exist, or when trying to access an array element that is out of bounds. In JavaScript, it is important to check for undefined values before using them in expressions or operations to avoid errors and unexpected behavior. where as null is often used to indicate that a variable has no value or that an object property is intentionally empty, undefined is used to indicate that a variable has not been initialized or that a function does not return a value. It is important to understand the difference between null and undefined in JavaScript to avoid confusion and ensure that your code behaves as expected.
                /*symbols*/
let symbol1=Symbol("sym1");
let symbol2=Symbol("sym2");
//Symbols are a unique and immutable primitive data type in JavaScript that can be used as keys for object properties. They are created using the Symbol() function, which takes an optional description as an argument. Each time you call Symbol(), it returns a new, unique symbol value. Symbols are often used to create private properties or to avoid naming conflicts in objects, as they cannot be accessed or modified directly like other object properties. They can also be used in conjunction with the well-known symbols provided by JavaScript, such as Symbol.iterator and Symbol.toStringTag, to customize the behavior of objects in certain contexts.
//Symbols are not enumerable, which means they do not show up in for...in loops or Object.keys() calls. However, they can be accessed using the Object.getOwnPropertySymbols() method. Additionally, symbols can be used as keys in a Map object, which allows for more flexible and efficient data structures in JavaScript.
//In summary, symbols are a powerful and unique data type in JavaScript that can be used to create private properties and avoid naming conflicts in objects. They are created using the Symbol() function and are immutable and unique, making them a useful tool for developers when working with complex data structures and object-oriented programming in JavaScript.
symbol1===symbol2; //false, because each symbol is unique and immutable, even if they have the same description.
//Dynamic typing -> in js you can change the type of a variable at runtime, which can lead to unexpected behavior if not used carefully. For example, you can assign a string value to a variable that was previously assigned a number value, and vice versa. This can lead to type coercion, where JavaScript automatically converts one type to another in order to perform an operation. It is important to be aware of this behavior and to use type checking and validation when necessary to avoid bugs and errors in your code.
//we can change the var type anytime in the future so use static typeing languages like TypeScript to avoid this issue and catch type-related errors at compile time rather than runtime. Static typing can help improve code readability, maintainability, and reduce the likelihood of bugs caused by type-related issues. However, it also requires more upfront effort to define types and can be less flexible than dynamic typing in certain situations. Ultimately, the choice between dynamic and static typing depends on the specific needs and preferences of the project and development team.
                    /*Type coercion*/
let num3=10;
                        /*Discount*/
function discount(dis){
    return function(price){
        return price-price*(dis/100);
    };
}
let ten=discount(10);
let twenty=discount(20);
console.log(ten(200));
console.log(twenty(200));
                        /*Arrays*/
//there are many things like for-each,filter,map,sort,reduce,find,findIndex,every,some,includes,indexOf,lastIndexOf,push,pop,shift,unshift,slice,splice,concat,join,reverse,fill,copyWithin,toString,valueOf,length
//foreach
let arr1=[1,2,3,4,5];
arr1.forEach(function(element){
    console.log(element);
});
//filter
let arr2=[1,2,3,4,5];
let filteredArr=arr2.filter(function(element){
    return element>3;
});
console.log(filteredArr); //[4,5]
//map
let arr3=[1,2,3,4,5];
let mappedArr=arr3.map(function(element){
    return element*2;
});
console.log(mappedArr); //[2,4,6,8,10]
//sort
let arr4=[5,3,1,4,2];
arr4.sort(function(a,b){
    return a-b;
});
console.log(arr4); //[1,2,3,4,5]
//reduce
let arr5=[1,2,3,4,5];
let reducedArr=arr5.reduce(function(accumulator,element){
    return accumulator+element;
},0);
console.log(reducedArr); //15
//find
let arr6=[1,2,3,4,5];
let foundElement=arr6.find(function(element){
    return element>3;
});
console.log(foundElement); //4          
//findIndex
let arr7=[1,2,3,4,5];
let foundIndex=arr7.findIndex(function(element){
    return element>3;
});
console.log(foundIndex); //3
//every
let arr8=[1,2,3,4,5];
let everyElement=arr8.every(function(element){
    return element>0;
});
console.log(everyElement); //true
//some
let arr9=[1,2,3,4,5];   
let someElement=arr9.some(function(element){
    return element>3;
});
console.log(someElement); //true
//includes
let arr10=[1,2,3,4,5];  
let includesElement=arr10.includes(3);
console.log(includesElement); //true        
//indexOf
let arr11=[1,2,3,4,5];  
let indexOfElement=arr11.indexOf(3);
console.log(indexOfElement); //2
//lastIndexOf
let arr12=[1,2,3,4,5,3];  
let lastIndexOfElement=arr12.lastIndexOf(3);
console.log(lastIndexOfElement); //5        
//push
let arr13=[1,2,3,4,5];  
arr13.push(6);
console.log(arr13); //[1,2,3,4,5,6]     
//pop
let arr14=[1,2,3,4,5];  
arr14.pop();
console.log(arr14); //[1,2,3,4]
//shift
let arr15=[1,2,3,4,5];      
arr15.shift();
console.log(arr15); //[2,3,4,5]                         
//unshift
let arr16=[1,2,3,4,5];  
arr16.unshift(0);
console.log(arr16);
//[0,1,2,3,4,5]
//slice
let arr17=[1,2,3,4,5];  
let slicedArr=arr17.slice(1,4);
console.log(slicedArr);
//[2,3,4]
//splice
let arr18=[1,2,3,4,5];
arr18.splice(2,1);
console.log(arr18);
//[1,2,4,5]
//concat
let arr19=[1,2,3];
let arr20=[4,5,6];
let concatenatedArr=arr19.concat(arr20);
console.log(concatenatedArr);
//[1,2,3,4,5,6]
//join
let arr21=[1,2,3,4,5];  
let joinedArr=arr21.join("-");
console.log(joinedArr);
//"1-2-3-4-5"
//reverse
let arr22=[1,2,3,4,5];  
arr22.reverse();
console.log(arr22);
//[5,4,3,2,1]   
