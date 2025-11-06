//Fundamental JS
//Question 1
//What are the results of these expressions?
"" + 1 + 0	          //"10"
"" - 1 + 0	          //-1
true + false	      //1
!true	              //false
6 / "3"	              //2
"2" * "3"	          //6
4 + 5 + "px"	      //"9px"
"$" + 4 + 5 	      //"$45"
"4" - 2	              //2
"4px" - 2	          //NaN
" -9 " + 5	          //" -9 5"
" -9 " - 5	          //-14
null + 1	          //1
undefined + 1	      //NaN
undefined == null	  //true
undefined === null	  //false
" \t \n" - 2	      //-2

//Question 2
//Which of the below are not giving the right answer? Why are they not correct? How can we fix them?
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four        // "34"
let multiplication = three * four  // 12
let division = three / four        // 0.75
let subtraction = three - four     // -1
let lessThan1 = three < four       // true
let lessThan2 = thirty < four      // this question is incorrect as "30" is not less than "4" in string comparison, so the answer is false
//corrected question
let lessThan2_fixed = Number(thirty) < Number(four) // false

//Question 3
//Which of the following console.log messages will print? Why?
if (0) console.log('#1 zero is true')  // will not print, because 0 is falsy
if ("0") console.log('#2 zero is true') // will print, because non-empty strings are truthy
if (null) console.log('null is true')   // will not print, because null is falsy
if (-1) console.log('negative is true') // will print, because non-zero numbers are truthy
if (1) console.log('positive is true')  // will print, because positive numbers are truthy

//Question 4
//Rewrite this if using the ternary/conditional operator '?'. Test it with different values for aand b. What does the ‘+=’ do? 

let a = 2, b = 3;
let result = `${a} + ${b} is `;
result += (a + b < 10) ? 'less than 10' : 'greater than 10';

console.log(result); //2 + 3 is less than 10
// The '+=' operator appends the string on the right to the existing value of 'result'. 

//Question 5
//Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same. 

//Function Expression
let getGreeting = function(name) {
return 'Hello ' + name + '!';
};

//Arrow Function
let getGreetingArrow = (name) => {
return 'Hello ' + name + '!';
};

console.log(getGreeting("Thing 1")); // "Hello Thing 1!"
console.log(getGreetingArrow("Thing 2"));   // "Hello Thing 2!"

//Question 6
//a) Complete the inigo object by adding a lastName property and including it in the greeting. 
//b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console. HINT: see
//c) Update getCatchPhrase to use arrow function syntax and a conditional operator.
const westley = {
  name: 'Westley',
  numFingers: 5
};

const rugen = {
  name: 'Count Rugen',
  numFingers: 6
};

const inigo = {
  firstName: 'Inigo',
  lastName: 'Montoya',
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (person) =>
    person.numFingers === 6
      ? 'Hello, my name is Inigo Montoya. You killed my father. Prepare to die.'
      : 'Nice to meet you.'
};

inigo.greeting(westley);
inigo.greeting(rugen);

//Question 7
//The following object represents a basketball game and keeps track of the score as the game progresses.
//a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works
//b) Add a new method to print the full time final score
//c) Add a new object property to keep track of the number of fouls and a method to
//increment it, similar but separate to the score. Include the foul count in the half time and full time console messages
//d) Test your object by chaining all the method calls together in different combinations.
const basketballGame = {
score: 0,
fouls: 0,
freeThrow() {
this.score++;
return this;
},
basket() {
this.score += 2;
return this;
},
threePointer() {
this.score += 3;
return this;
},
halfTime() {
console.log('Halftime score is ' + this.score + ' with '+this.fouls+' fouls');
return this;
},
fullTime() {
console.log('Fulltime score is ' + this.score + ' with ' + this.fouls + ' fouls');
return this;
},  
foul() {
this.fouls++;
return this;
},
};
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime(); 

//Question 8
//The object below represents a single city.
//a) Write a function that takes an object as an argument and uses a for...in loop to access
//and print to the console each of those object properties and their values. Test it using
//the sydney object below.
//b) Create a new object for a different city with different properties and call your function
//again with the new object
const sydney = {
name: 'Sydney',
population: 5_121_000,
state: 'NSW',
founded: '26 January 1788',
timezone: 'Australia/Sydney'
};

