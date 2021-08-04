require("dotenv").config();
const path = require("path")

const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("static"));

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "./views/index.html"))
})

app.get("/styles/:style",(req,res)=>{
    let {style} = req.params;
    res.sendFile(path.join(__dirname, "./views/styles/"+style));
})

app.get("/js/:jsFile", (req,res)=>{
    let {jsFile} = req.params;
    res.sendFile(path.join(__dirname, "./views/js/"+jsFile))
})

app.listen(process.env.PORT,()=>{
    console.log("Server is listening at PORT " +process.env.PORT);
})