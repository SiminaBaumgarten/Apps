
function handleButtonClick(param){
	let outputValue=document.getElementById('output').innerHTML;
	if(outputValue === '0'){
		document.getElementById('output').innerHTML = param;
	}else{
		document.getElementById('output').innerHTML = outputValue + param;
	}
}

function calculate() {

	let value = document.getElementById("output").innerHTML;
	let finalValue = eval(value);
	document.getElementById('output').innerHTML = finalValue;
}

function clearOutput() {
	document.getElementById('output').innerHTML='0';
}