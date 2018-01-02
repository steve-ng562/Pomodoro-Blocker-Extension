var minutes = 25;
var seconds = 0;
var breakTime = 5;
var onBreak = false;
var onStartClick = false;

$(document).ready(function(){
$(".btn-success").click(function(){
	onStartClick = true;
});

interval = setInterval(function(){
callInterval();
},1000);

function callInterval(){
	if(onStartClick == false && onBreak == false){
		return;
	}else if(onStartClick == true && onBreak == true){
		minutes = breakTime;
		onBreak = false;
	}
	if(seconds == 0){
		if(minutes == 0){
			timerEnded();
			return;
		}
		seconds = 59;
		minutes--;
	}else{
		seconds--;
	}
	updateText();
}
 function timerEnded(){
        onStartClick = false;
        onBreak = true;
    }
function updateText(){
	$(".minutes").text(toDoubleDigit(minutes));
	$(".seconds").text(toDoubleDigit(seconds));
}


 function toDoubleDigit(num){
        if(num < 10){
            return "0" + parseInt(num,10);
        }
        return num;
    }
});