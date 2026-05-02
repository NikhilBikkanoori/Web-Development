// ========================================================================
//                  JAVASCRIPT DETAILED GUIDE
// ========================================================================
// This file covers all major JavaScript topics with detailed explanations
// and examples. Topics already briefly covered in script.js are expanded
// here, and new topics are introduced as well.
// ========================================================================


                    /*=========================*/
                    /* 1. VARIABLES & SCOPE    */
                    /*=========================*/

//var, let, const -- three ways to declare variables in JavaScript
//var is function-scoped, let and const are block-scoped

var x=10; //function-scoped -- accessible anywhere inside the function it was declared in
let y=20; //block-scoped -- accessible only inside the block {} it was declared in
const z=30; //block-scoped + cannot be reassigned after declaration

//const does NOT mean the value is immutable -- it means the variable binding cannot change
const obj={name:"John"};
obj.name="Jane"; //this is ALLOWED because we are changing the property, not the binding
//obj={name:"Jane"}; //this would throw an ERROR because we are trying to reassign the binding

//SCOPE -- where variables are accessible in your code
//there are 3 types of scope in JavaScript:
//1. Global Scope -- variables declared outside any function or block are in the global scope and accessible everywhere
//2. Function Scope -- variables declared inside a function using var are accessible only inside that function
//3. Block Scope -- variables declared inside a block {} using let or const are accessible only inside that block

var globalVar="I am global"; //global scope

function scopeExample(){
    var functionVar="I am function-scoped"; //function scope
    if(true){
        let blockVar="I am block-scoped"; //block scope
        var stillFunctionScoped="I leak out of the block"; //function scope because var ignores block boundaries
        console.log(blockVar); //works
    }
    //console.log(blockVar); //ERROR -- blockVar is not accessible here
    console.log(stillFunctionScoped); //works -- var ignores the if-block boundary
    console.log(functionVar); //works
}
scopeExample();


                    /*=========================*/
                    /* 2. HOISTING             */
                    /*=========================*/

//Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution
//Only the DECLARATION is hoisted, not the INITIALIZATION

console.log(hoistedVar); //undefined -- the declaration is hoisted but the value is not
var hoistedVar="I am hoisted";
console.log(hoistedVar); //"I am hoisted"

//let and const are also hoisted but they are in a "Temporal Dead Zone" (TDZ) from the start of the block until the declaration is encountered
//accessing them before the declaration throws a ReferenceError
//console.log(hoistedLet); //ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet="I am in TDZ until this line";

//Function declarations are fully hoisted -- both the name and the body
hoistedFunction(); //works because function declarations are fully hoisted
function hoistedFunction(){
    console.log("I am fully hoisted!");
}

//Function expressions are NOT fully hoisted -- only the variable name is hoisted
//notHoisted(); //TypeError: notHoisted is not a function
var notHoisted=function(){
    console.log("I am NOT fully hoisted");
};


                    /*================================*/
                    /* 3. TYPE COERCION (DETAILED)    */
                    /*================================*/

//Type coercion is when JavaScript automatically converts one type to another
//There are two kinds: Implicit (automatic) and Explicit (manual)

                /*Implicit Coercion*/
//JavaScript does this automatically when operators are used with different types

//String coercion -- when + is used with a string, other values are converted to strings
console.log("5"+3); //"53" -- number 3 is converted to string "3"
console.log("5"+true); //"5true" -- boolean true is converted to string "true"
console.log("5"+null); //"5null" -- null is converted to string "null"
console.log("5"+undefined); //"5undefined" -- undefined is converted to string "undefined"

//Number coercion -- when arithmetic operators (-, *, /, %) are used, values are converted to numbers
console.log("5"-3); //2 -- string "5" is converted to number 5
console.log("5"*3); //15
console.log("5"/2); //2.5
console.log(true+1); //2 -- true is converted to 1
console.log(false+1); //1 -- false is converted to 0
console.log(null+1); //1 -- null is converted to 0
console.log(undefined+1); //NaN -- undefined cannot be converted to a valid number

//Boolean coercion -- in a boolean context (if statements, logical operators), values are converted to true or false
//Falsy values: false, 0, -0, 0n (BigInt zero), "", null, undefined, NaN
//Truthy values: everything else (including empty arrays [], empty objects {}, "0", "false")
if(""){
    console.log("this will NOT run"); //empty string is falsy
}
if("hello"){
    console.log("this WILL run"); //non-empty string is truthy
}
if([]){
    console.log("this WILL run"); //empty array is truthy (common gotcha!)
}

                /*Explicit Coercion*/
//We manually convert types using built-in functions

//To String
let numToStr=String(123); //"123"
let boolToStr=String(true); //"true"
let numToStr2=(123).toString(); //"123"

//To Number
let strToNum=Number("123"); //123
let boolToNum=Number(true); //1
let nullToNum=Number(null); //0
let undefinedToNum=Number(undefined); //NaN
let strToNum2=parseInt("123.45"); //123 -- parses an integer
let strToNum3=parseFloat("123.45"); //123.45 -- parses a float

//To Boolean
let numToBool=Boolean(0); //false
let strToBool=Boolean(""); //false
let strToBool2=Boolean("hello"); //true
let arrToBool=Boolean([]); //true
//shorthand: use !! (double NOT operator)
let shorthandBool=!!"hello"; //true
let shorthandBool2=!!0; //false


                    /*===============================*/
                    /* 4. COMPARISON OPERATORS       */
                    /*===============================*/

//== (loose equality) -- compares values after type coercion
//=== (strict equality) -- compares values AND types without coercion

console.log(5=="5"); //true -- string "5" is coerced to number 5
console.log(5==="5"); //false -- different types (number vs string)
console.log(null==undefined); //true -- special rule in JavaScript
console.log(null===undefined); //false -- different types
console.log(NaN==NaN); //false -- NaN is not equal to anything, including itself
console.log(NaN===NaN); //false -- same reason
//to check for NaN, use Number.isNaN() or isNaN()
console.log(Number.isNaN(NaN)); //true

//!= (loose inequality) -- opposite of ==
//!== (strict inequality) -- opposite of ===
console.log(5!="5"); //false
console.log(5!=="5"); //true

//Other comparison operators
// > (greater than), < (less than), >= (greater than or equal), <= (less than or equal)
console.log(5>3); //true
console.log("apple"<"banana"); //true -- compared alphabetically using Unicode values


                    /*========================================*/
                    /* 5. CONDITIONAL STATEMENTS              */
                    /*========================================*/

                /*if / else if / else*/
let age=20;
if(age>=18){
    console.log("You are an adult");
}else if(age>=13){
    console.log("You are a teenager");
}else{
    console.log("You are a child");
}

                /*Ternary Operator*/
//shorthand for if/else -- condition ? valueIfTrue : valueIfFalse
let canVote=age>=18 ? "Yes" : "No";
console.log(canVote); //"Yes"

