$(window).resize(function(){
 	adjustLine();
});

$(document).ready(function(){
	adjustLine();
});

function adjustLine(){
	var x = $('#description-section').height();
	//$('#line-container').attr('height', x);   
	$('#vertical-line').attr('y2', x);   
}


//Form

$('#form-send').click(function(){
	console.log("clicking");
	postToGoogle();
});

function postToGoogle() {
            var field1 = $('#form-name').val();
            var field2 = $('#form-email').val();
            var field3 = $('#form-message').val();
            if (field1 != "" && field2!='' && field3 != ''){
	            $.ajax({
		            url: "https://docs.google.com/forms/d/1HTnKwKm0LqYu6TPxztid70kMZ5wZMhltejEBcyRYcUI/formResponse",
		            data: { "entry.168901583": field1,
		            	    "entry.318579115": field2,
		            		"entry.784853374": field3},
		            type: "POST",
		            crossDomain:true,
		            dataType: "xml",
		            statusCode: {
		                0: function() {
		                    //Success message
		                    console.log("Sent");
		                },
		                200: function() {
		                    //Success Message
		                    console.log("Sent");
		                }
		            }
       	 		});
	        }
}