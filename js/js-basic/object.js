//key value pair

let car={
    color: 'red',
    mileage: 100000,
    weight:400,
    make: 'lexus',
    imported: false,
    tires: ['Michelin', "Michelin", 'goodyear', 'goodyear'],
    engine: {
      cylinders: 4,
      size: 2.2
    },
    start: function() {
        console.log('I am ', this.make, 'vroom vroom');
    },
    owner: {
      name: 'John Doe',
      age: 30
    }
}

let carArr =[];
carArr.push(car);

//key
//key is string
//can not contain space, special characters, or start with a number
//value can be any data type

//change value of key
car.color = 'blue';
console.log(car.color);

//add new key value pair
car.year = 2000;
console.log(car.year);

//delete key value pair
delete car.year;
console.log(car.year);

//find key
console.log('color' in car);

//hasOwnProperty same as in
console.log(car.hasOwnProperty('color'));

//for in loop
for (let key in car) {
    console.log(key, car[key]);
}

//entries, it returns an array of key value pairs
console.log(Object.entries(car));

//if a candidate is found with at least one matching skill, print the candidate;
//the candidate with the best coverage of the requested skills will be found;
let candidates = [
    {
        id: "person1",
        name:"John",
        skills:["express","mongodb","redis","nodejs"]
    },
    {
        id: "person2",
        name:"Amy",
        skills:["mongodb","redis","nodejs", "js", "express"]
    },
    {
        id: "person3",
        name:"Tom",
        skills:["express","nodejs"]
    },
];
const skillsArray=["express", "mongodb", "redis", "js", "nodejs"];
//find the candidate with the best coverage of the requested skills
let bestCandidate = null;
let skillsMatched = 0;

for (let candidate of candidates) {
    let matched = 0;
    for (let skill of skillsArray) {
        if (candidate.skills.includes(skill)) {
            matched++;
        }
    }
    if (matched > skillsMatched) {
        skillsMatched = matched;
        bestCandidate = candidate;
    }
}
console.log(bestCandidate);
console.log(skillsMatched);



