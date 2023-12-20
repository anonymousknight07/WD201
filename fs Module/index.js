const fs= require("node:fs");

// the readFile- synchrounuous
fs.readFile("./sample.txt","utf-8",(err,content)=>{
    if(err){
        console.log("err");
    }
    console.log(content);
})

//The readFileSyn - Sunchronous
const conten=fs.readFileSync("./sample.txt","utf-8");
console.log(conten);


//Write contents in file

//Synchronous - Syntax - fs.writeFileSync("path of file/new or existing file","thing to append")

fs.writeFileSync("./newfile.txt","Hello , this is a new file");

const cont=fs.readFileSync("./newfile.txt","utf-8")
console.log(cont);