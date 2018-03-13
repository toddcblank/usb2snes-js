var socket = new WebSocket('ws://localhost:8080');
var reader = new FileReader()

var waitingForResponse = false

socket.onopen = function(event) {
    console.log("Opened...")
    document.getElementById("connStatus").innerHTML = "ConnectionStatus:  Connected"
    getComOptions(document.getElementById("activeConnection"))    
};

// Handle any errors that occur.
socket.onerror = function(error) {
  console.log('WebSocket Error: ' + error.message);
  document.getElementById("connStatus").innerHTML = "Unable to connect (is usb2snes running?): " + error.message
};

socket.onmessage = function(event) {
  if (event.type == "message" && typeof event.data == "string"){

    //the only thing we use this type of message for is COM ports
    result = JSON.parse(event.data);
    if (result.Results) {
        selectElement = document.getElementById("activeConnection")
        for (var i = selectElement.length - 1; i >= 0; i--){
            selectElement.remove(i);       
        }
        var first = true;
        for(element in result.Results)
        {
           var opt = document.createElement("option");
           opt.innerHTML = result.Results[element]; // whatever property it has
           if (first) {
            connectToCom(result.Results[element]);
            first = false;
           }
           // then append it to the select element
           selectElement.appendChild(opt);
        }  
    }
  } else if (event.type == "message" && typeof event.data == "object") {
    //_probably_ binary data, updating status of an item.
    reader.readAsArrayBuffer(event.data)
    waitingForResponse = false;
  }  
    
};

reader.onload = function(){
    dataView = new DataView(reader.result)    
    document.getElementById("results").innerHTML = dataView.getUint8(0)  
}

function getComOptions(selectElement) {
   socket.send('{"Opcode":"DeviceList","Space":"SNES"}');    
}

function connectToCom(comPort) {
    console.log("connecting to " + comPort)
    socket.send('{"Opcode":"Attach","Space":"SNES","Flags":null,"Operands":["'+ comPort + '"]}')
    document.getElementById("connStatus").innerHTML = "ConnectionStatus:  Connected to port " + comPort

}

function getData(address, fn) {

    if (waitingForResponse == true) {
        return false;
    }

    waitingForResponse = true;

    if(fn != undefined) {
        reader.onload = fn;
    } else {
        //by default just spit out the result to the console.
        reader.onload = function(){
            dataView = new DataView(reader.result)    
            console.log(dataView.getUint8(0));
        }
    }

    // console.log("getting data at " + address)
    socket.send('{"Opcode":"GetAddress","Space":"SNES","Flags":["DATA64B"],"Operands":["' + address + '", 40]}')
    return true;
}

