/**
Javascript specific to the SM hud application
*/

var CommandQueue = new Queue();
var timer;

function checkForLocation(location, elementName) {
	addToQueue("F5" + location.Address, function(){
		dataView = new DataView(reader.result);
		result = dataView.getUint16(0, true)
		found = (result & location.Value) > 0;

		// element = document.getElementById(elementName);


		// if(found) {
		// 	if (element.classList.contains("found")) {
		// 		return;
		// 	}

		// 	element.classList.add("found")
		// 	incrementProgressBarForLocation(location);
		// } else {
		// 	element.classList.remove("found")
		// }
	});
}

function checkAllItems() {
	checkItemList(ALL_ITEMS)
}

function checkItemList(items) {
	for (var i = 0; i < items.length; i++) {
		mutex = true;
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
	if(CommandQueue.isEmpty()) {
		checkbox = document.getElementById("autopollItemsCheckbox");
		if (checkbox.checked == true) {			
			checkAllItems();
		}
		updateAllEnemyInfo();
		updateIgt();
		updateReserveLevel();
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

function setEnemyElementClass(index) {
	enemyElement = document.getElementById("enemy" + index);
	enemyElement.classList = ["enemy-image", "enemy-" + enemyClass.toString(16)]
}

let enemyHealthAddresses = [
							"F50F8C", 
							"F50FCC",
							"F5100C",
							"F5104C",
							"F5108C",
							"F510CC",
							"F5110C",
							"F5114C",
							"F5118C",
							"F511CC",
							"F5120C",
							"F5124C",
							"F5128C",
							"F512CC",
							"F5130C",
							"F5134C",
							"F5138C",
							"F513CC",
							"F5140C",
							"F5144C",
							"F5148C",
							"F514CC",
							"F5150C",
							"F5154C",
							"F5158C",
							"F515CC",
							"F5160C",
							"F5164C",
							"F5168C",
							"F516CC",
							"F5170C",
							"F5174C"
							];

let enemyIdAddresses = [
							"F50F78", 
							"F50FB8",
							"F50FF8",
							"F51038",
							"F51078",
							"F510B8",
							"F510F8",
							"F51138",
							"F51178",
							"F511B8",
							"F511F8",
							"F51238",
							"F51278",
							"F512B8",
							"F512F8",
							"F51338",
							"F51378",
							"F513B8",
							"F513F8",
							"F51438",
							"F51478",
							"F514B8",
							"F514F8",
							"F51538",
							"F51578",
							"F515B8",
							"F515F8",
							"F51638",
							"F51678",
							"F516B8",
							"F516F8",
							"F51738"
							];

//let's ignore some set of enemies
let blacklistedEnemies = [
	//Ship
	0xd07f,
	0xd0bf,

	//polyp
	0xd1ff,

	//shutters
	0xd4ff,
	0xd53f,
	0xd57f,
	0xd5bf,
	0xd5ff,

	//elevator
	0xd73f,

	//kamer
	0xd83f,

	//dragon parts
	0xde7f,
	0xdebf,
	0xdeff,

	//kzan
	0xdfff,
	0xe03f,

	//kraid parts
	0xe2ff,
	0xe33f,
	0xe37f,
	0xe3bf,
	0xe3ff,
	0xe47f,

	//phantoon parts
	0xe4ff,
	0xe53f,
	0xe57f,

	//koma
	0xea7f,

	//spark
	0xea7f,

	//wings
	0xeaff,
	0xeb7f,
	0xebff,

	//bugs
	0xd87f,

]


var igtHours = 0;
var igtMinutes = 0;
var igtSeconds = 0;

function updateIgt() {
	addToQueue("f509dc", function() {
		dataView = new DataView(reader.result);
		result = dataView.getUint16(0, true);
		igtSeconds = result;	
	});

	addToQueue("f509de", function() {
		dataView = new DataView(reader.result);
		result = dataView.getUint16(0, true);
		igtMinutes = result;	
	});

	addToQueue("f509e0", function() {
		dataView = new DataView(reader.result);
		result = dataView.getUint16(0, true);
		igtHours = result;	

		document.getElementById("ingameTime").innerHTML = "IGT:  " + (igtHours).pad() + ":" + (igtMinutes).pad() + ":" + (igtSeconds).pad();
	});
}

function updateAllEnemyInfo() {
	for(let i = 0; i < enemyIdAddresses.length; i++) {
		//get enemyId
		addToQueue(enemyIdAddresses[i], function() {
			dataView = new DataView(reader.result);
			result = dataView.getUint16(0, true)
			enemyElement = document.getElementById("enemy" + i)
			if (result == 0 || blacklistedEnemies.indexOf(result) >=0) {				
				if (!enemyElement.classList.contains("dead")){
					enemyElement.classList.add("dead")
				}
				return;
			} else {

				enemyElement.classList.remove("dead")

				enemyImageElement = document.getElementById("enemy" + i + "-image");
				enemyImageElement.classList = ["enemy-image enemy-" + result.toString(16)];
			}
		} )

		//get enemy health
		addToQueue(enemyHealthAddresses[i], function() {
			dataView = new DataView(reader.result);
			result = dataView.getUint16(0, true)
			if (result == 0) {
				enemyElement = document.getElementById("enemy" + i)
				enemyElement.classList.add("dead")
			}
			enemyHealthElement = document.getElementById("enemy" + i + "-health");
			enemyHealthElement.innerHTML = result
		} )
	}
}

function updateReserveLevel() {
	addToQueue("F509D6", function() {
		dataView = new DataView(reader.result);
		result = dataView.getUint16(0, true);
		reserveEnergy = document.getElementById("reserveEnergy")
		reserveEnergy.innerHTML = "NRG in Reserves: " + result;
	})
}


//item hud
let itemTypeLookup = {
	"MAJOR":"na",
	"RESERVE":"Reserve",
	"ENERGY_TANK":"Etank",
	"MISSILE":"Missiles",
	"SUPER":"Supers",
	"POWER_BOMB":"PowerBombs"
}

let incrementAmounts = {
	"MAJOR":"na",
	"RESERVE": 1,
	"ENERGY_TANK": 1,
	"MISSILE": 5,
	"SUPER": 5,
	"POWER_BOMB": 5
}

let locationTracking = {}
resetItemsFound();

function resetItemsFound() {
	for(let i = 0; i < ALL_ITEMS.length; i++) {
		locationTracking[ALL_ITEMS[i].Address + ALL_ITEMS.Value] = false;
	}
}

function checkAllItems() {
    checkItemList(ALL_ITEMS)
}

function checkItemList(items) {
    for (var i = 0; i < items.length; i++) {

        var item = items[i];

		if(itemTypeLookup[item.ItemType] == "na") {
			continue;
		}

    	if(locationTracking[item.Address + item.Value] == true) {
    		//we've already tracked this one.
    		continue;
    	}
        checkForLocation(item);
    }
}

function checkForLocation(location, elementName) {
    addToQueue("F5" + location.Address, function(){
        dataView = new DataView(reader.result);
        result = dataView.getUint16(0, true)
        found = (result & location.Value) > 0;

        element = document.getElementById(elementName);

        if(found) {

            if (locationTracking[location.Address + location.Value]) {
                return;
            }

            markLocationVisited(location);

            locationTracking[location.Address + location.Value] = true;

        } else {
            locationTracking[location.Address + location.Value] = false;
        }
    });
}

function markLocationVisited(location) {
	elementToUpdate = location.Area.toLowerCase() + itemTypeLookup[location.ItemType]
	incrementLocation(document.getElementById(elementToUpdate), incrementAmounts[location.ItemType]);

	elementToUpdate = "total" + itemTypeLookup[location.ItemType];
	incrementLocation(document.getElementById(elementToUpdate), incrementAmounts[location.ItemType])

	flashRowForLocation(location);
}

function flashRowForLocation(location) {
	rowId = location.Area.toLowerCase() + "ItemRow"
	rowElement = document.getElementById(rowId)

	rowElement.classList.add("updated-row")
	setTimeout(function() {rowElement.classList.remove("updated-row");}, 3000);

	totalRowId = "itemTotalRow" 
	totalRowElement = document.getElementById(totalRowId)

	totalRowElement.classList.add("updated-row")
	setTimeout(function() {totalRowElement.classList.remove("updated-row");}, 3000);



}

function incrementLocation(element, amount) {
	currentValue = element.innerHTML
	currValues = currentValue.split("/")
	currValues[0] = parseInt(currValues[0]) + amount;
	element.innerHTML = currValues[0] + "/" + currValues[1]
}

Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}