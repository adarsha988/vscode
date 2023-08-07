const http = require("http");
const dateTime = require("./myModule");
const myfunction=(req,res)=>{
    const dateime=dateTime();
    res.end(`hello world ${dateime}`);
};
http.createServer(myfunction).listen(3000);
console.log("app is running on port 3000");
