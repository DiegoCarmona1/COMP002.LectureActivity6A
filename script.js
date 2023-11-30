myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

for (let i = 0; i < myGrades.length; i++) {
    myAverage += myGrades[i];

}
myAverage = myAverage / myGrades.length

console.log("My grade average is " + myAverage);

class BugError extends Error{
}

function exceptCheck (number) {
   if (isNaN(number)) {
    throw new InputError ("Invalid Input Must Use NUmbers")
   }
   if (number < 0) {
    throw new InputError ("Invalid Input, Must use Positive values")
   }
   if (number > 100) {
    throw new InputError ("Invalid Input, Must use value smaller than 100")
   }
   if (isFinite(number)){
    throw new BugError ("no more numbers")
   }
    return number * 5;
}
console.log (exceptCheck(0))
try {
    console.log(exceptCheck(6))
} catch (error) {
    if (error instanceof BugError) {
        console.log("no more monkeys")
    } else {
    console.log("Please Enter numeric values only")
}} finally {
    console.log("Please run numbers between 0 - 100")
}
