//Class
//Encapsulation
class FullStackClasses{
    constructor(classNum, students) {
        this.classNum = classNum;
        this.students = students;
        this.mentor = "Kelvin";
    }
    studentNum(){
        return this.students.length;
    }
}

let class75 = new FullStackClasses(75, ["John", "Jane", "James"]);
console.log('class75', class75, class75.studentNum());

//Inheritance
class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(this.name + ' makes a noise.');
    }
}

class Dog extends Animal{
    eat(){
        console.log(this.name + ' barks.');
    }
}

let dog = new Dog('Rex');
dog.speak();
dog.eat();

//Polymorphism
//overriding or overloading
class Shape{
    area(){
        console.log('Shape area');
    }
}
class Rectangle extends Shape{
    constructor(length,width) {
        super();
        this.length = length;
        this.width = width;
    }
    //overriding
    area(){
        console.log('Rectangle area: ', this.length * this.width);
    }
}
let shapes = new Rectangle(10, 5);
shapes.area();
