
var timer;
var CommandQueue = new Queue();

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

function checkForLocation(location, elementName) {
    addToQueue("F5" + location.Address, function(){
        dataView = new DataView(reader.result);
        result = dataView.getUint16(0, true)
        found = (result & location.Value) > 0;

        element = document.getElementById(elementName);

        if(found) {
            if (element.classList.contains("found")) {
                return;
            }

            element.classList.add("found")
            incrementProgressBarForLocation(location);
        } else {
            element.classList.remove("found")
        }
    });
}

function checkAllItems() {
    checkItemList(ALL_ITEMS)
}

function checkItemList(items) {
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        checkForLocation(item, "location_" + item.Address + "_" + item.Value);
    }
}


function addToQueue(address, callback) {
    var entity = {address: address, callback: callback};
    CommandQueue.enqueue(entity);
}

function processQueue() {
    if(!CommandQueue.isEmpty()) {
        item = CommandQueue.peek();
        if (getData(item.address, item.callback)){
            CommandQueue.dequeue();
        }
    }   
}

function checkQueue() {
    if(CommandQueue.isEmpty) {
        checkAllItems();
    }

    processQueue(); 
}

function togglePolling() {
    if(timer){
        clearInterval(timer)
        timer = undefined
        document.getElementById("pollToggle").innerHTML = "Start Polling"
    } else {
        timer = window.setInterval(checkQueue, 10)
        document.getElementById("pollToggle").innerHTML = "Stop Polling"

    }
}


function incrementProgressBarForLocation(location){

    switch(location.Area){
        case "Crateria":
            switch(location.ItemType){
                case "ENERGY_TANK":
                    javascript:incrementProgressBar('crateriaEtanks', 'overallEtanks', 1);
                    break;  
                case "RESERVE":
                    break;  
                case "SUPER":
                    javascript:incrementProgressBar('crateriaSupers', 'overallSupers', 5);
                    break;  
                case "MISSILE":
                    javascript:incrementProgressBar('crateriaMissiles', 'overallMissiles', 5);
                    break;  
                case "POWER_BOMB":
                    javascript:incrementProgressBar('crateriaPowerBombs', 'overallPowerBombs', 5);
                    break;
            }
            break;

        case "Brinstar":
            switch(location.ItemType){
                case "ENERGY_TANK":
                    javascript:incrementProgressBar('brinstarEtanks', 'overallEtanks', 1);
                    break;  
                case "RESERVE":
                    break;  
                case "SUPER":
                    javascript:incrementProgressBar('brinstarSupers', 'overallSupers', 5);
                    break;  
                case "MISSILE":
                    javascript:incrementProgressBar('brinstarMissiles', 'overallMissiles', 5);
                    break;  
                case "POWER_BOMB":
                    javascript:incrementProgressBar('brinstarPowerBombs', 'overallPowerBombs', 5);
                    break;
            }
            break;

        case "WreckedShip":
            switch(location.ItemType){
                case "ENERGY_TANK":
                    javascript:incrementProgressBar('wreckedShipEtanks', 'overallEtanks', 1);
                    break;  
                case "RESERVE":
                    break;  
                case "SUPER":
                    javascript:incrementProgressBar('wreckedShipSupers', 'overallSupers', 5);
                    break;  
                case "MISSILE":
                    javascript:incrementProgressBar('wreckedShipMissiles', 'overallMissiles', 5);
                    break;  
                case "POWER_BOMB":
                    javascript:incrementProgressBar('wreckedShipPowerBombs', 'overallPowerBombs', 5);
                    break;
            }
            break;
        
        case "Maridia":
            switch(location.ItemType){
                case "ENERGY_TANK":
                    javascript:incrementProgressBar('maridiaEtanks', 'overallEtanks', 1);
                    break;  
                case "RESERVE":
                    break;  
                case "SUPER":
                    javascript:incrementProgressBar('maridiaSupers', 'overallSupers', 5);
                    break;  
                case "MISSILE":
                    javascript:incrementProgressBar('maridiaMissiles', 'overallMissiles', 5);
                    break;  
                case "POWER_BOMB":
                    javascript:incrementProgressBar('maridiaPowerBombs', 'overallPowerBombs', 5);
                    break;
            }
            break;

        case "Norfair":
            switch(location.ItemType){
                case "ENERGY_TANK":
                    javascript:incrementProgressBar('norfairEtanks', 'overallEtanks', 1);
                    break;  
                case "RESERVE":
                    break;  
                case "SUPER":
                    javascript:incrementProgressBar('norfairSupers', 'overallSupers', 5);
                    break;  
                case "MISSILE":
                    javascript:incrementProgressBar('norfairMissiles', 'overallMissiles', 5);
                    break;  
                case "POWER_BOMB":
                    javascript:incrementProgressBar('norfairPowerBombs', 'overallPowerBombs', 5);
                    break;
            }
            break;
        default:
            break; 
    }
}