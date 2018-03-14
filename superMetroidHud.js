/**
Javascript specific to the SM hud application
*/

var CommandQueue = new Queue();
var timer;

function checkForLocation(location, element) {
	return getData("F5" + location.Address, function(){
		dataView = new DataView(reader.result);
		result = dataView.getUint8(0)
		found = (result & location.Value) > 0;
		// console.log("Got " + found + " response (" + result + ") for item " + location.Name + " with address " + location.Address + ", " + location.Value)

		

		if(found) {
			if (element.classList.contains("found")) {
				return;
			}
			
			element.classList.add("found")
			incrementProgressBarForLocation(location);
		} else {
			element.classList.remove("found")
		}
	})
}

function incrementProgressBarForLocation(location){

	switch(location.Area){
		case "Crateria":
			switch(location.ItemType){
				case "ENERGY_TANK":
					javascript:incrementProgressBar('crateriaEtanks', 'overallEtanks', 1);
					break;	
				case "RESERVE":
					javascript:incrementProgressBar('crateriaMissiles', 'overallMissiles', 1);
					break;	
				case "SUPER":
					javascript:incrementProgressBar('crateriaMissiles', 'overallMissiles', 1);
					break;	
				case "MISSILE":
					javascript:incrementProgressBar('crateriaEtanks', 'overallEtanks', 1);
					break;	
				case "POWER_BOMB":
					javascript:incrementProgressBar('crateriaPowerBombs', 'overallPowerBombs', 1);
					break;
			}
			break;

		case "Brinstar":
			switch(location.ItemType){
				case "ENERGY_TANK":
					javascript:incrementProgressBar('brinstarEtanks', 'overallEtanks', 1);
					break;	
				case "RESERVE":
					javascript:incrementProgressBar('brinstarMissiles', 'overallMissiles', 1);
					break;	
				case "SUPER":
					javascript:incrementProgressBar('brinstarMissiles', 'overallMissiles', 1);
					break;	
				case "MISSILE":
					javascript:incrementProgressBar('brinstarEtanks', 'overallEtanks', 1);
					break;	
				case "POWER_BOMB":
					javascript:incrementProgressBar('brinstarPowerBombs', 'overallPowerBombs', 1);
					break;
			}
			break;

		case "WreckedShip":
			switch(location.ItemType){
				case "ENERGY_TANK":
					javascript:incrementProgressBar('wreckedShipEtanks', 'overallEtanks', 1);
					break;	
				case "RESERVE":
					javascript:incrementProgressBar('wreckedShipMissiles', 'overallMissiles', 1);
					break;	
				case "SUPER":
					javascript:incrementProgressBar('wreckedShipMissiles', 'overallMissiles', 1);
					break;	
				case "MISSILE":
					javascript:incrementProgressBar('wreckedShipEtanks', 'overallEtanks', 1);
					break;	
				case "POWER_BOMB":
					javascript:incrementProgressBar('wreckedShipPowerBombs', 'overallPowerBombs', 1);
					break;
			}
			break;
		
		case "Maridia":
			switch(location.ItemType){
				case "ENERGY_TANK":
					javascript:incrementProgressBar('maridiaEtanks', 'overallEtanks', 1);
					break;	
				case "RESERVE":
					javascript:incrementProgressBar('maridiaMissiles', 'overallMissiles', 1);
					break;	
				case "SUPER":
					javascript:incrementProgressBar('maridiaMissiles', 'overallMissiles', 1);
					break;	
				case "MISSILE":
					javascript:incrementProgressBar('maridiaEtanks', 'overallEtanks', 1);
					break;	
				case "POWER_BOMB":
					javascript:incrementProgressBar('maridiaPowerBombs', 'overallPowerBombs', 1);
					break;
			}
			break;

		case "Norfair":
			switch(location.ItemType){
				case "ENERGY_TANK":
					javascript:incrementProgressBar('norfairEtanks', 'overallEtanks', 1);
					break;	
				case "RESERVE":
					javascript:incrementProgressBar('norfairMissiles', 'overallMissiles', 1);
					break;	
				case "SUPER":
					javascript:incrementProgressBar('norfairMissiles', 'overallMissiles', 1);
					break;	
				case "MISSILE":
					javascript:incrementProgressBar('norfairEtanks', 'overallEtanks', 1);
					break;	
				case "POWER_BOMB":
					javascript:incrementProgressBar('norfairPowerBombs', 'overallPowerBombs', 1);
					break;
			}
			break;
		default:
			break; 
	}
}

function checkAllItems() {
	checkItemList(ALL_ITEMS)
}

function checkItemList(items) {
	for (var i = 0; i < items.length; i++) {
		mutex = true;
		var item = items[i];
		CommandQueue.enqueue(item)		
	}
}


function processQueue() {
	if(!CommandQueue.isEmpty()) {
		item = CommandQueue.peek();
		if (checkForLocation(item, document.getElementById("location_" + item.Address + "_" + item.Value))) {
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