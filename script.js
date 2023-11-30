myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

for (let i = 0; i < myGrades.length; i++) {
    myAverage += myGrades[i];

}
myAverage = myAverage / myGrades.length

console.log("My grade average is " + myAverage);
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
    return number * 5;
}
console.log (exceptCheck(10))
