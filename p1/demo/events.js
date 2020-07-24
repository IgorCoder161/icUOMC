const EventEmitter = require("events");
const emitter = new EventEmitter();
//EventEmitter

emitter.on("T1", (data) => {
  console.log("pr", data);
});

/*
emitter.on("anything", (data) => {
  console.log("ON: anything", data);
});

emitter.on("anything2", (data) => {
  console.log("ON: anything22", data);
});

emitter.on("anything771", (data) => {
  console.log("ON: anything", data);
});

emitter.emit("anything", { a: 1 });

setTimeout(() => {
  emitter.emit("anything", { c: 3 });
}, 1500);

console.log(emitter.eventNames());
*/

class Dispatcher extends EventEmitter {
  subscribe(eventName, cb) {
    console.log("[Subscribe...]");
    this.on(eventName, cb);
  }

  dispatch(eventName, data) {
    console.log("[Dispatching...]");
    this.emit(eventName, data);
  }
}

let dis = new Dispatcher();

dis.subscribe("aa", (data) => {
  console.log("ON: aa", data);
});

dis.dispatch("aa", { aa: 22 });
dis.dispatch("ab", { BB: 33 });

let pz = "SSSSSS";

const pp = () => {
  console.log(pz);
};

pp();
