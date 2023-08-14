function myBind(func, context, ...partialArgs) {
  return function(...args) {
    let allArgs = partialArgs.concat(args);

    return func.apply(context, allArgs)
  }
}

function addNumbers(a, b) {
  return a + b;
}

const addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15