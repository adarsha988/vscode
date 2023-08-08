var events =require('events');
var eventEmitter = new events. eventEmitter();
// create an event handler
var myEventHandler= function(){
    console.log("i hear a scream!");

}
eventEmitter.on('scream', myEventHandler);
eventEmitter.emit('scream');
