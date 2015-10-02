console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	$('input').on('click', function(e) {
	e.preventDefault();
	//$(this).get('<iframe width="420" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>');

});
  $("#time").text( Date.now() );

});
