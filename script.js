var http=require("http");
http.createServer(myRequest).listen(8888);
var bars=require("./bars.js");



function myRequest(request,response){
    
    response.writeHead(200,{"Content-type":"text/html; charset=utf-8"});
    response.write(randomWord(bars.quotes));
    response.end();

function randomWord(wordList){
    return wordList[Math.floor(Math.random()*wordList.length)]
        
    };
};