//nested ternary (use sparingly -- can reduce readability)
let category=age>=18 ? "Adult" : age>=13 ? "Teen" : "Child";
console.log(category); //"Adult"

                /*Switch Statement*/
//used when you have multiple conditions based on a single value
let day="Monday";
switch(day){
    case "Monday":
        console.log("Start of the work week");
        break; //break prevents fall-through to the next case
    case "Friday":
        console.log("End of the work week");
        break;
    case "Saturday":
    case "Sunday": //multiple cases can share the same block
        console.log("Weekend!");
        break;
    default: //runs if no case matches
        console.log("Midweek");
}

                /*Nullish Coalescing Operator (??)*/
//returns the right-hand operand when the left-hand operand is null or undefined (NOT for other falsy values)
let userName=null;
let displayName=userName ?? "Guest";
console.log(displayName); //"Guest"

let count=0;
let displayCount=count ?? 10; //0 -- because 0 is NOT null or undefined
console.log(displayCount); //0
//compare with || (OR operator) which treats all falsy values the same
let displayCount2=count || 10; //10 -- because 0 is falsy
console.log(displayCount2); //10

                /*Optional Chaining (?.)*/
//safely access deeply nested properties without checking each level
let user={
    name:"John",
    address:{
        city:"New York"
    }
};
console.log(user.address?.city); //"New York"
console.log(user.phone?.number); //undefined -- does NOT throw an error
//without optional chaining, user.phone.number would throw a TypeError


                    /*=========================*/
                    /* 6. LOOPS                */
                    /*=========================*/

                /*for loop*/
//the classic loop -- has initialization, condition, and increment
for(let i=0;i<5;i++){
    console.log(i); //0,1,2,3,4
}

                /*while loop*/
//runs as long as the condition is true -- check condition BEFORE each iteration
let counter=0;
while(counter<5){
    console.log(counter); //0,1,2,3,4
    counter++;
}

                /*do...while loop*/
//runs at least once -- check condition AFTER each iteration
let counter2=0;
do{
    console.log(counter2); //0,1,2,3,4
    counter2++;
}while(counter2<5);

                /*for...in loop*/
//iterates over the KEYS (property names) of an object
let person={name:"John",age:30,city:"New York"};
for(let key in person){
    console.log(key+": "+person[key]); //name: John, age: 30, city: New York
}
//can also be used on arrays but NOT recommended because it iterates over indices as strings and may include inherited properties

                /*for...of loop*/
//iterates over the VALUES of an iterable (arrays, strings, maps, sets, etc.)
let colors=["red","green","blue"];
for(let color of colors){
    console.log(color); //red, green, blue
}
//works on strings too
for(let char of "Hello"){
    console.log(char); //H, e, l, l, o
}

                /*break and continue*/
//break -- exits the loop entirely
for(let i=0;i<10;i++){
    if(i===5) break;
    console.log(i); //0,1,2,3,4
}
//continue -- skips the current iteration and moves to the next
for(let i=0;i<10;i++){
    if(i%2===0) continue;
    console.log(i); //1,3,5,7,9
}

                /*Labeled Statements*/
//used with break and continue to control nested loops
outerLoop:
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        if(i===1 && j===1) break outerLoop; //breaks out of BOTH loops
        console.log(i,j); //0,0 | 0,1 | 0,2 | 1,0
    }
}


                    /*=========================*/
                    /* 7. FUNCTIONS (DETAILED) */
                    /*=========================*/

                /*Function Declaration*/
//hoisted -- can be called before it's defined in the code
function greet(name){
    return "Hello, "+name+"!";
}
console.log(greet("Alice")); //"Hello, Alice!"

                /*Function Expression*/
//NOT hoisted -- stored in a variable
let greet2=function(name){
    return "Hello, "+name+"!";
};
console.log(greet2("Bob")); //"Hello, Bob!"

                /*Arrow Functions (ES6)*/
//shorter syntax for function expressions -- introduced in ES6
//they do NOT have their own 'this', 'arguments', 'super', or 'new.target'
let greet3=(name)=>{
    return "Hello, "+name+"!";
};
//if there's only one parameter, parentheses are optional
let greet4=name=>"Hello, "+name+"!"; //implicit return for single expressions
console.log(greet4("Charlie")); //"Hello, Charlie!"

//arrow function with no parameters
let sayHi=()=>"Hi!";
console.log(sayHi()); //"Hi!"

//arrow function with multiple parameters
let add=(a,b)=>a+b;
console.log(add(5,3)); //8

                /*Default Parameters*/
//you can set default values for function parameters
function greetWithDefault(name="World"){
    return "Hello, "+name+"!";
}
console.log(greetWithDefault()); //"Hello, World!"
console.log(greetWithDefault("Dave")); //"Hello, Dave!"

                /*Rest Parameters (...)*/
//collects all remaining arguments into an array
function sumAll(...numbers){
    return numbers.reduce((acc,num)=>acc+num,0);
}
console.log(sumAll(1,2,3,4,5)); //15

                /*IIFE (Immediately Invoked Function Expression)*/
//a function that runs immediately after it's defined
(function(){
    console.log("I run immediately!");
})();
//used to create a private scope and avoid polluting the global namespace

                /*Callback Functions*/
//a function passed as an argument to another function
function processUserInput(callback){
    let name="Eve";
    callback(name);
}
processUserInput(function(name){
    console.log("Hello, "+name+"!"); //"Hello, Eve!"
});
//arrow function version
processUserInput((name)=>{
    console.log("Hi, "+name+"!"); //"Hi, Eve!"
});

                /*Higher-Order Functions*/
//a function that takes a function as an argument or returns a function
//already seen in script.js with the discount() example
//another example -- a function that creates multiplier functions
function createMultiplier(multiplier){
    return function(num){
        return num*multiplier;
    };
}
let double=createMultiplier(2);
let triple=createMultiplier(3);
console.log(double(5)); //10
console.log(triple(5)); //15

                /*Recursion*/
//a function that calls itself until a base condition is met
function factorial(n){
    if(n<=1) return 1; //base case
    return n*factorial(n-1); //recursive case
}
console.log(factorial(5)); //120 (5*4*3*2*1)

//another example -- fibonacci sequence
function fibonacci(n){
    if(n<=0) return 0;
    if(n===1) return 1;
    return fibonacci(n-1)+fibonacci(n-2);
}
console.log(fibonacci(7)); //13 (0,1,1,2,3,5,8,13)


                    /*=========================*/
                    /* 8. CLOSURES (DETAILED)  */
                    /*=========================*/

//A closure is a function that remembers the variables from the scope it was created in, even after that scope has finished executing
//Closures are created every time a function is created -- they "close over" their environment
//This is one of the most powerful and commonly misunderstood concepts in JavaScript

