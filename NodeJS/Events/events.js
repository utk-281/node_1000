//! creation and handling of events
const EventEmitter = require("events");

const emitter = new EventEmitter();

console.log("Start");

//? to handle an event we use on()
//& syntax ==> emitter.on("event-name", cb(a)=>{})
emitter.on("myEvent", (value) => {
  console.log("event handled", value);
});

console.log("middle");

//? to create an event we use emit()
//& syntax ==> emitter.emit("event-name", "arg1", "arg2")
emitter.emit("myEvent", "abc");

console.log("end");