function printCityDetails(city) {
for (let key in city) {
console.log(`${key}: ${city[key]}`);
}
}

printCityDetails(sydney);

const melbourne = {
name: 'Melbourne',
population: 5_078_000,
state: 'VIC',
founded: '30 August 1835',
timezone: 'Australia/Melbourne'
};

printCityDetails(melbourne);

//Question 9
//Use the following variables to understand how JavaScript stores objects by reference.
//a) Create a new moreSports variable equal to teamSports and add some new sport values to it (using push and unshift)
//b) Create a new dog2 variable equal to dog1 and give it a new value
//c) Create a new cat2 variable equal to cat1 and change its name property
//d) Print the original teamSports, dog1 and cat1 variables to the console. Have they changed? Why?
//e) Change the way the moreSports and cat2 variables are created to ensure the originals remain independent
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

let moreSports = teamSports; 
moreSports.push('Soccer');    
moreSports.unshift('Tennis'); 
 
let dog2 = dog1; 
dog2 = 'Woof';    

let cat2 = cat1; 
cat2.name = 'Whiskers'; 

console.log('teamSports:', teamSports); // ['Tennis', 'Hockey', 'Cricket', 'Volleyball', 'Soccer'] (changes as new values were added)
console.log('dog1:', dog1);             // 'Bingo' (remains the same)
console.log('cat1:', cat1);             // { name: 'Whiskers', breed: 'Siberian' } (changes as name property was changed)

let moreSportsIndependent = [...teamSports]; 
moreSportsIndependent.push('Basketball');

let cat2Independent = { ...cat1 }; 
cat2Independent.name = 'Meow';

//Question 10
//The following constructor function creates a new Person object with the given name andage values.
//a) Create a new person using the constructor function and store it in a variable
//b) Create a second person using different name and age values and store it in a separate variable
//c) Print out the properties of each person object to the console
//d) Rewrite the constructor function as a class called PersonClass and use it to create a
//third person using different name and age values. Print it to the console as well.
//e) Add a canDrive method to both the constructor function and the class that returns true if the person is old enough to drive.
function Person(name, age) {
this.name = name;
this.age = age;
this.human = true;
}

let person1 = new Person('Thing 1', 30);
let person2 = new Person('Thing 2', 25);

console.log('Person 1:', person1);
console.log('Person 2:', person2);

class PersonClass {
constructor(name, age) {
this.name = name;
this.age = age;
this.human = true;
}
}

let person3 = new PersonClass('Thing 3', 20);
console.log('Person 3:', person3);

Person.prototype.canDrive = function() {
return this.age >= 16;
};

PersonClass.prototype.canDrive = function() {
return this.age >= 16;
};

console.log('Can Thing 1 drive?', person1.canDrive());
console.log('Can Thing 2 drive?', person2.canDrive());
console.log('Can Thing 3 drive?', person3.canDrive());


//Intermediate JS
//Question 1
//Create a function that takes a string as a parameter and returns the string with the first
//character of each word changed into a capital letter, as in the example below. Test it withdifferent strings.
console.log(ucFirstLetters("los angeles") ) //Los Angeles
function ucFirstLetters(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}   

console.log(ucFirstLetters("I don't know") ) //I Don't Know
console.log(ucFirstLetters("the first letter of each word is capitalised") ) //The First Letter Of Each Word Is Capitalised

//Question 2
//Create a function truncate(str, max) that truncates a given string of text if its total
//length is greater than the max length. It should return either the truncated text, with an
//ellipsis (...) added to the end if it was too long, or the original text otherwise.
//b) Write another variant of the truncate function that uses a conditional operator.
function truncate(str, max) {
  if (str.length > max) {
    return str.slice(0, max - 3) + '...';
  } else {
    return str;
  }
}

console.log(truncate('This text will be truncated if it is too long', 30));

function truncate(str, max) {
  return str.length > max ? str.slice(0, max - 3) + '...' : str;
}

console.log(truncate('This text will be truncated if it is too long', 30));