//Example 1 -- basic closure
function outerFunction(){
    let outerVar="I am from outer";
    function innerFunction(){
        console.log(outerVar); //innerFunction has access to outerVar even after outerFunction returns
    }
    return innerFunction;
}
let closureFunc=outerFunction();
closureFunc(); //"I am from outer" -- outerVar is still accessible because of the closure

//Example 2 -- closure with a counter (private state)
function createCounter(){
    let count=0; //private variable -- cannot be accessed from outside
    return{
        increment:function(){
            count++;
            return count;
        },
        decrement:function(){
            count--;
            return count;
        },
        getCount:function(){
            return count;
        }
    };
}
let myCounter=createCounter();
console.log(myCounter.increment()); //1
console.log(myCounter.increment()); //2
console.log(myCounter.decrement()); //1
console.log(myCounter.getCount()); //1
//console.log(count); //ERROR -- count is not accessible from outside

//Example 3 -- common closure pitfall with var in loops
//this is why using let in loops is important
for(var i=0;i<3;i++){
    setTimeout(function(){
        console.log("var loop: "+i); //prints 3, 3, 3 -- because var is function-scoped and i is shared
    },100);
}
//fix using let
for(let i=0;i<3;i++){
    setTimeout(function(){
        console.log("let loop: "+i); //prints 0, 1, 2 -- because let creates a new scope for each iteration
    },100);
}


                    /*=========================*/
                    /* 9. OBJECTS (DETAILED)   */
                    /*=========================*/

                /*Object Creation*/
//1. Object literal
let car={
    brand:"Toyota",
    model:"Camry",
    year:2024,
    start:function(){
        console.log(this.brand+" started");
    }
};
car.start(); //"Toyota started"

//2. Object constructor
let car2=new Object();
car2.brand="Honda";
car2.model="Civic";
car2.year=2024;

//3. Object.create() -- creates a new object with a specified prototype
let carPrototype={
    start:function(){
        console.log(this.brand+" started");
    }
};
let car3=Object.create(carPrototype);
car3.brand="Ford";
car3.start(); //"Ford started"

                /*Shorthand Properties (ES6)*/
let brand="Tesla";
let model="Model 3";
let car4={brand,model}; //same as {brand: brand, model: model}
console.log(car4); //{brand: "Tesla", model: "Model 3"}

                /*Computed Property Names (ES6)*/
let propName="color";
let car5={
    [propName]:"Red" //the key is the value of propName
};
console.log(car5.color); //"Red"

                /*Shorthand Methods (ES6)*/
let car6={
    brand:"BMW",
    start(){ //shorthand for start: function(){}
        console.log(this.brand+" started");
    }
};
car6.start(); //"BMW started"

                /*Object Destructuring (ES6)*/
//extract properties from objects into variables
let {name:personName,age:personAge}=person; //renaming during destructuring
console.log(personName); //"John"
console.log(personAge); //30

//with default values
let {name:n1,age:a1,country="USA"}=person;
console.log(country); //"USA" -- default value because person doesn't have a country property

//nested destructuring
let company={
    name:"TechCorp",
    address:{
        city:"San Francisco",
        state:"CA"
    }
};
let {address:{city,state}}=company;
console.log(city); //"San Francisco"
console.log(state); //"CA"

                /*Object Methods*/
//Object.keys() -- returns an array of keys
console.log(Object.keys(person)); //["name", "age", "city"]

//Object.values() -- returns an array of values
console.log(Object.values(person)); //["John", 30, "New York"]

//Object.entries() -- returns an array of [key, value] pairs
console.log(Object.entries(person)); //[["name","John"],["age",30],["city","New York"]]

//Object.assign() -- copies properties from source objects to a target object
let target={a:1};
let source={b:2,c:3};
Object.assign(target,source);
console.log(target); //{a:1, b:2, c:3}

//Object.freeze() -- prevents any changes to an object (properties cannot be added, removed, or modified)
let frozenObj=Object.freeze({name:"Frozen"});
frozenObj.name="Changed"; //silently fails (or throws in strict mode)
console.log(frozenObj.name); //"Frozen"

//Object.seal() -- prevents adding or removing properties, but existing properties can be modified
let sealedObj=Object.seal({name:"Sealed"});
sealedObj.name="Changed"; //this works
sealedObj.newProp="New"; //silently fails
console.log(sealedObj.name); //"Changed"

                /*Spread Operator with Objects (ES6)*/
let original={a:1,b:2};
let copy={...original,c:3}; //creates a shallow copy and adds a new property
console.log(copy); //{a:1, b:2, c:3}

//merging objects
let obj1={a:1,b:2};
let obj2={b:3,c:4}; //b will be overwritten
let merged={...obj1,...obj2};
console.log(merged); //{a:1, b:3, c:4}


                    /*==============================*/
                    /* 10. 'this' KEYWORD           */
                    /*==============================*/

//the 'this' keyword refers to the object that is executing the current function
//its value depends on HOW and WHERE the function is called

//1. In the global context -- 'this' refers to the global object (window in browsers, global in Node.js)
console.log(this); //in a browser: Window object

//2. In a regular function -- 'this' refers to the global object (or undefined in strict mode)
function showThis(){
    console.log(this); //Window (or undefined in strict mode)
}

//3. In a method -- 'this' refers to the object the method belongs to
let person2={
    name:"Alice",
    greet:function(){
        console.log(this.name); //"Alice" -- this refers to person2
    }
};
person2.greet();

//4. In an arrow function -- 'this' is inherited from the enclosing scope (lexical this)
let person3={
    name:"Bob",
    greet:function(){
        let inner=()=>{
            console.log(this.name); //"Bob" -- arrow function inherits this from greet()
        };
        inner();
    }
};
person3.greet();

//5. call(), apply(), bind() -- explicitly set the value of 'this'
function introduce(greeting){
    console.log(greeting+", I am "+this.name);
}
let person4={name:"Charlie"};
introduce.call(person4,"Hello"); //"Hello, I am Charlie" -- call passes arguments individually
introduce.apply(person4,["Hi"]); //"Hi, I am Charlie" -- apply passes arguments as an array
let boundIntroduce=introduce.bind(person4); //bind returns a new function with 'this' permanently set
boundIntroduce("Hey"); //"Hey, I am Charlie"


                    /*=========================*/
                    /* 11. CLASSES (ES6)       */
                    /*=========================*/

//Classes are syntactic sugar over JavaScript's prototype-based inheritance
//they provide a cleaner way to create objects and handle inheritance

class Animal{
    constructor(name,sound){
        this.name=name; //instance property
        this.sound=sound;
    }
    speak(){ //method -- added to the prototype
        console.log(this.name+" says "+this.sound);
    }
    static info(){ //static method -- called on the class itself, not on instances
        console.log("Animals are living beings");
    }
}
let dog=new Animal("Dog","Woof");
dog.speak(); //"Dog says Woof"
Animal.info(); //"Animals are living beings"
//dog.info(); //ERROR -- static methods cannot be called on instances

                /*Inheritance with extends*/
