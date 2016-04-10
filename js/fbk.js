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
		
		FB.login(function(response) {
    if (response.authResponse) {
     console.log('Welcome!  Fetching your information.... ');
     FB.api('/me', function(response) {
       console.log('Good to see you, ' + response.name + '.');
     });
    } else {
     console.log('User cancelled login or did not fully authorize.');
    }
});
	}catch(e){ alert(2);}
	
  };
 

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   
   
   try{
	facebookConnectPlugin.login([], fbLoginSuccess, function(){alert("samp")})
}catch(e){
	alert(e);
}
