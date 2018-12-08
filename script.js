var firstName = "Dale";
var lastName = "Saul";
var age = 43;
var likesTravel = true;
console.log(firstName, lastName, age, likesTravel);

movieArray = ["A Clockwork Orange", "Dogma", "Hot Rod"]
console.log(movieArray)

var williamGrades = [62, 97, 99, 85, 73, 97];
console.log(williamGrades[0]);
console.log(williamGrades[5]);
var sum = williamGrades[0] + williamGrades[1] + williamGrades[2] + williamGrades[3] 
+ williamGrades[4] +williamGrades[5];
var avgGrade = sum / williamGrades.length;
console.log(avgGrade);

var emilyObject = {
    firstName: "Emily",
    lastName: "Blunt",
    age: 35,
    favoriteFood: "pizza",
    hobbies: ["singing", "playing the cello", "flying with her umbrella"]
    }
console.log(emilyObject.firstName);

var fullName = `${emilyObject.firstName} ${emilyObject.lastName}`;
console.log(fullName);
var stuffs = `Emily Blunt loves pizza. Who can blame her. It's the perfect food.`;
console.log(stuffs);
console.log(emilyObject.hobbies[0]);
console.log(emilyObject.hobbies[1]);
console.log(emilyObject.hobbies[2]);
