const express = require('express');
const app = express();

const mockUserData = [
    {name:'Mark'},
    {name:'Jill'}
]

app.listen(8000, function(){
    console.log("server is running")
})