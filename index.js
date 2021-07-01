const express = require("express")
const bodyPaser = require("body-parser")

const app = express()

app.use(bodyPaser.urlencoded({extended: true}))
app.get("/",function(req,res){

console.log("response")
console.log(__dirname +"/index.html" )
res.sendFile(__dirname +"/index.html")

})


app.post("/",function(req,res){

    console.log("post function")
   console.log(req.body.num1)
   console.log(req.body.num2)
   var num1 = Number(req.body.num1)
   var num2 = Number(req.body.num2)
   result = num1+num2
res.send("sum is -->"+result)
    
    })

app.listen(3000,function(){

    console.log("steeellll")
})