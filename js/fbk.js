var fbLoginSuccess = function (userData) {
    alert("UserInfo: " + JSON.stringify(userData));
    facebookConnectPlugin.getAccessToken(function(token) {
        alert("Token: " + token);
    }, function(err) {
        alert("Could not get access token: " + err);
    });
}
//facebookConnectPlugin.browserInit(1522117891429463);



 window.fbAsyncInit = function() {
	alert(1);
	try{
	   FB.init({
		  appId      : "1522117891429463",
		  xfbml      : true,
		  version    : 'v2.5'
		});
		   try{
	facebookConnectPlugin.login([], fbLoginSuccess, function(){alert("samp")})
}catch(e){
	alert(e);
}
	
	}catch(e){ alert(2);}
	
  };
 


   
   