class Dog extends Animal{
    constructor(name,breed){
        super(name,"Woof"); //super calls the parent class constructor
        this.breed=breed;
    }
    fetch(item){
        console.log(this.name+" fetches "+item);
    }
    speak(){ //method overriding -- replaces the parent's speak method
        console.log(this.name+" barks loudly: "+this.sound+"!");
    }
}
let myDog=new Dog("Rex","German Shepherd");
myDog.speak(); //"Rex barks loudly: Woof!"
myDog.fetch("ball"); //"Rex fetches ball"
console.log(myDog instanceof Dog); //true
console.log(myDog instanceof Animal); //true

                /*Getters and Setters*/
class Circle{
    constructor(radius){
        this._radius=radius; //convention: _ prefix for private-ish properties
    }
    get radius(){
        return this._radius;
    }
    set radius(value){
        if(value<0) throw new Error("Radius cannot be negative");
        this._radius=value;
    }
    get area(){
        return Math.PI*this._radius**2;
    }
}
let circle=new Circle(5);
console.log(circle.radius); //5 -- uses the getter
console.log(circle.area); //78.54... -- computed property via getter
circle.radius=10; //uses the setter
//circle.radius=-1; //throws Error: "Radius cannot be negative"

                /*Private Fields (ES2022)*/
//truly private properties using # prefix
class BankAccount{
    #balance=0; //private field -- cannot be accessed from outside the class
    constructor(initialBalance){
        this.#balance=initialBalance;
    }
    deposit(amount){
        this.#balance+=amount;
    }
    withdraw(amount){
        if(amount>this.#balance) throw new Error("Insufficient funds");
        this.#balance-=amount;
    }
    getBalance(){
        return this.#balance;
    }
}
let account=new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); //1500
//console.log(account.#balance); //SyntaxError -- private field


                    /*================================*/
                    /* 12. ARRAY METHODS (ADVANCED)   */
                    /*================================*/

//continuing from script.js which covered forEach, filter, map, sort, reduce, find

                /*findIndex*/
let arr7=[10,20,30,40,50];
let foundIndex=arr7.findIndex(element=>element>25);
console.log(foundIndex); //2 -- index of the first element greater than 25 (which is 30)

                /*every and some*/
//every -- returns true if ALL elements pass the test
let allPositive=[1,2,3,4,5].every(element=>element>0);
console.log(allPositive); //true

//some -- returns true if AT LEAST ONE element passes the test
let hasNegative=[1,-2,3,4,5].some(element=>element<0);
console.log(hasNegative); //true

                /*includes*/
let fruits=["apple","banana","cherry"];
console.log(fruits.includes("banana")); //true
console.log(fruits.includes("grape")); //false

                /*flat and flatMap*/
//flat -- flattens nested arrays
let nested=[1,[2,3],[4,[5,6]]];
console.log(nested.flat()); //[1,2,3,4,[5,6]] -- flattens one level
console.log(nested.flat(Infinity)); //[1,2,3,4,5,6] -- flattens all levels

//flatMap -- maps then flattens one level
let sentences=["Hello World","Goodbye World"];
let words=sentences.flatMap(sentence=>sentence.split(" "));
console.log(words); //["Hello","World","Goodbye","World"]

                /*Array.from()*/
//creates an array from an iterable or array-like object
let arrayFromString=Array.from("Hello");
console.log(arrayFromString); //["H","e","l","l","o"]

//with a map function
let range=Array.from({length:5},(_, i)=>i+1);
console.log(range); //[1,2,3,4,5]

                /*Spread Operator with Arrays*/
let arr8=[1,2,3];
let arr9=[...arr8,4,5,6]; //creates a new array with elements from arr8 and additional elements
console.log(arr9); //[1,2,3,4,5,6]

//copying an array (shallow copy)
let arrCopy=[...arr8];
arrCopy.push(99);
console.log(arr8); //[1,2,3] -- original is not affected
console.log(arrCopy); //[1,2,3,99]

                /*Destructuring Arrays*/
let [first,second,...rest]=[10,20,30,40,50];
console.log(first); //10
console.log(second); //20
console.log(rest); //[30,40,50]

//swapping variables
let swapA=1;
let swapB=2;
[swapA,swapB]=[swapB,swapA];
console.log(swapA); //2
console.log(swapB); //1


                    /*=========================*/
                    /* 13. STRINGS (ADVANCED)  */
                    /*=========================*/

let testStr="Hello, World! Hello, JavaScript!";

                /*Common String Methods*/
console.log(testStr.length); //33
console.log(testStr.toUpperCase()); //"HELLO, WORLD! HELLO, JAVASCRIPT!"
console.log(testStr.toLowerCase()); //"hello, world! hello, javascript!"
console.log(testStr.indexOf("Hello")); //0 -- first occurrence
console.log(testStr.lastIndexOf("Hello")); //14 -- last occurrence
console.log(testStr.includes("World")); //true
console.log(testStr.startsWith("Hello")); //true
console.log(testStr.endsWith("!")); //true
console.log(testStr.slice(7,12)); //"World" -- extracts a portion
console.log(testStr.replace("Hello","Hi")); //"Hi, World! Hello, JavaScript!" -- replaces first occurrence
console.log(testStr.replaceAll("Hello","Hi")); //"Hi, World! Hi, JavaScript!" -- replaces all occurrences
console.log(testStr.split(", ")); //["Hello","World! Hello","JavaScript!"]
console.log("  hello  ".trim()); //"hello" -- removes whitespace from both ends
console.log("  hello  ".trimStart()); //"hello  " -- removes whitespace from the start
console.log("  hello  ".trimEnd()); //"  hello" -- removes whitespace from the end
console.log("ha".repeat(3)); //"hahaha"
console.log("5".padStart(3,"0")); //"005" -- pads the start to reach length 3
console.log("5".padEnd(3,"0")); //"500" -- pads the end to reach length 3
console.log(testStr.charAt(0)); //"H"
console.log(testStr.charCodeAt(0)); //72 -- Unicode value of "H"
console.log(testStr.at(-1)); //"!" -- negative indexing (ES2022)

                /*Template Literals (Backticks)*/
let firstName="John";
let lastName="Doe";
let fullName=`${firstName} ${lastName}`; //string interpolation
console.log(fullName); //"John Doe"

//multi-line strings
let multiLine=`This is line 1
This is line 2
This is line 3`;
console.log(multiLine);

//tagged templates -- advanced feature for custom string processing
function highlight(strings,...values){
    return strings.reduce((result,str,i)=>{
        return result+str+(values[i] ? `<b>${values[i]}</b>` : "");
    },"");
}
let item="JavaScript";
let price=0;
let taggedResult=highlight`Learning ${item} is ${price===0 ? "free" : "$"+price}!`;
console.log(taggedResult); //"Learning <b>JavaScript</b> is <b>free</b>!"


                    /*==============================*/
                    /* 14. ERROR HANDLING           */
                    /*==============================*/

                /*try / catch / finally*/
