var socket = new WebSocket('ws://localhost:8080');
var reader = new FileReader()

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
  console.log(event)
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
    //_probably_ binary data?
    reader.readAsArrayBuffer(event.data)
  }  
    
};

reader.onload = function(){
    dataView = new DataView(reader.result)
    
    document.getElementById("results").innerHTML = dataView.getUint8(0)  
}

var OpCodeEnum = Object.freeze({
	"GET": 0,
    "PUT": 1,
    "VGET": 2,
    "VPUT": 3,

    // file system operations
    "LS": 4,
    "MKDIR": 5,
    "RM": 6,
    "MV": 7,

    // special operations
    "RESET": 8,
    "BOOT": 9,
    "POWER_CYCLE": 10,
    "INFO": 11,
    "MENU_RESET": 12,
    "STREAM": 13,
    "TIME": 14,

    // response
    "RESPONSE": 15
});

var serverSpaceEnum = Object.freeze(
{
    "FILE":0,
    "SNES":1,
    "MSU":2,
    "CMD":3,
    "CONFIG":4
});

var serverFlagsEnum = Object.freeze(
{
    "NONE": 0,
    "SKIPRESET": 1,
    "ONLYRESET": 2,
    "CLRX": 4,
    "SETX": 8,
    "STREAM_BURST": 16,
    "NORESP": 64,
    "DATA64B": 128,
});


class usb2snes {

    constructor(){}

	SendCommand(opcode, space, flags, params) {
		let rt = new RequestType(opcode, space, flags, params)
        console.log(rt);
        socket.send('{"Opcode":"GetAddress","Space":"SNES","Flags":["DATA64B"],"Operands":["F5D873", 40]}')
	}
}

class RequestType
{

    constructor(Op, sp, flags, params) {
        this.Opcode = Op;
        this.Space = sp;
        this.Flags = flags;
        this.Operands = params;
    }

    RequiresData() { return Opcode == "GetAddress" || Opcode == "GetFile" || Opcode == "List" || Opcode == "Info" || Opcode == "Stream"; }
    HasData() { return Opcode == "PutAddress" || Opcode == "PutFile"; }
}

function getComOptions(selectElement) {
   socket.send('{"Opcode":"DeviceList","Space":"SNES"}');    
}

function connectToCom(comPort) {
    console.log("connecting to " + comPort)
    socket.send('{"Opcode":"Attach","Space":"SNES","Flags":null,"Operands":["'+ comPort + '"]}')
}

function getData(address) {
    console.log("getting data at " + address)
    socket.send('{"Opcode":"GetAddress","Space":"SNES","Flags":["DATA64B"],"Operands":["' + address + '", 40]}')
}

