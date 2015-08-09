function showCat(params){
	
}



$('.titles>tbody>tr>td>div').tap(function(){
	var color = $(this).children().css('backgroundColor');
	var icono = $(this).children('i').attr('class').split(" ");
	icono.pop();
	$(".catSearch").css({"border-color" : color});
	$('#categoryTopbar').css('backgroundColor',color);
	$('#categoryTopbar>i').html("<span class='"+icono.join(" ")+"'></span> "+$(this).children().text());
	changePage("Cat",{
		"category": $(this).children().text()
	});
});