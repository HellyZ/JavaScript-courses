// Создать массив со всеми существующими памятями и сделать проверку того что пользователь вводит с каждым из них и вывести соответсвующую цену к паямти (нужно применять объекты и массивы)
var memory;
var phones = {
  color: ['black', 'gray', 'gold'],
  price: [529, 579, 629],
  memory: [64, 128, 256]
};

output: while (true) {
  memory = prompt('Input memory size (64, 128, 256): ');
  for (var i = 0; i < phones.memory.length; i++) {
    if (+memory === phones.memory[i]) {
      break output;
    }
    else if (memory === null){
      document.write('Goodbye.');
      break output;
      }
    }
  }
goend: while (memory !== null) {
    color = prompt('Input phone color (black, gray, gold): ').toLowerCase();
    for (var i = 0; i < phones.color.length; i++){
      if (color === phones.color[i]){
        document.write('<img src="' + color + '.jpg" width=250px><br>');
        var phonePrice = phones.price[i] + '$ <br>';
        document.write('Price: '+ phonePrice);
        document.write('Memory size:'+ memory + '<br>');
        document.write('Color: '+ color);
        break goend;
      }
      else if (color === null) {
        document.write('Goodbye!');
        document.write('<img src="default.jpg" width=100px>');
        break goend;
      }
    }
  }
