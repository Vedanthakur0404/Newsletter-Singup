const express = require("express");
const bodyParser = require('body-parser');
const request = require("request");

const app = express()

// this will let use static files like css to run on server
app.use(express.static(__dirname));
 

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req, res){
    res.sendFile(__dirname + '/signup.html')
})

app.post('/', function(req, res){
    res.send("okk");
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    console.log(fname , email , lname);
})


app.listen(3000, function(){
    console.log("Server started at port 3000");
})


//api key ---> 98c61c9b27156daa44fa1aaa7b365192-us14