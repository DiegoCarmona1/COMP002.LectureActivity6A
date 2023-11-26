myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

for (let i = 0; i < myGrades.length; i++) {
    myAverage += myGrades[i];

}
myAverage = myAverage / myGrades.length

console.log("My grade average is " + myAverage);
class InputError extends error {}
function except(myNumber){
    if (isNaN(myNumber)){
        throw new error ("Invalid Input, Must Enter Numbers")
    }
    while (true) {
        let myNumber = promptForNumber ();
        try {
            let result = except(myNumber);
        }
        catch (error) {
            console.log("Please Enter Only Numeric Values!");
        }
    }
    return myNumber
}
console.log("My favorite number is " + except(6))