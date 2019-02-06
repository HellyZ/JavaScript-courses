var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");

function getFigure() {
  let figure_checked;
  let figure = document.getElementsByName("figure");
  if (figure[0].checked) {
    figure_checked = 'circle';
  } else if (figure[1].checked) {
    figure_checked = 'square';
  } else if (figure[2].checked) {
    figure_checked = 'ellipse'
  } else if (figure[3].checked) {
    figure_checked = 'rectangle';
  }
  return figure_checked;
};

function getParameters(figure_event) {

  let fig_selected = getFigure();

  if (getFigure() == 'circle') {
    $('#num-two').hide();
    let radius = parseFloat(numOne.value) || 0;
    DrawFigure(fig_selected, radius);
  } else if (getFigure() == 'square') {
    $('#num-two').hide();
    let side = parseFloat(numOne.value) || 0;
    DrawFigure(fig_selected, side);
  } else if (getFigure() == 'ellipse') {
    let radius1 = parseFloat(numOne.value) || 0;
    let radius2 = parseFloat(numTwo.value) || 0;
    DrawFigure(fig_selected, radius1, radius2);
  } else if (getFigure() == 'rectangle') {
    let side1 = parseFloat(numOne.value) || 0;
    let side2 = parseFloat(numTwo.value) || 0;
    DrawFigure(fig_selected, side1, side2);
  }

};


function DrawFigure(figure_checked, x, y) {
  if (figure_checked == 'circle') {
    console.log($('.figure_view'));
    $('.figure_view').css('width', x + 'px');
    $('.figure_view').css('height', x + 'px');
    $('.figure_view').css('backgroundColor', 'red');
    $('.figure_view').css('border-radius', '50%');
  } else if (figure_checked == 'ellipse') {
    $('.figure_view').css('width', x + 'px');
    $('.figure_view').css('height', y + 'px');
    $('.figure_view').css('backgroundColor', 'blue');
    $('.figure_view').css('border-radius', '150px 100px');
  } else if (figure_checked == 'rectangle') {
    $('.figure_view').css('width', x + 'px');
    $('.figure_view').css('height', y + 'px');
    $('.figure_view').css('backgroundColor', 'gold');
  } else if (figure_checked == 'square') {
    $('.figure_view').css('width', x + 'px');
    $('.figure_view').css('height', x + 'px');
    $('.figure_view').css('backgroundColor', 'green');
  }
};

numOne.addEventListener("input", getParameters);
numTwo.addEventListener("input", getParameters);
