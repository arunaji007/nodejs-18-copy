// ❌ array-callback-return
[1, 2, 3].map((n) => {
  console.log(n); // No return here → triggers array-callback-return
});

// ❌ constructor-super
class BadChild extends Object {
  constructor() {
    // forgot super() → triggers constructor-super
    this.x = 42;
  }
}

// ❌ for-direction
for (let i = 0; i < 10; i--) { // condition goes up, counter goes down → triggers for-direction
  console.log(i);
}
