const Events = require('events');
const { EventEmitter } = Events;
class MyEventEmitter extends EventEmitter {}
const myEmitter = new MyEventEmitter();
// Example of using the EventEmitter its like registering an event listener
myEmitter.on('event', () => {
    console.log('An event occurred!');
});
// Emit the event to trigger the listener
myEmitter.emit('event');        
console.log("EventModule.js loaded successfully.");
console.log('THIS IS SYNC METHOD');