//Question 3
//Use the following animals array for the below tasks. Test each one by printing the result to the console. Review the following link for tips:
//https://developer.mozilla.org/en-
//US/docs/Web/JavaScript/Reference/Global_Objects/Array
//a) Add 2 new values to the end
//b) Add 2 new values to the beginning
//c) Sort the values alphabetically
//d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the middle of the animals array with newValue
//e) Write a function findMatchingAnimals(beginsWith) that returns a new array containing all the animals that begin with the beginsWith string. 
// Try to make it work regardless of upper/lower case.
const animals = ['Tiger', 'Giraffe']
console.log(animals)
animals.push('Kiwi', 'Sloth'); 
console.log(animals)
animals.unshift('Lion', 'Monkey'); 
console.log(animals)
animals.sort(); 
console.log(animals)
function replaceMiddleAnimal(newValue) { 
  const middleIndex = Math.floor(animals.length / 2);
  animals[middleIndex] = newValue;
}
replaceMiddleAnimal('Kangaroo');
console.log(animals)
function findMatchingAnimals(beginsWith) { 
  const lowerCaseBeginsWith = beginsWith.toLowerCase();
  return animals.filter(animal => animal.toLowerCase().startsWith(lowerCaseBeginsWith));
}
console.log(findMatchingAnimals('G')); // ['Giraffe']
console.log(findMatchingAnimals('M')); // ['Monkey']
console.log(findMatchingAnimals('T')); // ['Tiger']

//Question 4
//Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'.
//The function should remove all dashes, and uppercase the first letter of each word after a dash.
//b) Create variants of the camelCase function that use different types of for loops, and
//c) with and without the conditional operator.
console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display

function camelCase(cssProp) {
  let result = '';
  let capitalizeNext = false;
  for (const char of cssProp) {
    if (char === '-') {
      capitalizeNext = true;
    } else {
      result += capitalizeNext ? char.toUpperCase() : char;
      capitalizeNext = false;
    }
  }
  return result;
}

console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display

function camelCase(cssProp) {
  let result = '';
  let capitalizeNext = false;
  for (const char of cssProp) {
    result += (char === '-') 
      ? (capitalizeNext = true, '') 
      : (capitalizeNext ? char.toUpperCase() : char, capitalizeNext = false, char);
  }
  return result;
}   

console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display

//Question 5
//Decimal number operations in JavaScript can lead to unexpected results, as in the following:

//let twentyCents = 0.20
//let tenCents = 0.10

//console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

//We can sometimes avoid this using the toFixed function to force the number of decimal places as below, but it’s not always useful:

//let fixedTwenty = twentyCents.toFixed(2);
//let fixedTen = tenCents.toFixed(2);

//console.log(fixedTwenty + fixedTen) //why is this not working?

//a) Explain why the above code returns the wrong answer
//b) Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers float1 and float2 and returns the correct float result.
//c) Create a function currencyOperation(float1, float2, operation) which safely performs the given operation (either +, -, / or *) on the two numbers and returns

//the correct float result. https://developer.mozilla.org/en-
//US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

//d) (Extension) Extend the above function to include a fourth argument numDecimals which allows the operation to support different amounts of decimal places from 1 to 10.
//HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with different values as well as the below:

//console.log(0.3 == currencyAddition(0.1, 0.2)) // true
//console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true

let twentyCents = 0.20;
let tenCents = 0.10;

