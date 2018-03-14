var socket = new WebSocket('ws://localhost:8080');
var reader = new FileReader()

var waitingForResponse = false

socket.onopen = function(event) {
    console.log("ConnectionStatus:  Connected")
    getComOptions()    
};

// Handle any errors that occur.
socket.onerror = function(error) {
  console.log('Unable to connect (is usb2snes running?): ' + error.message);
};

socket.onmessage = function(event) {
  if (event.type == "message" && typeof event.data == "string"){

    //the only thing we use this type of message for is COM ports
    result = JSON.parse(event.data);
    if (result.Results) {
        var first = true;
        for(element in result.Results)
        {
           if (first) {
            connectToCom(result.Results[element]);
            first = false;
           }
        }  
    }
  } else if (event.type == "message" && typeof event.data == "object") {
    //_probably_ binary data, updating status of an item.
    reader.readAsArrayBuffer(event.data)
    waitingForResponse = false;
  }  
    
};

reader.onload = function(){
}

function getComOptions() {
   socket.send('{"Opcode":"DeviceList","Space":"SNES"}');    
}

function connectToCom(comPort) {
    console.log("connecting to " + comPort)
    socket.send('{"Opcode":"Attach","Space":"SNES","Flags":null,"Operands":["'+ comPort + '"]}')
    console.log("ConnectionStatus:  Connected to port " + comPort);

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

