//Blocking and non-blocking
const fs=require("fs");
text=fs.readFileSync("dele.txt","utf-8");
console.log(text);

fs.readFile("dele.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("This is Blocking and non blocking tutorial");