try{
    let result=riskyOperation(); //if this throws an error, execution jumps to catch
    console.log(result);
}catch(error){
    console.log("An error occurred: "+error.message); //handles the error
}finally{
    console.log("This always runs, whether there was an error or not");
}

                /*Throwing Custom Errors*/
function divide(a,b){
    if(b===0){
        throw new Error("Cannot divide by zero"); //throw creates and throws an error
    }
    return a/b;
}
try{
    console.log(divide(10,0));
}catch(e){
    console.log(e.message); //"Cannot divide by zero"
}

                /*Error Types*/
//JavaScript has several built-in error types:
//Error -- generic error
//TypeError -- wrong type used (e.g., calling a non-function)
//ReferenceError -- accessing a variable that doesn't exist
//SyntaxError -- invalid syntax (usually caught at parse time)
//RangeError -- number out of range (e.g., new Array(-1))
//URIError -- invalid URI encoding/decoding

//Custom Error class
class ValidationError extends Error{
    constructor(message,field){
        super(message); //call parent constructor
        this.name="ValidationError";
        this.field=field;
    }
}
try{
    throw new ValidationError("Invalid email","email");
}catch(e){
    console.log(e.name); //"ValidationError"
    console.log(e.message); //"Invalid email"
    console.log(e.field); //"email"
}


                    /*=================================*/
                    /* 15. PROMISES & ASYNC/AWAIT      */
                    /*=================================*/

//Promises represent a value that may not be available yet but will be resolved in the future
//They have 3 states: pending, fulfilled (resolved), rejected

                /*Creating a Promise*/
let myPromise=new Promise(function(resolve,reject){
    let success=true;
    if(success){
        resolve("Operation succeeded!"); //fulfilled
    }else{
        reject("Operation failed!"); //rejected
    }
});

                /*Consuming a Promise with .then() and .catch()*/
myPromise
    .then(function(result){
        console.log(result); //"Operation succeeded!"
    })
    .catch(function(error){
        console.log(error); //only runs if promise is rejected
    })
    .finally(function(){
        console.log("Promise settled"); //always runs
    });

                /*Chaining Promises*/
function fetchData(url){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve({data:"Some data from "+url});
        },1000);
    });
}
fetchData("api/users")
    .then(function(result){
        console.log(result.data);
        return fetchData("api/posts"); //return another promise to chain
    })
    .then(function(result){
        console.log(result.data);
    })
    .catch(function(error){
        console.log("Error: "+error);
    });

                /*Promise.all()*/
//waits for ALL promises to resolve (fails if ANY one rejects)
let p1=Promise.resolve(1);
let p2=Promise.resolve(2);
let p3=Promise.resolve(3);
Promise.all([p1,p2,p3]).then(function(values){
    console.log(values); //[1,2,3]
});

                /*Promise.allSettled()*/
//waits for ALL promises to settle (resolve or reject) -- never rejects
let p4=Promise.resolve("Success");
let p5=Promise.reject("Error");
Promise.allSettled([p4,p5]).then(function(results){
    console.log(results);
    //[{status:"fulfilled",value:"Success"}, {status:"rejected",reason:"Error"}]
});

                /*Promise.race()*/
//returns the result of the FIRST promise that settles (resolves or rejects)
let fast=new Promise(resolve=>setTimeout(()=>resolve("Fast"),100));
let slow=new Promise(resolve=>setTimeout(()=>resolve("Slow"),500));
Promise.race([fast,slow]).then(result=>console.log(result)); //"Fast"

                /*Promise.any()*/
//returns the result of the FIRST promise that RESOLVES (ignores rejections)
let p6=Promise.reject("Error 1");
let p7=new Promise(resolve=>setTimeout(()=>resolve("Success"),200));
Promise.any([p6,p7]).then(result=>console.log(result)); //"Success"

                /*Async / Await*/
//async/await is syntactic sugar over promises -- makes asynchronous code look synchronous
//an async function always returns a promise
//await pauses execution until the promise resolves

async function getData(){
    try{
        let result1=await fetchData("api/users"); //waits for the promise to resolve
        console.log(result1.data);
        let result2=await fetchData("api/posts");
        console.log(result2.data);
    }catch(error){
        console.log("Error: "+error);
    }
}
getData();

//parallel async operations with await
async function getDataParallel(){
    let [users,posts]=await Promise.all([
        fetchData("api/users"),
        fetchData("api/posts")
    ]);
    console.log(users.data,posts.data);
}
getDataParallel();


                    /*==============================*/
                    /* 16. DESTRUCTURING (DETAILED) */
                    /*==============================*/

//Destructuring allows you to unpack values from arrays or properties from objects into distinct variables

                /*Array Destructuring*/
let [a2,b2,c2]=[1,2,3];
console.log(a2,b2,c2); //1 2 3

//skipping elements
let [first2,,third]=[1,2,3];
console.log(first2,third); //1 3

//default values
let [x2=10,y2=20,z2=30]=[1,2];
console.log(x2,y2,z2); //1 2 30

                /*Object Destructuring*/
let {name:name2,age:age2}={name:"Alice",age:25};
console.log(name2,age2); //"Alice" 25

//function parameter destructuring
function printUser({name,age,role="User"}){
    console.log(`${name} is ${age} years old and is a ${role}`);
}
printUser({name:"Alice",age:25}); //"Alice is 25 years old and is a User"
printUser({name:"Bob",age:30,role:"Admin"}); //"Bob is 30 years old and is a Admin"


                    /*==============================*/
                    /* 17. SPREAD & REST OPERATORS  */
                    /*==============================*/

//Both use ... syntax but serve opposite purposes

                /*Spread Operator -- expands an iterable into individual elements*/
//with arrays
let spreadArr=[1,2,3];
console.log(...spreadArr); //1 2 3 (individual elements)
console.log(Math.max(...spreadArr)); //3

//with function calls
function sum3(a,b,c){
    return a+b+c;
}
console.log(sum3(...spreadArr)); //6

                /*Rest Operator -- collects individual elements into an array*/
//in function parameters (already covered above)
function logAll(first3,...remaining){
    console.log("First: "+first3);
    console.log("Rest: "+remaining);
}
logAll(1,2,3,4,5); //First: 1, Rest: 2,3,4,5

//in destructuring
let {name:restName,...otherProps}={name:"John",age:30,city:"NYC"};
console.log(restName); //"John"
console.log(otherProps); //{age:30, city:"NYC"}


                    /*==============================*/
                    /* 18. MAP, SET, WEAKMAP, WEAKSET*/
                    /*==============================*/

                /*Map*/
