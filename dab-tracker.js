function incrementProgressBar(elementId, overallElementId, amount) {
	
	if (updateProgressBar(elementId, amount)) {
		updateProgressBar(overallElementId, amount);
	}
}

function updateProgressBar(elementId, amount) {
	var progressBar = document.getElementById(elementId);
    
    var maxValue = parseInt(progressBar.getAttribute("max"))
    var currValue = parseInt(progressBar.getAttribute("value"))

    if (currValue + amount > maxValue || currValue + amount < 0){
    	return false;
    }

    currValue += amount;

    progressBar.setAttribute("value", currValue);
    
    var filler = progressBar.firstElementChild;
    filler.style.width = (currValue/maxValue)*100 + "%";

    return true;
}