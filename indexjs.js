var Gx = 0;
var Gy = 0;
var Px = 0;
var Py = 0;
var horizontalChange = 0;
var verticalChange = 0;
var impulseResearch;
var verticaltime;
var horizontaltime;
//below array holds the times in seconds for each ship when going vertical
timeVerticals = [900,720,515,450,330,300];
var originalVerticalTime = 0; // this variable will hold original vertical time for each ship

function readinputs(){
	Gx = document.getElementById("Gx").value
	Px = document.getElementById("Px").value
	Gy = document.getElementById("Gy").value
	Py = document.getElementById("Py").value

	//this code will read the selected values for research impulse
	impulseResearch = (100-(4*document.getElementById("impulseResearch").value))/100; // 4 is for %
	
	verticalChange = Math.abs(Py-Px)
	horizontalChange = Math.abs(Gx-Gy)-1
	//document.getElementById("Results").value =horizontal

	//This section is to check which ships are on the fleets

	if(document.getElementById("colonyship").checked==true){
		originalVerticalTime = timeVerticals[0]
	}else if (document.getElementById("bomber").checked==true) {
		originalVerticalTime = timeVerticals[1]
	}else if (document.getElementById("cruiser").checked==true) {
		originalVerticalTime = timeVerticals[2]
	}else if (document.getElementById("destroyer").checked==true || document.getElementById("battleship").checked==true) {
		originalVerticalTime = timeVerticals[3]
	}else if (document.getElementById("nemesis").checked==true) {
		originalVerticalTime = timeVerticals[4]
	}else if (document.getElementById("interceptor").checked==true) {
		originalVerticalTime = timeVerticals[5]
	}else{
		document.getElementById("Results").value ="Complete all Fields"
		return
	}

	verticaltime =(impulseResearch*originalVerticalTime)*(verticalChange);
	//the time without impulse is 555 second when going to next galaxy
	horizontaltime = impulseResearch*550 + 10*horizontalChange*impulseResearch

	//convert format to hhmmss
	var resultstime = secondsToTime(Math.ceil(verticaltime+horizontaltime))
	var hours = resultstime.h; if (hours==0){ hours = "00"}
	var minutes = resultstime.m;
	var seconds = resultstime.s;
	//display
	document.getElementById("Results").value = ("").concat(hours,":",minutes,":",seconds);
	console.log(secondsToTime(Math.ceil(verticaltime+horizontaltime)))

}
function secondsToTime(secs)
{
    var hours = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);

    var obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
    };
    return obj;
}

document.getElementById("outputtime").addEventListener("click", readinputs);