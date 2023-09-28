for (i = 1; i <= 10; i++) {
    console.log(i, "x", 10, "=", (i * 10));

}

for (i = 1; i <= 100; i++) {
    for (j = 1; j <= 10; j++) {
        console.log(j, "x", j, "=", (i * j));

    }
}





// // function 

function namta(number) {
    for (i = 1; i <= 10; i++) {
        console.log(i, "x", 10, "=", (i * 10));

    }
}


const studentsName = ["Rohul", "Mehedi", "Asha", "Dipu"]
studentsName.push("Joy")
studentsName.pop();

studentsName.unshift("soyeb vai")
console.log(studentsName);


for (const name of studentsName) {
    console.log(name + " " + "Khan");
}


const details = { name: "Rohul", age: 21, course: "Diploma", roll: 419316 }
const nameStorer = details.name
const ageStorer = details.age
const courseStorer = details.course
const rollStorer = details.roll
console.log(nameStorer);
console.log(ageStorer);
console.log(courseStorer);
console.log(rollStorer);


const developer = { name: "Rohul", Designation: "Developer", Salary: 35000 }

const keysOrPropertyName = Object.keys(developer)
console.log("Property name =", keysOrPropertyName)

const propertyValues = Object.values(developer);
console.log("Property Values=", propertyValues);


function maramariKorbo() {
    console.log("start maramari with the bad man")
}
maramariKorbo()

function add() {
    console.log(2 + 3);
}
add();


function jogKorbo(value1, value2) {
    console.log(value1 + value2)
}

jogKorbo(15, 50);


function multiply(value3, value4) {
    console.log(value3 * value4)
}
multiply(12, 10);