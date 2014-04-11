"use strict";

/* Feed this class things, and we'll count them. Afterward, call getTopN
   to get top N most submitted things */
function TopNCounter() 
{
    return {
	submit: function(obj) 
	{
	    if(this.counts[obj] == undefined) {
		this.counts[obj] = {};
		this.counts[obj].count = 1;
	    }
	    else
		this.counts[obj].count++;
	}, 
	getTopN: function(top) 
	{
	    var pairs=[];
	    $.each(this.counts, function(key, value) {
		pairs.push([value.count, key]);
	    });
	    pairs.sort();
	    pairs.reverse();
	    var ret=[];
	    for(var i = 0; i < top && i < pairs.length; ++i) 
		ret.push(pairs[i]);
	    return ret;
	},
	counts: {}
    };
};
