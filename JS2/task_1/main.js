var gen = function(start, step) {
  return start*step;
};

var take = function(fun, x) {
  var arr = [];
  for (let i = 0; i < x; i++) {
    let y = fun(i, x);
    arr.push(y);
  }
  return arr;
};

console.log(take(gen, 3));
console.log(take(gen, 7));
