function* foo(x) {
  try {
    yield 1;
  } catch (err) {
    console.log(err);
  }
  yield 2;
  throw "Hello!";
}

function* bar() {
  try {
    yield* foo();
    console.log("never get here")
  } catch (err) {
    console.log(err);
  }
}

var it = bar();


try {
  console.log(it.next()); //1
  console.log(it.throw("ei!")); //e1 //2
  console.log(it.next()); //hello // undifeined
} catch (err) {
  console.log("never get here")
}
console.log(it.next());// undi


export { };