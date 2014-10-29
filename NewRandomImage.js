var theImages = new Array()

theImages[0] = 'http://rainbowdashalwaysdressesinstyle.com/Tumblr/Avvys/1.png'
theImages[1] = 'http://rainbowdashalwaysdressesinstyle.com/Tumblr/Avvys/2.png'
theImages[2] = 'http://rainbowdashalwaysdressesinstyle.com/Tumblr/Avvys/3.png'
theImages[3] = 'http://rainbowdashalwaysdressesinstyle.com/Tumblr/Avvys/4.png'
theImages[4] = 'http://rainbowdashalwaysdressesinstyle.com/Tumblr/Avvys/5.png'
theImages[5] = 'http://rainbowdashalwaysdressesinstyle.com/Tumblr/Avvys/6.png'

var theEmbedCode = new Array()

theEmbedCode[0] = ''

var j = 0
var p = theImages.length;

var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theImages[i]
}

var whichImage = Math.round(Math.random()*(p-1));
function showImage(){
document.write('<img src="'+theImages[whichImage]+'" class=avvy> </a>');
}
