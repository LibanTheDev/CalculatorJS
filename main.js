

	var expression="";

  var answer=0;
  var value="";


$(document).ready(function(){

//document ready


//button clicked
$(".btn").click(function() {

	value = $(this).val();
	expression+=value;
	$('.textbox').val(expression);
	answer =eval(expression);
	



});

	

$(".answer").on("click", function() {
    $('.textbox').val(answer);
  });
  

$(".clear").on("click", function() {
    expression = "";
    answer =0;
    $('.textbox').val(expression);
  });




});


