$(document).ready(function () {
  $('#figureVars').css("visibility", "hidden");

  function getFigure() {

    $('input[name="figures"]').prop('checked', false);

    $('.figureType :input').each(function () {

      $(this).change(function () {
        let y = $(this).attr("id");

        if ((y == 'circle') || (y == 'square')) {

          $('#figureVars').css("visibility", "visible");
          $('.secondInput').css('visibility', 'hidden');
        } else {
          $('#figureVars').css("visibility", "visible");
        }
      });

    });

  };

});