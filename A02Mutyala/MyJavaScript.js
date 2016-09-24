function myFunction(){
	var val = document.getElementsByName("optradio");
	var totalCost = 0;
	for(var i=0; i<val.length;i++){
		if(val[i].checked)
			totalCost += parseInt(val[i].value);
	}
	var answer= " <span style='font-size:300%' > $"+totalCost+"</span>";
	$("#total").html(answer);
	document.getElementById("qwerty").style.display = "block";
}	

function showAddressBox(){

	document.getElementById("asdf").style.display = "block";
	document.getElementById("abcd").style.display = "none";
}
function showAddress(){

	document.getElementById("abcd").style.display = "block";
	document.getElementById("asdf").style.display = "none";
}