var fbLoginSuccess = function (userData) {
    alert("UserInfo: " + JSON.stringify(userData));
    facebookConnectPlugin.getAccessToken(function(token) {
        alert("Token: " + token);
    }, function(err) {
        alert("Could not get access token: " + err);
    });
}

//facebookConnectPlugin.browserInit(1522117891429463);

$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: 1522117891429463
      version: 'v2.5' // or v2.0, v2.1, v2.2, v2.3
    });     
    $('#loginbutton,#feedbutton').removeAttr('disabled');
    FB.getLoginStatus(updateStatusCallback);
  });
});

try{
facebookConnectPlugin.login([], fbLoginSuccess, function(){alert("samp")})
}catch(e){
	alert(e);
}