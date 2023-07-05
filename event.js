var emitt = require('events');


var emitter = new emitt.EventEmitter();

emitter.on("name", function (data) {

    console.log("data " + data);

})
emitter.emit('name', "dataaaa");