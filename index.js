// const uc =require("upper-case");
// const string = uc.upperCase("string");
// console.log(string)
const http =require ('http')
const uc=require('upper-case')
http.createServer(function(req,res)
{
    req.writeHead(200,{'content-Type':'text/html'});
    res.write(uc.upperCase("hello world"));
    res.end();

}).listen(8080);            