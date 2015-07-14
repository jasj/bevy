

$('.titles>tbody>tr>td>div').tap(function(){
	$('#Categories').css('visibility','hidden');
	var color = $(this).children().css('backgroundColor');
	$('#mainTopbar').hide();
	$('#categoryTopbar').css('visibility','visible');
	$('#categoryTopbar').css('backgroundColor',color);
	$('#categoryTopbar>i').html($(this).children().text());


	});

$('#back').tap(function(){

	
	$('#mainTopbar').show();
	$('#categoryTopbar').css('visibility','hidden');
	$('#Categories').css('visibility','visible');
	$('#Categories').css('visibility','visible');
	
	
});