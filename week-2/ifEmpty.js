function isEmpty(){
	var x = document.getElementById("demo").value;
	if(x.trim() == "" || x.trim() == 'null'){
	 document.getElementById("auto").innerHTML = "TRUE";
		
	}
	else{
		document.getElementById("auto").innerHTML = "FALSE";
	}
}

 function isReset(){
	//document.getElementById("demo").innerHTML = " ";
	var a = document.getElementById("demo");
	a.value= a.defaultValue;
}
