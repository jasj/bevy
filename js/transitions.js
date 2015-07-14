

$('.titles>tbody>tr>td>div').tap(function(){
	var color = $(this).children().css('backgroundColor');
	$('#mainTopbar').hide();
	$('#categoryTopbar').css('visibility','visible');
	$('#categoryTopbar').css('backgroundColor',color);
	$('#categoryTopbar>i').html($(this).children().text());
	$('#Categories').css('visibility','hidden');

	});

$('#back').tap(function(){

	
	$('#mainTopbar').show();
	$('#categoryTopbar').css('visibility','hidden');
	$('#Categories').css('visibility','visible');
	$('#Categories').css('visibility','visible');
	
	
});