console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`); // 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);

console.log(fixedTwenty + fixedTen); // It is not working because toFixed returns a string, so the + operator concatenates the strings instead of adding the numbers.

function currencyAddition(float1, float2) {
  const factor = 100; 
  return (Math.round(float1 * factor) + Math.round(float2 * factor)) / factor;
}

console.log(0.3 == currencyAddition(0.1, 0.2)); // true

function currencyOperation(float1, float2, operation) {
  const factor = 100; 
  let result;
  switch (operation) {
    case '+':
      result = Math.round(float1 * factor) + Math.round(float2 * factor);
      break;
    case '-':
      result = Math.round(float1 * factor) - Math.round(float2 * factor);
      break;
    case '*':
      result = Math.round(float1 * factor) * Math.round(float2 * factor) / factor;
      break;
    case '/':
      result = Math.round(float1 * factor) / Math.round(float2 * factor);
      break;
    default:
      throw new Error('Invalid operation');
  }
  return result / factor;
}

console.log(0.3 == currencyOperation(0.1, 0.2, '+')); // true

function currencyOperationExtended(float1, float2, operation, numDecimals = 2) {
  const factor = Math.pow(10, numDecimals);
  let result;
  switch (operation) {
    case '+':
      result = Math.round(float1 * factor) + Math.round(float2 * factor);
      break;
    case '-':
      result = Math.round(float1 * factor) - Math.round(float2 * factor);
      break;
    case '*':
      result = Math.round(float1 * factor) * Math.round(float2 * factor) / factor;
      break;
    case '/':
      result = Math.round(float1 * factor) / Math.round(float2 * factor);
      break;
    default:
      throw new Error('Invalid operation');
  }
  return result / factor;
}

console.log(0.333 == currencyOperationExtended(1, 3, '/', 3)); // true
console.log(0.3333 == currencyOperationExtended(1, 3, '/', 4)); // true 

//Question 6
//Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates. 
//Your function should return an array containing only the unique values from duplicatesArray.
//Test with the following arrays and create another one of your own.
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

function unique(duplicatesArray) {
  const uniqueArray = [];
  for (const item of duplicatesArray) {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  }
  return uniqueArray;
}

const fruits = ['apple', 'banana', 'mango', 'apple', 'kiwi', 'banana'];
console.log(unique(fruits)) // [ 'apple', 'banana', 'mango', 'kiwi' ]

//Question 7
//Use the following array of book objects to practice the array functions for map, find and filter. Test each of your answers to the below tasks.
const books = [
{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
{ id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
{ id: 3, title: '1984', author: 'George Orwell', year: 1949 },
{ id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
{ id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

//a) Write a function getBookTitle(bookId) that uses the find function to return the title of the book object with the matching id.
//b) Write a function getOldBooks() that uses the filter function to return all book objects written before 1950.
//c) Write a function addGenre() that uses the map function to add a new genre property to all of the above books, with the value ‘classic’.
//d) (Extension) Write a function getTitles(authorInitial) that uses map and filter together to return an array of book titles for books written by authors whose names start with authorInitial.
//e) (Extension) Write a function latestBook() that uses find and forEach to get the book with the most recent publication date.

function getBookTitle(bookId) {
  const book = books.find(b => b.id === bookId);
  return book ? book.title : null;
}

console.log(getBookTitle(3)); // '1984'

function getOldBooks() {
  return books.filter(b => b.year < 1950);
}

console.log(getOldBooks()); // [ { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }, { id: 3, title: '1984', author: 'George Orwell', year: 1949 }, { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 } ]

function addGenre() {
  return books.map(b => ({ ...b, genre: 'classic' }));
}

console.log(addGenre());

function getTitles(authorInitial) {
  return books
    .filter(b => b.author.startsWith(authorInitial))
    .map(b => b.title);
}

console.log(getTitles('F')); // [ 'The Great Gatsby' ]

function latestBook() {
  let latest = books[0];
  books.forEach(b => {
    if (b.year > latest.year) {
      latest = b;
    }
  });
  return latest;
}

console.log(latestBook()); // { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }

//Question 8
//The following code creates a new Map object for storing names beginning with A, B, or C with their phone numbers.
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

//a) Create a new phoneBookDEF Map to store names beginning with D, E or F
//b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
//c) Update the phone number for Caroline
//d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map
//e) Combine the contents of the two individual Maps into a single phoneBook Map
//f) Print out the full list of names in the combined phone book

const phoneBookDEF = new Map([
  ['Derek', '0466332211'],
  ['Eva', '0477443322'],
  ['Frank', '0488554433']
]);

phoneBookABC.set('Caroline', '0455998877');

function printPhoneBook(contacts) {
  contacts.forEach((number, name) => {
    console.log(`${name}: ${number}`);
  });
}

printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

console.log('Full Phone Book:');
printPhoneBook(phoneBook);  

//Question 9
//Given the below salaries object, perform the following tasks.
let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};
//a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
//b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary

function sumSalaries(salaries) {
let total = 0;
for (let salary of Object.values(salaries)) {
total += salary;
}
return total;
}

console.log('Total Salaries:', sumSalaries(salaries)); // Total Salaries: 233000

function topEarner(salaries) {
let topName = '';
let topSalary = 0;
for (let [name, salary] of Object.entries(salaries)) {
if (salary > topSalary) {
topSalary = salary;
topName = name;
}
}
return topName;
}

console.log('Top Earner:', topEarner(salaries)); // Top Earner: Christina

//Question 10
//The following code uses the Date object to print the current time and the number of hours that have passed today so far. Extend the code to do the following:
const today = new Date();
console.log('Current time is' + today.toLocaleTimeString())
console.log(today.getHours() + 'hours have passed so far today')
//a) Print the total number of minutes that have passed so far today
//b) Print the total number of seconds that have passed so far today
//c) Calculate and print your age as: 'I am x years, y months and z days old'
//d) Write a function daysInBetween(date1, date2) which calculates and returns the amount of days in between the two given dates.

const minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(minutesPassed + 'minutes have passed today');

const secondsPassed = minutesPassed * 60 + today.getSeconds();
console.log(secondsPassed + 'seconds have passed today');

const birthDate = new Date(2002, 11, 15); // December 15, 2002
const ageInMilliseconds = today - birthDate;
const ageDate = new Date(ageInMilliseconds);    
console.log(`I am ${ageDate.getUTCFullYear() - 1970} years, ${ageDate.getUTCMonth()} months and ${ageDate.getUTCDate() - 1} days old`);

function daysInBetween(date1, date2) {
const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const diffDays = Math.round(Math.abs((date2 - date1) / oneDay));
return diffDays;
} 

console.log(daysInBetween(new Date(2020, 0, 1), new Date(2020, 0, 31))); // 30

//Advanced JS
//Question 1
//makeCounter below is a decorator function which creates and returns a function that increments a counter.
//a) Create a second counter counter2 using the makeCounter function and test to see if it remains independent to counter1
//b) Modify makeCounter so that it takes an argument startFrom specifying where the counter starts from (instead of always starting from 0)
//c) Modify makeCounter to take another argument incrementBy, which specifies how much each call to counter() should increase the counter value by.
function makeCounter() {
let currentCount = 0;
return function() {
currentCount++;
console.log(currentCount)
return currentCount;
};
}
let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2

let counter2 = makeCounter();
counter2(); // 1
counter2(); // 2
console.log('Counter 2:', counter2());  
console.log('Counter 2:', counter2());


function makeCounter(startFrom = 0, incrementBy = 1) {
let currentCount = startFrom;
return function() {
currentCount += incrementBy;
console.log(currentCount)
return currentCount;
};
}

let counter3 = makeCounter(5, 2);
counter3(); // 7
counter3(); // 9

//Question 2
//The following delayMsg function is intended to be used to delay printing a message until some time has passed.
//a) What order will the four tests below print in? Why?
//b) Rewrite delayMsg as an arrow function
//c) Add a fifth test which uses a large delay time (greater than 10 seconds)
//d) Use clearTimeout to prevent the fifth test from printing at all function delayMsg(msg)


// a) The order will be:
// #4: Not delayed at all
// #3: Delayed by 0ms
// #2: Delayed by 20ms
// #1: Delayed by 100ms
// This is because the delayMsg function called directly executes immediately, while the others are scheduled to run after their respective delays.

const delayMsg = (msg) => {
console.log(`This message will be printed after a delay: ${msg}`);
};

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all');

const timeoutId = setTimeout(delayMsg, 15000, '#5: Delayed by 15 seconds');

clearTimeout(timeoutId);

//Question 3
//'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed, 
//similar requests until there's a brief pause, then only executing the most recent of those
//requests. See https://www.techtarget.com/whatis/definition/debouncing
//It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
//requests being initiated if a user clicks repeatedly on a button.
//Using the following code to test and start with:
//a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
//suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
//pause, the most recent call to func should be executed and any others ignored.
//b) Extend the debounce decorator function to take a second argument ms, which defines the
//length of the period of inactivity instead of hardcoding to 1000ms
//c) Extend debounce to allow the original debounced function printMe to take an argument
//msg which is included in the console.log statement.
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls

function printMe(msg) {
console.log('printing debounced message:', msg)
}

function debounce(func, ms = 1000) {
let timeoutId;
return function(...args) {
clearTimeout(timeoutId);
timeoutId = setTimeout(() => {
func.apply(this, args);
}, ms);
};
}

printMe = debounce(printMe, 1500);  

setTimeout( () => printMe('First call'), 100);
setTimeout( () => printMe('Second call'), 200);
setTimeout( () => printMe('Third call'), 300);

//Question 4
//The Fibonacci sequence of numbers is a famous pattern where the next number in the sequence is the sum of the previous 2.
//e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
//a) Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second.
//b) Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing
//c) Extend one of the above functions to accept a limit argument, which tells it how many numbers to print before stopping.

function printFibonacci(limit = 10) {
let a = 0, b = 1, count = 0;
const intervalId = setInterval(() => {
if (count >= limit) {
clearInterval(intervalId);
return;
}
console.log(b);
[a, b] = [b, a + b];
count++;
}, 1000);
}


function printFibonacciTimeouts(limit = 10, a = 0, b = 1, count = 0) {
if (count >= limit) return;
console.log(b);
setTimeout(() => {
printFibonacciTimeouts(limit, b, a + b, count + 1);
}, 1000);
}

printFibonacciTimeouts(10);

//Question 5
//The following car object has several properties and a method which uses them to print a
//description. When calling the function normally this works as expected, but using it from within setTimeout fails. Why?
let car = {
make: "Porsche",
model: '911',
year: 1964,

description() {
console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
}
};
car.description(); //works
setTimeout(car.description, 200); //fails
//a) Fix the setTimeout call by wrapping the call to car.description() inside a function
//b) Change the year for the car by creating a clone of the original and overriding it
//c) Does the delayed description() call use the original values or the new values from b)? Why?
//d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function
//e) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d)

setTimeout(() => car.description(), 400); 

let newCar = { ...car, year: 2020 };

setTimeout(() => newCar.description(), 600); //uses new values from b) because newCar is called

car.description = car.description.bind(car);
setTimeout(car.description, 800); 

let anotherCar = { ...car, model: 'Cayenne' };
setTimeout(anotherCar.description.bind(anotherCar), 1000); 

//Question 6
//Use the Function prototype to add a new delay(ms) function to all functions, which can be used to delay the call to that function by ms milliseconds.
function multiply(a, b) {
console.log( a * b );
}
//multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds
//a) Use the example multiply function below to test it with, as above, and assume that all
//delayed functions will take two parameters
//b) Use apply to improve your solution so that delayed functions can take any number of
//parameters
//c) Modify multiply to take 4 parameters and multiply all of them, and test that your
//delay prototype function still works.

Function.prototype.delay = function(ms) {
let func = this;
return function(...args) {
setTimeout(() => {
func.apply(this, args);
}, ms);
}
}

function multiply(a, b) {
console.log( a * b );
}

multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

function multiplyFour(a, b, c, d) {
console.log( a * b * c * d );
}

multiplyFour.delay(500)(2, 3, 4, 5); // prints 120 after 500 milliseconds   

//Question 7
//The following DigitalClock class uses an interval to print the time every second once started, until stopped.
class DigitalClock {
constructor(prefix) {
this.prefix = prefix;
}
display() {
let date = new Date();
//create 3 variables in one go using array destructuring
let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

if (hours < 10) hours = '0' + hours;
if (mins < 10) mins = '0' + mins;
if (secs < 10) secs = '0' + secs;
console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
}
stop() {
clearInterval(this.timer);
}
start() {
this.display();
this.timer = setInterval(() => this.display(), 1000);
}
}
const myClock = new DigitalClock('my clock:')
myClock.start()
//a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
//parameter precision – the number of ms between 'ticks'. This precision parameter
//should default to 1 second if not supplied.
//b) Create a new class AlarmClock that inherits from DigitalClock and adds the
//parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
//should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
//default to 07:00 if not supplied.

class PrecisionClock extends DigitalClock {
constructor(prefix, precision = 1000) {
super(prefix);
this.precision = precision;
}
start() {
this.display();
this.timer = setInterval(() => this.display(), this.precision);
}
}

class AlarmClock extends DigitalClock {
constructor(prefix, wakeupTime = '07:00') {
super(prefix);
this.wakeupTime = wakeupTime;
}
display() {
let date = new Date();
let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

if (hours < 10) hours = '0' + hours;
if (mins < 10) mins = '0' + mins;
if (secs < 10) secs = '0' + secs;
console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
if (`${hours}:${mins}` === this.wakeupTime) {
console.log('Wake Up!');
this.stop();
}
}
}

const myPrecisionClock = new PrecisionClock('my precision clock:', 500);
myPrecisionClock.start();

const myAlarmClock = new AlarmClock('my alarm clock:', '19:00');
myAlarmClock.start();   

//Question 8
//Using the following starter code, create a decorator function to validate function arguments
//as strings. Test it by decorating the given orderItems function below.
function orderItems(itemName) {
return `Order placed for: ${itemName}`;
}
// create a decorated version of the original function
//const validatedOrderItem = validateStringArg(orderItems);
//console.log(validatedOrderItem("Apple Watch")); // should run the function
//console.log(validatedOrderItem(123)); // should throw an error
//a) Create a decorator function validateStringArg(fn) which will validate an
//argument passed to fn to ensure that it is a string, throwing an error if not
//b) Extend orderItems to use the ... rest operator, allowing multiple item name
//arguments, and include them all in the returned string
//c) Extend the decorator function to validate as strings all arguments passed to fn
//d) When testing the decorated function, use try-catch blocks to handle errors thrown for non-string arguments

function validateStringArg(fn) {
return function(...args) {
for (let arg of args) {
if (typeof arg !== 'string') {
throw new Error('All arguments must be strings');
}
}
return fn.apply(this, args);
};
}

function orderItems(...itemNames) {
return `Order placed for: ${itemNames.join(', ')}`;
}

const validatedOrderItem = validateStringArg(orderItems);

try {
console.log(validatedOrderItem("Apple Watch", "iPhone",)); 
} catch (error) {
console.error(error.message);
}

try {
console.log(validatedOrderItem("Apple Watch", 123)); 
} catch (error) {
console.error(error.message);
}   

//Question 9
//We can delay execution of a function using setTimeout, where we need to provide both
//the callback function and the delay after which it should execute.
//a) Create a promise-based alternative randomDelay() that delays execution for a
//random amount of time (between 1 and 20 seconds) and returns a promise we can use
//via .then(), as in the starter code below
//b) If the random delay is even, consider this a successful delay and resolve the promise,
//and if the random number is odd, consider this a failure and reject it
//c) Update the testing code to catch rejected promises and print a different message
//d) Try to update the then and catch messages to include the random delay value

function randomDelay() {
return new Promise((resolve, reject) => {
const delay = Math.floor(Math.random() * 20) + 1; 
setTimeout(() => {
if (delay % 2 === 0) {
resolve(delay);
} else {
reject(delay);
}
}, delay * 1000); 
});
}   

randomDelay()
.then((delay) => console.log(`Success! There was a delay of ${delay} seconds.`))
.catch((delay) => console.log(`Failure! The delay of ${delay} seconds was odd.`));

//Question 10
//10.Fetch is a browser-based function to send a request and receive a response from a server,
//which uses promises to handle the asynchronous response.
//The below fetchURLData uses fetch to check the response for a successful status
//code, and returns a promise containing the JSON sent by the remote server if successful
//or an error if it failed. (To run this code in a node.js environment, follow the instructions in the
//comments before the function.)
//a) Write a new version of this function using async/await
//b) Test both functions with valid and invalid URLs
//c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
//using Promise.all to combine the results.
// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'
import fetch from 'node-fetch'
globalThis.fetch = fetch
function fetchURLData(url) {
let fetchPromise = fetch(url).then(response => {
if (response.status === 200) {
return response.json();
} else {
throw new Error(`Request failed with status ${response.status}`);
}
});
return fetchPromise;
}

fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));

async function fetchURLDataAsync(url) {
try {
const response = await fetch(url);
if (response.status === 200) {
const data = await response.json();
return data;
} else {
throw new Error(`Request failed with status ${response.status}`);
}
}
catch (error) {
throw error;
}
}

fetchURLDataAsync('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));

async function fetchMultipleURLs(urls) {
try {
const fetchPromises = urls.map(url => fetchURLDataAsync(url));
const results = await Promise.all(fetchPromises);
return results;
} catch (error) {
throw error;
}
}

const urls = [
'https://jsonplaceholder.typicode.com/todos/1',
'https://jsonplaceholder.typicode.com/todos/2',
'https://jsonplaceholder.typicode.com/todos/3'
];

fetchMultipleURLs(urls)
.then(data => console.log(data))
.catch(error => console.error(error.message)); 

