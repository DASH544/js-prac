//JS OBJECTS

const person1 = {
  firstName: "dash",
  lastName: "edward",
  age: 23,
  isEmployed: true,
  sayhello: function () {console.log(`hello world,your name is ${this.firstName}`)},
};
const person2 = {
  firstName: "daesh",
  lastName: "edwaeerd",
  age: 24,
  isEmployed: true,
  sayhello: function() {console.log(`hello world,your name is ${this.firstName}`)},
};
person1.sayhello();
person2.sayhello();

//constructor

function car(make,model,year,color)
{
  this.make=make,
  this.model=model,
  this.year=year,
  this.color=color,
  this.drice=function (){console.log(`you drive the ${make} and the model is ${model}`)}
}
const car1=new car(`Ford`,`F-150`,2012,`red`);
const car2=new car(`Dodge`,`Challenger`,2019,`black`);
const car3=new car(`Lotus`,`Emiera`,2023,`white`);
car1.drice();
car2.drice();
car3.drice();
//CLASSES ES6 FEATURE

class product
{
  constructor(item,price)
  {
    this.item=item;
    this.price=price;
  }
  displayproduct()
  {
    console.log(`Product:${this.item}`);
    console.log(`Price:$${this.price}`);
    console.log(`THE TOTAL PRICE  IS:${this.salesTax()}`);
  }
  salesTax()
  {
    
  const tax=0.05;
  return (this.price+(this.price*tax)).toFixed(2);
  }
}
const bill=new product(`Shirt`,19.99);
bill.displayproduct();

//STATIC keyword

class user
{
  static usercount=0;
  constructor(name,age)
  {
    this.name=name;
    this.age=age;
    user.usercount++;
  }
  displayuser()
  {
    console.log(`there are ${user.usercount} user online`);
  }
}
const u1= new user(`dash`,22);
const u2= new user(`dash3`,11);
const u3= new user(`dash2`,12);
console.log(user.usercount);
 

class circle
 {
    static pi=3.14159;
    static circumference(radius)
    {
      return 2*circle.pi*radius;
    }
    static area(radius)
    {
      return 2*circle.pi*radius*radius;
    }
 }
 console.log(circle.pi);
 console.log(circle.circumference(10));
 console.log(circle.area(20));

//INHERITANCE

class animal
{
  alive=true;
  eat()
  {
    console.log(`the ${this.name} is eating`);
  }
  sleep()
  {
    console.log(`the ${this.name} is sleeping`);
  }
}
class rabbit extends animal
{
  fun()
  {
    console.log('i am a rabbit');
  }
  name="rabbit";
}
class owl extends animal
{
  fun()
  {
    console.log('i am a rabbit');
  }
  name="owl";
}
const ra1=new rabbit;
const ow1=new owl;
ow1.eat();
ow1.fun();
ra1.fun();
ra1.sleep();
//SUPER KEYWORD
class animal
{
  constructor(name,type)
  {
    this.name=name;
    this.type=type;
  }
  fast(speed)
  {
    console.log(`the speed of the ${this.name} is ${this.speed} mph`);
  }
}
class owl extends animal
{
  constructor(name,type,speed)
  {
    super(name,type);
    this.speed=speed;
  }
  fly(){
  super.fast(this.speed);
  }
}
const ow1=new owl(`owll`,`fly`,25);
ow1.fly();
//getters and setters

class area {
  constructor(radius, pi) {
    this.radius = radius;
    this.pi = pi;
  }
  set radius(newRadius) {
    if (!(newRadius <= 0)) {
      this._radius = newRadius;
    } else {
      console.error(`radius cannot be xero`);
    }
  }
  get radius() {
    return this._radius;
  }
}
const a1 = new area(0, 3.14159);
console.log(a1.radius);

//DESTRUCTURE

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);
const colors = ["red", "green", "black", "white", "blue"];
[colors[0], colors[3]] = [colors[3], colors[0]];
const [firstcol, secdcold, ...remainingcolors] = colors;
console.log(firstcol, secdcold);
console.log(remainingcolors);
const person1 = {
  firstName: "spongebob",
  lastName: "squarepants",
  age: 30,
  job: "frycook",
};
const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 35,
};
const { firstName, lastName, age, job = "Unemployed" } = person2;
function display({ firstName, lastName, age, job = "Unemployed" }) {
  console.log(`Name:${firstName} ${lastName}`);
  console.log(`Age:${age}`);
  console.log(`Job:${job}`);
}
display(person2);
console.log(firstName, lastName, age, job);

//Nested objects
//simple nested obj

const person1 = {
  fname: "sponge",
  lname: "bob",
  age: 34,
  hobbies: ["sleeping", "boxing", "karate"],
  address: {
    street: "12 lane 8",
    city: "ocean",
    country: "waters",
  },
};
console.log(person1.address);
for (const pro in person1.address) {
  console.log(person1.address[pro]);
}
class Person{
  constructor(fname, lname,age,...address) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.address = new Address(...address);
  }
}
class Address {
  constructor(street,city,country) {
    this.street=street;
    this.city=city;
    this.country=country;
  }
}
const pen= new Person("spone","bob",34,"23 strret","city2","country5");
console.log(pen.address.city);
