var http = require('http');
var Crawler = require("simplecrawler");

/* Configuration Crawler */
var crawler = Crawler.crawl("http://crawler.esy.es/");
crawler.maxDepth = 3;
crawler.filterByDomain = false;
crawler.interval = 500;

var conditionID = crawler.addFetchCondition(function(parsedURL) {
    console.log(parsedURL);
    return parsedURL.path.match(/^.*biometry.*$/i);
});


/* Events on Crawler */
crawler.on("crawlstart",function() {
    console.log("Crawl starting");
});


crawler.on("fetchcomplete",function( queueItem , responseBuffer , response ) {
   // console.log("fetchcomplete",queueItem);

});


crawler.on("queueadd", function( queueItem ){
    console.log(queueItem.url);
});

crawler.on("complete",function() {
   // console.log(crawler.queue);
    console.log(crawler.queue);
     //console.log("Finished!");
});

/* Starting Crawler */

crawler.start();
