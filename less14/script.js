var express = require('express');
const fileUpload = require('express-fileupload');
var MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
var app = express();
app.use(fileUpload());
app.use(bodyParser.urlencoded({extended:true}));
// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
})


// This responds a POST request for the homepage
app.post('/uploadfile', function (req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');


    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    var sampleFile = req.files.file_my;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('uploads/'+sampleFile.name, function(err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
    MongoClient.connect('mongodb://localhost:27017/lot2', function (err, client) {
        if (err) throw err

        var db = client.db('lot2')

        db.collection('users').find().toArray(function (err, result) {
            if (err) throw err

            res.send(result);
        })
    })
    // console.log(req.query);

})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/insert', function(req, res) {
    MongoClient.connect('mongodb://localhost:27017/carShop', function (err, client) {
        if (err) throw err

        var db = client.db('carShop')
        var user = { name: "Company Inc", address: "Highway 37" };
        db.collection("employees").insertOne(user, function(err, resp) {
            if (err) throw err;
            console.log("1 document inserted");
            res.send('success');



        });
    })
})
app.get('/inserted', function(req, res) {
    MongoClient.connect('mongodb://localhost:27017/carShop', function (err, client) {
        if (err) throw err

        var db = client.db('carShop')
        var user =[
            { name: 'John', address: 'Highway 71'},
            { name: 'Peter', address: 'Lowstreet 4'},
            { name: 'Amy', address: 'Apple st 652'},
            { name: 'Hannah', address: 'Mountain 21'},
            { name: 'Michael', address: 'Valley 345'},
            { name: 'Sandy', address: 'Ocean blvd 2'},
            { name: 'Betty', address: 'Green Grass 1'},
            { name: 'Richard', address: 'Sky st 331'},
            { name: 'Susan', address: 'One way 98'},
            { name: 'Vicky', address: 'Yellow Garden 2'},
            { name: 'Ben', address: 'Park Lane 38'},
            { name: 'William', address: 'Central st 954'},
            { name: 'Chuck', address: 'Main Road 989'},
            { name: 'Viola', address: 'Sideway 1633'}
        ];
        db.collection("employees").insertMany(user, function(err, resp) {
            if (err) throw err;
            console.log("1 document inserted");
            res.send('success');



        });
    })
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})