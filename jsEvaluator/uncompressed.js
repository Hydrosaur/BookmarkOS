function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (document.getElementById(elmnt.id + "header")) {
		/* if present, the header is where you move the DIV from:*/
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	} else {
		/* otherwise, move the DIV from anywhere inside the DIV:*/
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		document.onmouseup = null;
		document.onmousemove = null;
	}
}

jQuery("head").append("<style>#jsCalculator {position: fixed;z-index: 996;background-color: #f1f1f1;border: 1px solid #d3d3d3;text-align: left;}#jsCalculatorheader {font-family: sans-serif;padding: 10px;cursor: move;z-index: 997;background-color: #2196F3;color: #fff;}#jsCalculatorheader button {float: right;background-color: #6dbeff;border:none;margin-left: 5px;} #jsCalculatorButton {width: 100%;font-family: sans-serif;}</style>");
jQuery("body").append("<div id='jsCalculator'><div id='jsCalculatorheader'>Evaluator <button id='closeJsCalculator'>&times;</button></div><textarea placeholder='Input' id='jsCalculatorInput'></textarea><br/><textarea placeholder='Output' id='jsCalculatorOutput' readonly></textarea><br/><button id='jsCalculatorButton'>Calculate</button></div>");

jQuery("#closeJsCalculator").click(function(e){
	jQuery("#jsCalculator").remove();
});

jQuery("#jsCalculatorButton").click(function(e){
	jQuery("#jsCalculatorOutput").val(eval(jQuery("#jsCalculatorInput").val()))
});

dragElement(jQuery("#jsCalculator")[0]);