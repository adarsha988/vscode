// // // const http = require("http");
// // // const dateTime = require("./myModule");
// // // const myfunction=(req,res)=>{
// // //     const dateime=dateTime();
// // //     res.end(`hello world ${dateime}`);
// // // };
// // // http.createServer(myfunction).listen(3000); 
// // // console.log("app is running on port 3000");
// // const fs = require ("fs");
// // const file =fs.createReadStream("./data.txt");
// // file.on("open",() =>{
// //     console.log("data.txt file is open ");

// // });
// // const data="hello world!";
// // fs.writeFileSync("./data.txt",data);
// // fs.appendFileSync("./data.txt",data);



// //  1. use upper-Case pakage and create a  function to convert to convert user input to upper-case
// // const input= "hello world"
 const uc = require("upper-case")
 const u =(input)=>{
    const v=uc.upperCase(input);
    console.log(v);
}
let name=("adarash");
u(name);



// 2. use "moment" package to convert current date  to "8th Aug 2023" format 
// 3. create function that convert "mr rakim shrestha" to "mr Ratim shrestha"
// use "lodash" package to trim the white space from "   mr adarash khatiwoda " to "mr adarash khatiwoda"