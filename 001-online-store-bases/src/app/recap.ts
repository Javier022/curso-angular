const username: string | number = "test";

const sum = (a: number, b: number): number => a + b;

sum(10, 20);

// class Person {
//   age: number;
//   lastname: string;

//   constructor(age: number, lastname: string) {
//     this.age = age;
//     this.lastname = lastname;
//   }
// }
class Person {
  constructor(public age: number, public lastname: string) {}
}

const personOne = new Person(10, "test");
