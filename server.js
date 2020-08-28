const express = require('express');
const app = express();

const mockUserData = [
    {name:'Mark'},
    {name:'Jill'}
]

app.listen(8000, function(){
    console.log("server is running")
})

app.get('/users', function(req, res){
    res.json({
        success: true,
        message: 'successfullt got users. Nice!',
        users: mockUserData
    })
})

app.get('/users/:id', function (req, res) {
    let id = req.params.id
    res.json({
        success: true,
        message: 'got one user!',
        users: id
    })
})