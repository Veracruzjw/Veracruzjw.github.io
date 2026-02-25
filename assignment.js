// 1. Nested Data Navigation Task

const schoolData = {
  name: "Bright Academy",
  classrooms: [
    {
      roomNumber: "101",
      teacher: { name: "Mr. Smith", subject: "Math" },
      students: [
        { id: 1, name: "Alice", grades: [85, 90, 78] },
        { id: 2, name: "Bob", grades: [70, 65, 80] }
      ]
    },
    {
      roomNumber: "102",
      teacher: { name: "Ms. Johnson", subject: "Science" },
      students: [
        { id: 3, name: "Charlie", grades: [92, 88, 95] }
      ]
    }
  ]
};

console.log("The name of the teacher in Room 101 is " + schoolData.classrooms[0].teacher.name + ".");

console.log("Alice's second grade is " + schoolData.classrooms[0].students[0].grades[1] + ".");

console.log("Charlie is a student in room " + schoolData.classrooms[1].roomNumber + ".");



// 2. Quadratic Equation Task ("Almighty Formula":  (-b+(sqrt((b**2)-4ac)))/2a or (-b-(((b**2)-4ac)**0.5))/2a
let a = 1, b = 2, c = 3;

const solveQuadratic = (a,b,c) => {
    let squareRootPart = ((b**2) - 4 * a * c);

    if (squareRootPart >= 0) {
        const answer1 = (- b + ((squareRootPart)**0.5)) / (2 * a);
        const answer2 = (- b - ((squareRootPart)**0.5)) / (2 * a);

        return [answer1, answer2];

    } else {
        let complexAns = "This is too complex for you";
        return complexAns;
    }
}

console.log("Values are: " + (solveQuadratic(1,-3,2)));

// 3. Core JavaScript logic (Loops & If-Else)

( >= 50) ? console.log("Pass"): console.log("Fail");


// 4. Basic JavaScript Utility Task
let numBers = [10, 20, 30, 40, 50];
numBers.push(60);
console.log(numBers);

numBers.shift(10);
console.log(numBers);

const checkNum = numBers => {
    return numBers > 25;
};
newNum = numBers.filter(checkNum);

console.log(newNum);