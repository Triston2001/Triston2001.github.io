
	document.getElementById('button-show').onclick = function () {
		console.log("Capturamos el evento click");
		document.getElementById("demo").style = "display: block";
		document.getElementById("button-hidden").style = "display: block";
		document.getElementById("button-show").style = "display: none";
		
	}

	document.getElementById('button-hidden').onclick = function () {
		console.log("Capturamos el evento click");
		document.getElementById("demo").style = "display: none";
		document.getElementById("button-hidden").style = "display: none";
		document.getElementById("button-show").style = "display: block";
		
	}