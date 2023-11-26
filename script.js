myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

for (let i = 0; i < myGrades.length; i++) {
    myAverage += myGrades[i];

}
myAverage = myAverage / myGrades.length

console.log("My grade average is " + myAverage);

function except(myNumber){
    if (isNaN(myNumber)){
        throw new Error ("Invalid Input, Must Enter Numbers")
    }

    return myNumber
}
console.log("My favorite number is " + except(6))