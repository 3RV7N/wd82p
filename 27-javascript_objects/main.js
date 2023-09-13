//JavaScript Objects

const fruits = ["apple", "orange", "banana"];

// key: value
// Create an object
const user = {
  name: "Carlo",
  age: 28,
  isAdmin: true,
  "likes birds": true,
};

// Read values in an objects
user.name;
user.isAdmin;
user.age;
user["likes birds"];

// Remove value in an object
delete user.age;

// Add/Change values in an object
user.job = "Software Engineer";
user.isAdmin = false;

//property value shorthand
function makeUser(name, age) {
  return {
    name,
    age,
  };
}

let user2 = makeUser("John", 30);
let user3 = makeUser("Peter", 50);

console.log(user2);
console.log(user3);

// Property names limitations
let obj = {
  return: 3,
  0: "test",
};

//loop in an object
for (let key in user) {
  console.log(user[key]);
}

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+63": "Philippines",
  "+1": "USA",
};

for (let code in codes) {
  console.log(code);
}

let user = {};
user.name: "John";
user.surname: "Smith";
user.name = "Pete";
delete user.name;

console.log(user);

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }

  return true;
}

let schedule = {};
schedule.time = "8:30";

console.log(isEmpty(schedule));

funtion sumAllSalaries(salaries) {
  let sum = 0;

  for (let salary in salaries) {
    sum += salaries[key];
  }

  return sum;
}

let salaries ={
  John: 100,
  Ann: 160,
  Pete:
}

console.log(sumAllSalaries(salaries));