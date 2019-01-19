"use strict";
function loop(times = 0, callback = null) {
    if (typeof callback !== 'function') return;

    for (let i = 0; i < times; i++) {
        callback();
    }
}

const callback = () => { console.log('qwe'); };

loop();            // run 0 times
loop(2, callback); // run 2 times
loop(1);           // run 0 times
loop(0, callback); // run 0 times
loop(1, 'callback'); // run 0 times