//Map stores key-value pairs where keys can be ANY type (unlike objects where keys are strings/symbols)
let myMap=new Map();
myMap.set("name","John");
myMap.set(1,"one");
myMap.set(true,"yes");
let objKey={id:1};
myMap.set(objKey,"object as key"); //objects can be keys!

console.log(myMap.get("name")); //"John"
console.log(myMap.get(objKey)); //"object as key"
console.log(myMap.size); //4
console.log(myMap.has("name")); //true
myMap.delete(1); //removes the entry with key 1

//iterating over a Map
for(let [key,value] of myMap){
    console.log(key+" => "+value);
}

                /*Set*/
//Set stores unique values -- no duplicates allowed
let mySet=new Set([1,2,3,3,3,4,5]);
console.log(mySet); //Set {1,2,3,4,5} -- duplicates removed
mySet.add(6);
mySet.add(1); //ignored because 1 already exists
console.log(mySet.size); //6
console.log(mySet.has(3)); //true
mySet.delete(3);

//common use -- removing duplicates from an array
let duplicates=[1,2,2,3,3,3,4];
let unique=[...new Set(duplicates)];
console.log(unique); //[1,2,3,4]

//iterating over a Set
for(let value of mySet){
    console.log(value);
}

                /*WeakMap and WeakSet*/
//WeakMap -- similar to Map but keys must be objects and they are weakly referenced (garbage collected when no other reference exists)
//WeakSet -- similar to Set but values must be objects and they are weakly referenced
//These are useful for caching and memory management because they don't prevent garbage collection
let weakMap=new WeakMap();
let weakKey={id:1};
weakMap.set(weakKey,"value");
console.log(weakMap.get(weakKey)); //"value"
//if weakKey is set to null, the entry will be garbage collected


                    /*==============================*/
                    /* 19. ITERATORS & GENERATORS   */
                    /*==============================*/

                /*Iterators*/
//An iterator is an object that defines a next() method which returns {value, done}
let iterableObj={
    data:[10,20,30],
    [Symbol.iterator](){
        let index=0;
        let data=this.data;
        return{
            next(){
                if(index<data.length){
                    return {value:data[index++],done:false};
                }
                return {value:undefined,done:true};
            }
        };
    }
};
for(let val of iterableObj){
    console.log(val); //10, 20, 30
}

                /*Generators*/
//Generators are special functions that can pause and resume execution using yield
//they return an iterator object
function* numberGenerator(){
    yield 1;
    yield 2;
    yield 3;
}
let gen=numberGenerator();
console.log(gen.next()); //{value:1, done:false}
console.log(gen.next()); //{value:2, done:false}
console.log(gen.next()); //{value:3, done:false}
console.log(gen.next()); //{value:undefined, done:true}

//infinite generator
function* idGenerator(){
    let id=0;
    while(true){
        yield ++id;
    }
}
let genId=idGenerator();
console.log(genId.next().value); //1
console.log(genId.next().value); //2
console.log(genId.next().value); //3


                    /*=========================*/
                    /* 20. MODULES (ES6)       */
                    /*=========================*/

//Modules allow you to split code into separate files and import/export functionality between them
//In the browser, use <script type="module"> to enable module support

//EXPORTING (in a file like math.js):
// export function add(a,b){ return a+b; }
// export function subtract(a,b){ return a-b; }
// export const PI=3.14159;

//Default export (one per file):
// export default function multiply(a,b){ return a*b; }

//IMPORTING (in another file):
// import { add, subtract, PI } from './math.js'; //named imports
// import multiply from './math.js'; //default import
// import * as math from './math.js'; //import everything as namespace
// import { add as addition } from './math.js'; //rename during import

//Dynamic imports (lazy loading):
// let module = await import('./math.js'); //returns a promise
// console.log(module.add(1,2));


                    /*==============================*/
                    /* 21. DOM MANIPULATION         */
                    /*==============================*/

//The DOM (Document Object Model) is a tree representation of the HTML document
//JavaScript can interact with the DOM to change the page content, structure, and style

                /*Selecting Elements*/
// document.getElementById("myId"); //selects ONE element by ID
// document.getElementsByClassName("myClass"); //selects ALL elements with the class (returns HTMLCollection)
// document.getElementsByTagName("div"); //selects ALL div elements (returns HTMLCollection)
// document.querySelector(".myClass"); //selects the FIRST matching element using a CSS selector
// document.querySelectorAll(".myClass"); //selects ALL matching elements (returns NodeList)

                /*Modifying Elements*/
// let el=document.getElementById("myId");
// el.textContent="New text"; //changes the text content (no HTML parsing)
// el.innerHTML="<b>Bold text</b>"; //changes the HTML content (parses HTML)
// el.style.color="red"; //changes inline style
// el.style.backgroundColor="#f0f0f0";
// el.classList.add("active"); //adds a CSS class
// el.classList.remove("active"); //removes a CSS class
// el.classList.toggle("active"); //toggles a CSS class on/off
// el.classList.contains("active"); //checks if class exists
// el.setAttribute("data-id","123"); //sets a custom attribute
// el.getAttribute("data-id"); //gets a custom attribute
// el.removeAttribute("data-id"); //removes a custom attribute

                /*Creating and Adding Elements*/
// let newDiv=document.createElement("div"); //creates a new element
// newDiv.textContent="I am new!";
// newDiv.classList.add("box");
// document.body.appendChild(newDiv); //adds to the end of body
// document.body.prepend(newDiv); //adds to the beginning of body
// parentElement.insertBefore(newDiv,referenceElement); //inserts before a specific element
// parentElement.removeChild(childElement); //removes a child element
// element.remove(); //removes the element itself (modern approach)

                /*Traversing the DOM*/
// el.parentElement; //parent node
// el.children; //child elements (HTMLCollection)
// el.firstElementChild; //first child element
// el.lastElementChild; //last child element
// el.nextElementSibling; //next sibling element
// el.previousElementSibling; //previous sibling element


                    /*=========================*/
                    /* 22. EVENTS              */
                    /*=========================*/

                /*Adding Event Listeners*/
// let btn=document.querySelector("#myBtn");

//Method 1: addEventListener (RECOMMENDED -- allows multiple handlers)
// btn.addEventListener("click",function(event){
//     console.log("Button clicked!");
//     console.log(event.target); //the element that was clicked
// });

//Method 2: onclick property (only one handler allowed)
// btn.onclick=function(){
//     console.log("Button clicked!");
// };

                /*Common Events*/
//Mouse: click, dblclick, mousedown, mouseup, mouseover, mouseout, mousemove
//Keyboard: keydown, keyup, keypress (deprecated)
//Form: submit, change, input, focus, blur
//Window: load, resize, scroll, unload
//Touch: touchstart, touchend, touchmove

                /*Event Object*/
