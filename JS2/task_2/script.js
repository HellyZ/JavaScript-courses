var characters = [{
    'name': 'barney',
    'age': 36
  },
  {
    'name': 'fred',
    'age': 40
  },
  {
    'name': 'helly',
    'age': 24
  },
  {
    'name': 'alex',
    'age': 27
  },
  {
    'name': 'harry'
  }
]

function pluck(arr_obj, field) {
  var arr2 = [];
  for (i in arr_obj) {
    arr2.push(arr_obj[i][field]);
  };
  return arr2;
}

console.log(pluck(characters, 'name'));