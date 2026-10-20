
import formatCurrency, {
  add,
  capitalize,
  APP_VERSION,
} from "./utils.js";

// 1. Arrow Functions
const square = (n) => n * n;

const greet = (name) => `Hello, ${name}!`;

const multiply = (a, b) => a * b;

const getFullName = (firstName, lastName) =>
  `${firstName} ${lastName}`;

console.log("Square:", square(4));
console.log("Greeting:", greet("Amaka"));
console.log("Multiplication:", multiply(3, 5));
console.log("Full name:", getFullName("Hilary", "Onuigbo"));

// 2. Destructuring
const student = {
  name: "Amaka",
  age: 22,
  course: "Frontend Development",
  city: "Abuja",
};

const scores = [88, 72, 95, 60, 45];

const { name, course } = student;
const { age: studentAge } = student;
const [firstScore, secondScore] = scores;

console.log("Student name:", name);
console.log("Course:", course);
console.log("Student age:", studentAge);
console.log("First score:", firstScore);
console.log("Second score:", secondScore);

// 3. Spread Operator
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express", "MongoDB"];

const fullStack = [...frontend, ...backend];

const userProfile = {
  username: "coder_ade",
  email: "ade@example.com",
};

const updatedProfile = {
  ...userProfile,
  email: "newemail@example.com",
};

console.log("Full stack:", fullStack);
console.log("Original profile:", userProfile);
console.log("Updated profile:", updatedProfile);

// 4. Template Literals
const nameForIntro = "Fatima";
const ageForIntro = 24;

const intro = `My name is ${nameForIntro} and I am ${ageForIntro} years old.`;

console.log(intro);

const width = 8;
const height = 5;
const area = width * height;

console.log(`The area of the rectangle is ${area}`);

// 5. Array Methods
const products = [
  { name: "Laptop", price: 450000, inStock: true },
  { name: "Mouse", price: 8000, inStock: true },
  { name: "Monitor", price: 120000, inStock: false },
  { name: "Keyboard", price: 15000, inStock: true },
];

const productNames = products.map((product) => product.name);

const inStockProducts = products.filter(
  (product) => product.inStock
);

const inStockProductNames = products
  .filter((product) => product.inStock)
  .map((product) => product.name.toUpperCase());

console.log("Product names:", productNames);
console.log("In-stock products:", inStockProducts);
console.log("In-stock names in uppercase:", inStockProductNames);

// 6. Ternary and Logical &&
const role = "editor";
const cartItems = 0;

const access =
  role === "admin"
    ? "Full Access"
    : role === "editor"
    ? "Edit Access"
    : role === "viewer"
    ? "Read Only"
    : "No Access";

console.log("Access:", access);

console.log(cartItems && "View Cart");
// Output: 0, because 0 is falsy and JavaScript
// returns the first falsy value in this expression.

const cartMessage =
  cartItems > 0 ? "View Cart" : "Cart is empty";

console.log("Cart message:", cartMessage);

// 7. ES Modules
console.log("Addition:", add(10, 5));
console.log("Capitalized:", capitalize("javascript"));
console.log("App version:", APP_VERSION);
console.log("Formatted currency:", formatCurrency(45000));