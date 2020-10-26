class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGretting() {
    return `Hi my name is ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} y/o`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    return `${description}, major: ${this.major || 'a bum'}`;
    // return `${this.name} is ${this.age} y/o, Major: ${this.major}`;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasHomeLocation()) {
      greeting = `${greeting}. I'm visitin from ${this.homeLocation}`;
    }

    return greeting;
  }
}

const me = new Student('Moti Elmakies', 41, 'Computer Science');
const other = new Student('Anna Blanki', 32);
const traveler = new Traveler('Scott Land', 25, 'Israel');
// console.log(traveler.hasHomeLocation());
const peopoles = [me, other, traveler];

peopoles.forEach((p) => {
  console.log(p.getGreeting());
  console.log(p.getDescription());
  //   console.log(p instanceof Traveler);
});
