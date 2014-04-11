"use strict";  // YES!! Turn Javascript into a somewhat more serious language.

// this code depends on topncounter.js
// javascript has no #include statement

function fun()
{
    var counter = new TopNCounter();

    for(var i = 0; i < 10000; ++i)
	counter.submit(i);

    counter.submit("bert");
    counter.submit("bert");
    counter.submit("bert");
    counter.submit("bert");
    counter.submit("javascript");
    counter.submit("javascript");
    counter.submit("javascript");
    counter.submit("ecmascript");
    counter.submit("ecmascript");
    
    var top2 = counter.getTopN(2);
    
    $.each(top2, function(index, value) {
	console.log(value);
    });
}

fun();
