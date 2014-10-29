var theImages = new Array()

theImages[0] = 'https://rainbowdashalwaysdressesinstyle.com/Tumblr/Avvys/35.png'
theImages[1] = 'https://rainbowdashalwaysdressesinstyle.com/Tumblr/Avvys/45.png'


var theEmbedCode = new Array()

theEmbedCode[0] = 'VX6KjdeI6KU'
theEmbedCode[1] = 'b1smWr5xrS8'

var theExtras = new Array()

theExtras[0] = ''
theExtras[1] = '&start=5&end=13'

var theType = new Array()

theType[0] = 'RenderVideo()'
theType[1] = 'RenderVideo()'

var j = 0
var p = theImages.length;

var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theImages[i]
}
//it's rigged for now, for the purpose of testing
var whichImage = Math.round(Math.random()*(p-1));

function showImage(){
document.write('<img src="'+theImages[whichImage]+'" class="avvy" onclick="ShowStuff();'+theType[whichImage]+'">');
}

function RenderVideo(){
document.getElementById("toggle").innerHTML = '<object width="720" height="405"><param name="movie" value="https://www.youtube.com/v/'+theEmbedCode[whichImage]+'?autoplay=1&controls=0&disablekb=1&modestbranding=1&rel=0&showinfo=0&autohide=1&version=3"></param><param name="allowFullScreen" value="true"></param><param name="allowScriptAccess" value="always"></param><embed src="https://www.youtube.com/v/'+theEmbedCode[whichImage]+'?autoplay=1&controls=0&disablekb=1&modestbranding=1&rel=0'+theExtras[whichImage]+'&showinfo=0&autohide=1&version=3" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="720" height="405"></embed></object>';
}

function DerenderVideo(){
    document.getElementById("toggle").innerHTML = "IGNOREME"
}