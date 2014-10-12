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

//setting the Initial Window Width and Height to compare later
var WindowWidth = window.outerWidth
var WindowHeight = window.outerHeight

var objectArray = new Array();

fillObjectArray();
positionDivs();

function fillObjectArray()
{

var DashDiv = document.getElementById("HnnghMain");
	var DashX = (window.outerWidth / 100) * DashGlobalX; //position div from half width of the page
	var DashY = (window.outerHeight / 100) * DashGlobalY;
	var DashFactor = 0.16; //parallax shift factor, the bigger the value, the more it shift for parallax movement
	var DashArray = new Array();
	DashArray.push(DashDiv, DashX, DashY, DashFactor);
	objectArray.push(DashArray);

	var Cloud1Div = document.getElementById("HnnghClouds1");
	var Cloud1X = (window.outerWidth / 100) * CloudGlobalX;
	var Cloud1Y = (window.outerHeight / 100) * CloudGlobalY;
	var Cloud1Factor = 0.02;
	var Cloud1Array = new Array();
	Cloud1Array.push(Cloud1Div, Cloud1X, Cloud1Y, Cloud1Factor);
	objectArray.push(Cloud1Array);

    var FactoryDiv = document.getElementById("HnnghFactory");
	var FactoryX = (window.outerWidth / 100) * FactoryGlobalX;
	var FactoryY = (window.outerHeight / 100) * FactoryGlobalY;
	var FactoryFactor = 0.01;
	var FactoryArray = new Array();
	FactoryArray.push(FactoryDiv, FactoryX, FactoryY, FactoryFactor);
	objectArray.push(FactoryArray);

    var HouseDiv = document.getElementById("HnnghHouse");
    var HouseX = (window.outerWidth / 100) * HouseGlobalX;
    var HouseY = (window.outerHeight / 100) * HouseGlobalY;
    var HouseFactor = 0.04;
    var HouseArray = new Array();
    HouseArray.push(HouseDiv, HouseX, HouseY, HouseFactor);
    objectArray.push(HouseArray);

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
    //If window height or width changed from initial values, recalculate formula and refill object array
     if (WindowHeight !== window.outerHeight)
    {
        WindowHeight = window.outerHeight
        WindowWidth = window.outerWidth
        fillObjectArray();
    }
    else if (WindowWidth !== window.outerWidth)
    {
      WindowHeight = window.outerHeight
        WindowWidth = window.outerWidth
        fillObjectArray();
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
