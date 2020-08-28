const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())

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

app.post('/login', function(req, res){
    const username = req.body.username
    const password = req.body.password

    const mockUserName = 'MichealScarn'
    const mockPassword = 'GeogreForman'

    if(mockUserName === username && mockUserData === password){
        res.json({
            success: true,
            message: 'Welcome '.concat(username, " !"),
            token: 'encrypted token goes here'
        })
    }
    else{
        re.json({
            success: false,
            message: "You are WRONG!"
        })
    }
})