// btn.addEventListener("click",function(e){
//     e.preventDefault(); //prevents default action (e.g., form submission, link navigation)
//     e.stopPropagation(); //stops the event from bubbling up to parent elements
//     e.target; //the element that triggered the event
//     e.currentTarget; //the element that the listener is attached to
//     e.type; //the event type (e.g., "click")
// });

                /*Event Delegation*/
//Instead of adding listeners to each child, add one listener to the parent
//This is efficient for dynamic content and large lists
// let list=document.querySelector("#myList");
// list.addEventListener("click",function(e){
//     if(e.target.tagName==="LI"){
//         console.log("Clicked: "+e.target.textContent);
//     }
// });

                /*Event Bubbling and Capturing*/
//Bubbling (default): event goes from the target element UP to the root
//Capturing: event goes from the root DOWN to the target element
// parent.addEventListener("click",handler,true); //third argument true = capturing phase
// parent.addEventListener("click",handler,false); //third argument false = bubbling phase (default)


                    /*=========================*/
                    /* 23. FETCH API           */
                    /*=========================*/

//The Fetch API provides a modern way to make HTTP requests (replaces XMLHttpRequest)
//fetch() returns a Promise

                /*GET Request*/
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response=>{
//         if(!response.ok) throw new Error("HTTP error: "+response.status);
//         return response.json(); //parse JSON response -- also returns a promise
//     })
//     .then(data=>{
//         console.log(data); //array of posts
//     })
//     .catch(error=>{
//         console.log("Fetch error: "+error.message);
//     });

                /*POST Request*/
// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body:JSON.stringify({
//         title:"My Post",
//         body:"This is the content",
//         userId:1
//     })
// })
// .then(response=>response.json())
// .then(data=>console.log(data));

                /*Using Async/Await with Fetch*/
// async function getPosts(){
//     try{
//         let response=await fetch("https://jsonplaceholder.typicode.com/posts");
//         if(!response.ok) throw new Error("HTTP error: "+response.status);
//         let data=await response.json();
//         console.log(data);
//     }catch(error){
//         console.log("Error: "+error.message);
//     }
// }
// getPosts();


                    /*=========================*/
                    /* 24. JSON                */
                    /*=========================*/

//JSON (JavaScript Object Notation) is a lightweight data format used for data interchange
//it looks like JavaScript objects but there are key differences:
//- Keys MUST be double-quoted strings
//- Values can be: strings, numbers, objects, arrays, true, false, null
//- No functions, undefined, or comments allowed

                /*JSON.stringify()*/
//converts a JavaScript object to a JSON string
let myObj={name:"John",age:30,hobbies:["reading","coding"]};
let jsonString=JSON.stringify(myObj);
console.log(jsonString); //'{"name":"John","age":30,"hobbies":["reading","coding"]}'

//with formatting (pretty print)
let prettyJson=JSON.stringify(myObj,null,2); //2 spaces indentation
console.log(prettyJson);

//with replacer function (filter/transform properties)
let filteredJson=JSON.stringify(myObj,function(key,value){
    if(key==="age") return undefined; //exclude age
    return value;
});
console.log(filteredJson); //'{"name":"John","hobbies":["reading","coding"]}'

                /*JSON.parse()*/
//converts a JSON string to a JavaScript object
let parsed=JSON.parse(jsonString);
console.log(parsed.name); //"John"
console.log(parsed.hobbies[0]); //"reading"

//with reviver function (transform values during parsing)
let dateJson='{"created":"2024-01-15T00:00:00.000Z"}';
let parsedWithReviver=JSON.parse(dateJson,function(key,value){
    if(key==="created") return new Date(value); //convert string to Date object
    return value;
});
console.log(parsedWithReviver.created instanceof Date); //true


                    /*=========================*/
                    /* 25. LOCAL STORAGE       */
                    /*=========================*/

//localStorage allows you to store data in the browser that persists even after the browser is closed
//data is stored as key-value pairs (both must be strings)
//each domain gets its own separate storage (5-10 MB limit)

//localStorage.setItem("username","John"); //store a value
//localStorage.getItem("username"); //"John" -- retrieve a value
//localStorage.removeItem("username"); //remove a specific item
//localStorage.clear(); //remove all items

//storing objects (must convert to JSON string first)
// let userData={name:"John",age:30,preferences:{theme:"dark"}};
// localStorage.setItem("user",JSON.stringify(userData));
// let retrieved=JSON.parse(localStorage.getItem("user"));
// console.log(retrieved.preferences.theme); //"dark"

//sessionStorage -- same API as localStorage but data is cleared when the tab/browser is closed
//sessionStorage.setItem("tempData","value");
//sessionStorage.getItem("tempData");


                    /*======================================*/
                    /* 26. REGULAR EXPRESSIONS (RegExp)     */
                    /*======================================*/

//Regular expressions are patterns used to match character combinations in strings
//they are created using /pattern/flags or new RegExp("pattern","flags")

let regex1=/hello/i; //i flag = case-insensitive
let regex2=new RegExp("hello","i"); //same as above

                /*Common Methods*/
console.log(regex1.test("Hello World")); //true -- tests if pattern matches
console.log("Hello World".match(/hello/i)); //["Hello"] -- returns matches
console.log("Hello World Hello".match(/hello/gi)); //["Hello","Hello"] -- g flag = global (all matches)
console.log("Hello World".search(/world/i)); //6 -- returns the index of the first match
console.log("Hello World".replace(/world/i,"JavaScript")); //"Hello JavaScript"

                /*Common Patterns*/
// .        any character except newline
// \d       digit (0-9)
// \D       non-digit
// \w       word character (a-z, A-Z, 0-9, _)
// \W       non-word character
// \s       whitespace
// \S       non-whitespace
// ^        start of string
// $        end of string
// *        0 or more
// +        1 or more
// ?        0 or 1
// {n}      exactly n times
// {n,m}    between n and m times
// [abc]    any of a, b, or c
// [^abc]   NOT a, b, or c
// (abc)    capture group
// a|b      a OR b

                /*Practical Examples*/
//validate email
let emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailRegex.test("user@example.com")); //true
console.log(emailRegex.test("invalid-email")); //false

//validate phone number (US format)
let phoneRegex=/^\d{3}-\d{3}-\d{4}$/;
console.log(phoneRegex.test("123-456-7890")); //true

//extract numbers from a string
let numbersInStr="I have 3 cats and 2 dogs";
let extractedNums=numbersInStr.match(/\d+/g);
console.log(extractedNums); //["3","2"]


                    /*==============================*/
                    /* 27. EVENT LOOP & ASYNC MODEL */
                    /*==============================*/

//JavaScript is single-threaded -- it can only execute one thing at a time
//But it can handle asynchronous operations using the Event Loop

