const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('logging', (args)=>{
    console.log("Logged", args);
})

emitter.emit('logging', {data : "lod"});
