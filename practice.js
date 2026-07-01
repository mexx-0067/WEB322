const EventEmitter = require('events');

const myEmitter = new EventEmitter();
myEmitter.on('click', function(){
    console.log('a click event occurred!');
});