//The Event Loop has 3 main components:
//1. Call Stack -- where function calls are pushed and popped (LIFO)
//2. Web APIs / Node APIs -- handles async operations (setTimeout, fetch, DOM events, etc.)
//3. Task Queues:
//   - Microtask Queue (higher priority): Promises (.then, .catch), queueMicrotask(), MutationObserver
//   - Macrotask Queue (lower priority): setTimeout, setInterval, I/O, UI rendering

//How it works:
//1. JavaScript executes code line by line, pushing functions onto the Call Stack
//2. When it encounters an async operation, it sends it to the Web APIs
//3. When the async operation completes, its callback is placed in the appropriate queue
//4. The Event Loop checks: if the Call Stack is empty, it first processes ALL microtasks, then ONE macrotask, then repeats

//Example to understand execution order:
console.log("1"); //synchronous -- runs first

setTimeout(function(){
    console.log("2"); //macrotask -- runs last
},0);

Promise.resolve().then(function(){
    console.log("3"); //microtask -- runs before setTimeout even though both have 0 delay
});

console.log("4"); //synchronous -- runs second

//Output order: 1, 4, 3, 2
//Explanation: 1 and 4 are synchronous (run immediately)
//Promise callback goes to Microtask Queue
//setTimeout callback goes to Macrotask Queue
//Microtasks always run before macrotasks


                    /*==============================*/
                    /* 28. PROTOTYPAL INHERITANCE   */
                    /*==============================*/

//Every JavaScript object has an internal link to another object called its prototype
//When you access a property, JavaScript first looks at the object itself, then its prototype, then the prototype's prototype, and so on -- this is the Prototype Chain

//Object.getPrototypeOf() and __proto__ (deprecated) -- access the prototype
let myArray=[1,2,3];
console.log(Object.getPrototypeOf(myArray)===Array.prototype); //true
console.log(Object.getPrototypeOf(Array.prototype)===Object.prototype); //true
console.log(Object.getPrototypeOf(Object.prototype)); //null -- end of the chain

//Constructor functions (pre-ES6 way to create "classes")
function PersonConstructor(name,age){
    this.name=name;
    this.age=age;
}
PersonConstructor.prototype.greet=function(){
    console.log("Hi, I'm "+this.name);
};
let person5=new PersonConstructor("Alice",25);
person5.greet(); //"Hi, I'm Alice"
console.log(person5.hasOwnProperty("name")); //true -- name is on the object itself
console.log(person5.hasOwnProperty("greet")); //false -- greet is on the prototype

//Inheritance with prototypes
function StudentConstructor(name,age,grade){
    PersonConstructor.call(this,name,age); //call parent constructor
    this.grade=grade;
}
StudentConstructor.prototype=Object.create(PersonConstructor.prototype); //inherit from Person
StudentConstructor.prototype.constructor=StudentConstructor; //fix the constructor reference
StudentConstructor.prototype.study=function(){
    console.log(this.name+" is studying");
};
let student=new StudentConstructor("Bob",20,"A");
student.greet(); //"Hi, I'm Bob" -- inherited from Person
student.study(); //"Bob is studying"


                    /*============================*/
                    /* 29. TIMING FUNCTIONS       */
                    /*============================*/

                /*setTimeout*/
//executes a function ONCE after a specified delay (in milliseconds)
let timeoutId=setTimeout(function(){
    console.log("This runs after 2 seconds");
},2000);
//clearTimeout(timeoutId); //cancels the timeout before it runs

                /*setInterval*/
//executes a function REPEATEDLY at a specified interval (in milliseconds)
let count2=0;
let intervalId=setInterval(function(){
    count2++;
    console.log("Count: "+count2);
    if(count2>=5){
        clearInterval(intervalId); //stops the interval after 5 iterations
    }
},1000);

                /*requestAnimationFrame*/
//optimized for animations -- runs before the next repaint (usually 60fps)
// function animate(){
//     // update animation here
//     requestAnimationFrame(animate); //recursive call for continuous animation
// }
// requestAnimationFrame(animate);


                    /*================================*/
                    /* 30. USEFUL MODERN JS FEATURES  */
                    /*================================*/

                /*Optional Chaining (?.) -- already covered above*/

                /*Logical Assignment Operators (ES2021)*/
let a3=null;
a3??="default"; //a3 = a3 ?? "default" -- assigns "default" only if a3 is null/undefined
console.log(a3); //"default"

let b3="";
b3||="fallback"; //b3 = b3 || "fallback" -- assigns "fallback" if b3 is falsy
console.log(b3); //"fallback"

let c3=1;
c3&&="updated"; //c3 = c3 && "updated" -- assigns "updated" if c3 is truthy
console.log(c3); //"updated"

                /*Numeric Separators (ES2021)*/
let billion=1_000_000_000; //same as 1000000000 -- underscores are ignored but improve readability
console.log(billion); //1000000000

                /*structuredClone() (ES2022)*/
//creates a deep copy of an object (unlike spread/Object.assign which are shallow)
let original2={
    name:"John",
    address:{city:"NYC"},
    hobbies:["reading","coding"]
};
let deepCopy=structuredClone(original2);
deepCopy.address.city="LA";
console.log(original2.address.city); //"NYC" -- original is NOT affected
console.log(deepCopy.address.city); //"LA"

                /*Array.at() and String.at() (ES2022)*/
let myArr=[10,20,30,40,50];
console.log(myArr.at(0)); //10
console.log(myArr.at(-1)); //50 -- negative indexing from the end
console.log(myArr.at(-2)); //40

                /*Object.hasOwn() (ES2022)*/
//replacement for hasOwnProperty -- works even on objects created with Object.create(null)
let myObj2={name:"John",age:30};
console.log(Object.hasOwn(myObj2,"name")); //true
console.log(Object.hasOwn(myObj2,"toString")); //false -- inherited property

                /*Top-Level Await (ES2022)*/
//in modules, you can use await outside of async functions
// let response=await fetch("https://api.example.com/data");
// let data=await response.json();
// console.log(data);


// ========================================================================
//                  END OF GUIDE
// ========================================================================
// Topics covered:
// 1. Variables & Scope        2. Hoisting
// 3. Type Coercion (Detailed) 4. Comparison Operators
// 5. Conditional Statements   6. Loops
// 7. Functions (Detailed)     8. Closures (Detailed)
// 9. Objects (Detailed)       10. 'this' Keyword
// 11. Classes (ES6)           12. Array Methods (Advanced)
// 13. Strings (Advanced)      14. Error Handling
// 15. Promises & Async/Await  16. Destructuring (Detailed)
// 17. Spread & Rest Operators 18. Map, Set, WeakMap, WeakSet
// 19. Iterators & Generators  20. Modules (ES6)
// 21. DOM Manipulation        22. Events
// 23. Fetch API               24. JSON
// 25. Local Storage           26. Regular Expressions (RegExp)
// 27. Event Loop & Async Model 28. Prototypal Inheritance
// 29. Timing Functions        30. Useful Modern JS Features
// ========================================================================
