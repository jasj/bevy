var fbLoginSuccess = function (userData) {
    alert("UserInfo: " + JSON.stringify(userData));
    facebookConnectPlugin.getAccessToken(function(token) {
        alert("Token: " + token);
    }, function(err) {
        alert("Could not get access token: " + err);
    });
}

facebookConnectPlugin.browserInit(1522117891429463);
