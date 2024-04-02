const express= require("express");
const app= express();
const port= 8080;
const path=require("path");
app.set("view engin","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
res.render("home.ejs");
});
app.get("/rolldice",(req,res)=>{
    let diceval=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num:diceval});
});
app.get("/ig/:username",(req,res)=>{
    let{username}=req.params;
    const instadata=require("./data.json");
    const data=instadata[username];
    res.render("insta.ejs",{data});
});
app.listen(port,()=>{
    console.log(`listening on port${port}`);
});