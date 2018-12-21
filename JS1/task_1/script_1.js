var color;
var img = 'default.jpg';
var memory;

color = prompt('Input phone color: (black/gray/gold)');

img = color + '.jpg';

memory = prompt('Input memory size: (64/128/256)');

if (memory==64 || memory==128 || memory==256) {
  price = (memory == 64) ? 529 : ((memory == 128) ? 579 : ((memory==256) ? 629 : ('Invalid memory size')));
} else {
  img = 'default.jpg';
  memory = 'Invalid memory size. This model can have only 64 Gb, 128 Gb, 256 Gb memory size.';
  price = '-';
}

document.write('<h1> Image: <img width="250" src= ' + img + '> </h1>');
document.write('<h2> Color: ' + color + '</h2>');
document.write('<h2> Memory size: ' + memory + ' Gb</h2>');
document.write('<h1> Price: ' + price + '$ </h1>');