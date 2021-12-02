var measurements = require('./measurements.json').measurements;

function countIncreased() {

    var prev = measurements[0];
    var numIncreased = 0;
    measurements.forEach(function(measurement) {
        var diff = measurement - prev;
        if (diff > 0) { numIncreased++; }
        prev = measurement;
    });
    console.log(numIncreased);
};


function slidingWindowIncreased() {
        var prev = measurements[0] + measurements[1] + measurements[2];
        var numIncreased = 0;
        for (var i = 1; i < measurements.length - 2; i++) {
            var current = measurements[i] + measurements[i + 1] + measurements[i + 2];
            var diff = current - prev;
            if (diff > 0) { numIncreased++; }
            prev = current;
        }
        console.log(numIncreased);
}

countIncreased();
slidingWindowIncreased();