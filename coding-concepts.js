// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Hotel 2023"
//console.log(cohort.split(" "))

// a) Your answer: ["H", "o", "t", "e", "l", " ", "2", "0", "2", "3"]
// b) Verify and explain: Correct output is [ 'Hotel', '2023' ].  The reason is because there is a space character " " in the string "Hotel 2023", so when you use .split(" "), it looks for that character in order to seperate them and store them as items in an array.  My answer would work if it logged as cohort.split("").  

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
//console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student
// b) Verify and explain: The output is undefined.  The reason it is undefined because there is no 'return' key word on line 20.  It will return Hello, Learn Student if line 20 includes return in front of the string.

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
//console.log(onlyOdds)

// a) Your answer:[11, 13, 15]
// b) Verify and explain: It returns the array with only odd numbers because .filter only pushes elements to the back of the array if the condition is true for the current iteration.  In this case the condition is set by number % 2 !== 0 which is true for 11,13,15.  

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
//console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: Outputs Javascipt because because you are calling on the key-value pair using the .notation.  Also since the value of the language key is an array, you can access its elements by the use of indexes.  

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: {student: "George" , cohort: "Hotel", year: 2023}
// b) Verify and explain: in line 57, you are passing the string "George" to the parameter in the constructor.  Although there is no order, it associated 'name' in the parameter to 'name' in line 52.  So it passes George to this.student.  The reason it returns the entire Class object is because line 53 and line 52 are default items.
