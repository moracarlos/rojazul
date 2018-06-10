$(window).resize(function(){
 	adjustLine();
});

$(document).ready(function(){
	adjustLine();
});

function adjustLine(){
	var x = $('#description-section').height();
	$('#line-container').attr('height', x);   
	$('#vertical-line').attr('y2', x);   
}