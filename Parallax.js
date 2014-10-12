// Detect if the browser is IE or not.
// If it is not IE, we assume that the browser is NS.
var IE = document.all?true:false;

// If NS -- that is, !IE -- then set up for mouse capture
if (!IE) document.captureEvents(Event.MOUSEMOVE);

// Set-up to use getMouseXY function onMouseMove
document.onmousemove = getMouseXY;

// Temporary variables to hold mouse x-y pos.s
var tempX = 0;
var tempY = 0;

var WindowWidth = window.outerWidth
var windowHeight = window.outerHeight

var objectArray = [];

fillObjectArray();
positionDivs();


function fillObjectArray()
{
	var DashDiv = document.getElementById("HnnghMain");
	   var DashX = (window.outerWidth / 100) * DashGlobalX;
	   var DashY = (window.outerHeight / 100) *  DashGlobalY;
	var DashFactor = 0.10; 
	var DashArray = [];
	DashArray.push(DashDiv, DashX, DashY, DashFactor);
	objectArray.push(DashArray);


    }

// Main function to retrieve mouse x-y pos.s

function getMouseXY(e)
{

	  if (IE)
	  {
		// grab the x-y pos.s if browser is IE
		tempX = event.clientX + document.body.scrollLeft;
		tempY = event.clientY + document.body.scrollTop;
	  } 
	  else 
	  {
		// grab the x-y pos.s if browser is NS
		tempX = e.clientX;
		tempY = e.clientY;
	  }  
	  // catch possible negative values in NS4
	  if (tempX < 0){tempX = 0;}
	  if (tempY < 0){tempY = 0;}  
	  
	 
      moveDiv(tempX);
    return true;
}
function moveDiv(tempX)
{	
	for (var i=0;i<objectArray.length;i++)
	{
		var yourDivPositionX = objectArray[i][3] * (0.5 * window.outerWidth - tempX) + objectArray[i][1];
		objectArray[i][0].style.left = yourDivPositionX + 'px';
        var yourDivPositionY = objectArray[i][3] * (0.5 * window.outerHeight - tempY) + objectArray[i][2];
        objectArray[i][0].style.top = yourDivPositionY + 'px';
	}
}

function positionDivs()
{
	for (var i=0;i<objectArray.length;i++)
	{
		objectArray[i][0].style.left = objectArray[i][1] + "px";
		objectArray[i][0].style.top = objectArray[i][2] + "px";
	}
}
