var CommandQueue = new Queue();
var timer;

function checkForLocation(location, element) {
	return getData("F5" + location.Address, function(){
		dataView = new DataView(reader.result);
		result = dataView.getUint8(0)
		found = (result & location.Value) > 0;
		// console.log("Got " + found + " response (" + result + ") for item " + location.Name + " with address " + location.Address + ", " + location.Value)

		if(found) {
			element.classList.add("found")
		} else {
			element.classList.remove("found")
		}
	})
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