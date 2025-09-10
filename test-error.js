class MyBase {
  constructor() {
    console.log("Base constructor");
  }
}

class MyChild extends MyBase {
  constructor() {
    console.log("Child constructor"); // ❌ ESLint error: "constructor-super"
  }
}

const c = new MyChild();
