var div =document.querySelector("div");
var isBlue = false;
var isOrange=false;


setInterval(function(){
	if(isBlue){
		div.style.background = "orange";

	}
	
	else{
		if(isOrange)
	{
		div.style.background="#3498db"
	}
		else{
			div.style.background="#FF0000";
		}
		isOrange=!isOrange;
		
	}
	isBlue=!isBlue;


	

},1000);
