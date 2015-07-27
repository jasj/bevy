

$('.titles>tbody>tr>td>div').tap(function(){
	$('#Categories').css('visibility','hidden');
	var color = $(this).children().css('backgroundColor');
	var icono = $(this).children('i').attr('class').split(" ");
	icono.pop();
	$('#mainTopbar').hide();
	$('#categoryTopbar').css('visibility','visible');
	$('#categoryTopbar').css('backgroundColor',color);
	$('#categoryTopbar>i').html("<span class='"+icono.join(" ")+"'></span> "+$(this).children().text());


	});

$('.logo').tap(function(){
    $('#mainTopbar').show();
    $('#categoryTopbar').css('visibility','hidden');
    $('#Categories').css('visibility','visible');
    $('#Categories').css('visibility','visible');
});

$('.productos').tap(function(){
    $('#mainTopbar').show();
    $('#categoryTopbar').css('visibility','hidden');
    
    
    $.ajax({
        type: 'POST',
        headers: {
            'X-Parse-Application-Id': "4Jk8CSceDfb4XQyXyZbduEkdu4BD2H4Jt1IIoJy1",
            'X-Parse-REST-API-Key': "HuKvI1lsOLsdZ2DxeMC3k2QKqncFgldMzr1ruRX6"
        },
        url: "https://api.parse.com/1/classes/PRODUCTO"

    }).done(function (data) {
        alert(data);
    });
    
    
    

});