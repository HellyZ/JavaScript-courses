// Спрашивать цвет/память циклически. До тех пор пока пользователь не введет валидные данные или не нажмет “Отмена“. 
var inlut;
var isCancel = false;
var color;
var memory;
var avaliable_colors = ['black','gray','gold'];
var avaliable_ram = ['64','128','256'];

do {
  var flag = false;
  

  while (!avaliable_colors.includes(color)) {
    color = prompt('Input color : (black/gray/gold)');
    if (color == null ) {
      isCancel = true;
      
      break
    };
   };
  
  if (isCancel) {
    console.log("CANCELED after step 1");
    color = "default";
    memory = "256";
    break;
  };
  
  while (!avaliable_ram.includes(memory)) {
    memory = prompt('Input memory size (64/128/256): ');
    if (memory == null) {
      isCansel = true;
      break
    };
  };
  if (isCancel) {
    console.log("CANCELED after step 2");
    color = "default";
    memory = "256";
    break
  };
  flag = true
} while (!flag);

document.write('<img src="' + color + '.jpg" width=250px><br>');
document.write('Memory size: ' + memory + ' Gb <br>');

