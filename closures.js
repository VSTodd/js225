function makeMultipleLister(num) {
  return function() {
    for (let counter = num; counter < 100; counter += num) {
      console.log(counter);
    }
  }
}

//let lister = makeMultipleLister(13);
//lister();

let total = 0;

function add(num) {
  console.log(total += num);
}

function subtract(num) {
  console.log(total -= num);
}

//add(1);
//add(42);
//subtract(39);
//add(6);