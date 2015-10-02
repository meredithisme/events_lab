console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	$('#imperatives').children().click(function() {
		var name = $(this).text();
		$('ul').append('<li>' + name + '</li>');
		console.log(name);
	});
});
