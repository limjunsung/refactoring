// 값 캡슐화하기
class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }

  get lastName() {
    return this._lastName;
  }
  get firstName() {
    return this._firstName;
  }
}

let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };
export function defaultOwner() {
  return new Person(defaultOwner);
}
export function setDefaultOwner(arg) {
  defaultOwnerData = arg;
}
