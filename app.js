// Problem No: 01
// Days 0: HELLO WORLD

console.log("Hello, World!");
console.log(parameterVariable);

// Problem No: 02
// Days 0: DATA TYPES

console.log(firstInteger + Number(secondInteger));
console.log(firstDecimal + Number(secondDecimal));
console.log(firstDecimal + Number(secondDecimal));

// Problem No: 03
// Days 1: ARITHMETIC OPERTORS

area = length * width;
perimeter = 2 * (length + width);

// Problem No: 04
// Days 1: FUNCTIONS

function factorial(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
  }
  return sum;
}

// Problem No: 05
// Days 1: LET AND CONST

const PI = Math.PI;
// Reading Input
let r = readLine();
// Print the area of the circle:
console.log(PI * r * r);
// Print the perimeter of the circle:
console.log(2 * PI * r);

// Problem No: 06
// Day 2: Conditional Statements: If-Else

function getGrade(score) {
  let grade;
  // Write your code here
  if (score > 25 && score <= 30) grade = "A";
  if (score > 20 && score < 25) grade = "B";
  if (score > 15 && score < 20) grade = "C";
  if (score > 10 && score < 15) grade = "D";
  if (score > 5 && score < 10) grade = "E";
  if (score >= 0 && score < 5) grade = "F";
  return grade;
}

// Problem No: 07
// Day 2: Conditional Statements: Switch

function getLetter(s) {
  let letter;
  // Write your code here
  switch (s.charAt(0)) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      letter = "A";
      break;

    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      letter = "B";
      break;

    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
      letter = "C";
      break;

    default:
      letter = "D";
  }
  return letter;
}

// Problem No: 08
// Day 2: LOOPS

function vowelsAndConsonants(s) {
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] === "a" ||
      s[i] === "e" ||
      s[i] === "i" ||
      s[i] === "o" ||
      s[i] === "u"
    ) {
      console.log(s[i]);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (
      s[i] !== "a" &&
      s[i] !== "e" &&
      s[i] !== "i" &&
      s[i] !== "o" &&
      s[i] !== "u"
    )
      console.log(s[i]);
  }
}


// Problem No: 09
// Day 3: Array

function getSecondLargest(nums) {
  // Complete the function
  const compare = (a, b)=>{
      return a - b
  }
  nums.sort(compare)
  for(let i = nums.length-1;i--; ){
      if(nums[i] != nums[i-1]){
          return nums[i-1]
      }
  }
 }
let res =  getSecondLargest([2,3,5,6,6])
console.log(res);


// Problem No: 10
// Day 3: try,catch and finally

function reverseString(s) {
  try{
      res = s.split("").reverse().join("");
  }catch(err){
      console.log(err.message);
  }finally{
      console.log(res)
  }
}
reverseString("1234");


// Problem No: 11
// Day 3: Throw

function isPositive(a) {
  if(a>0) return "YES";
  else if(a == 0 ) throw new Error ("Zero Error");
  else throw new Error ("Negative Error");
}


// Problem No: 12
// Day 4: Create a Rectangle Object

function Rectangle(a, b) {
  const obj = {
      length: a,
      width: b,
      perimeter:2*(a+b),
      area: a*b
  }
  return obj;
}

// Problem No: 13
// Day 4: Count Objects

function getCount(objects) {
  let res = 0;
  for(let i=0; i< objects.length; i++){
      if(objects[i].x === objects[i].y) res++
  }return res;
}


// Problem No: 14
// Day 4: Classes


class Polygon {
  constructor (arr1) {
      this.arr2 = arr1;
  }
  perimeter(){
     let sum = 0;
     for(let i=0; i<this.arr2.length; i++){
         sum += this.arr2[i];
     } 
     return sum;
  }
}


// Problem No: 15
// Day 5: inhertance

//.1
Rectangle.prototype.area = function (){
  return this.h * this.w;
}

//.2
class Square extends Rectangle{
  constructor(side){
      super(side, side);
      this.s2 = side;
  }
}


// Problem No: 16
// Day 5: Tempalte, Litrals

function sides(literals, ...expressions) {
  let a = expressions[0];
  let p = expressions[1];
  let arr = [];
  
  let s1 = (p+Math.sqrt((p*p)-(16*a)))/4;
  let s2 = (p-Math.sqrt((p*p)-(16*a)))/4;
  
  arr.push(s1);
  arr.push(s2);
  
  arr.sort();
  return arr;
  
}


// Problem No: 17
// Day 5: Arrow Functions


const modifyArray = (nums) => {
  for(let i=0; i< nums.length; i++){
      if(nums[i]%2 === 0){
          nums[i] = nums[i]*2;
      }else{
          nums[i] = nums[i]*3;
      }
  }
  return nums;
}


// Problem No: 18
// Day 6: Bitwise operator

const getMaxLessThanK = (n, k)=>{
  let res = 0;
  for(let i=1; i<n; i++){
      for(let j=i+1; j<=n; j++){
          let answer = i & j;
          if(answer > res && answer < k){
              res = answer;
          }
      }
  }
  return res;
}