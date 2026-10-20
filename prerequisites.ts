
 // 1. Basic Types
let studentName: string = "Tunde";
let studentAge: number = 21;
let isEnrolled: boolean = true;

// Incorrect: number type was assigned a string value.
// Correction: courseName should have the type string.
let courseName: string = "Frontend Development";

console.log(studentName, studentAge, isEnrolled, courseName);

// 2. Typed Functions
function addNumbers(a: number, b: number): number {
  return a + b;
}

function isAdult(age: number): boolean {
  return age >= 18;
}

function getArea(width: number, height: number): number {
  return width * height;
}

console.log(addNumbers(10, 5));
console.log(isAdult(21));
console.log(getArea(8, 5));

// 3. Objects and Interfaces
interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
  isActive: boolean;
}

const studentOne: Student = {
  id: 1,
  name: "Amaka",
  age: 22,
  course: "Frontend Development",
  isActive: true,
};

const studentTwo: Student = {
  id: 2,
  name: "Tunde",
  age: 21,
  course: "Frontend Development",
  isActive: true,
};

interface Instructor {
  name: string;
  cohort: number;
  subjects: string[];
}

function introduceInstructor(
  instructor: Instructor
): string {
  return `${instructor.name} teaches Cohort ${instructor.cohort} and covers: ${instructor.subjects.join(", ")}`;
}

const instructorOne: Instructor = {
  name: "Stanley",
  cohort: 8,
  subjects: ["HTML", "CSS", "JavaScript"],
};

console.log(studentOne);
console.log(studentTwo);
console.log(introduceInstructor(instructorOne));

// 4. Arrays and Union Types
let names: string[] = ["Ada", "Bola", "Chidi"];
let scores: number[] = [78, 90, 55, 88];

function formatId(id: string | number): string {
  return String(id);
}

console.log(names);
console.log(scores);
console.log(formatId(42));    // "42"
console.log(formatId("abc")); // "abc"