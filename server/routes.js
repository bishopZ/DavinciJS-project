'use strict';

var express = require('express');
var router = express.Router();
var _ = require('lodash');
var fs = require('fs');

// API routes

var databasePath = __dirname + '/database.json';

var readDatabase = function(callback){
  fs.readFile(databasePath, function(err, data){
    if (err) { console.log(err); }
    // parse data from a string
    var parsedData = JSON.parse(data);
    if (!parsedData) { console.log('Database is corrupted!!'); }
    callback(parsedData);
  });
}

var saveDatabase = function(data, res){
  // convert database back to a string
  var newDBString = data; //JSON.stringify(data);
  // write to file
  fs.writeFile(databasePath, newDBString, function(err){
    if (err) { console.log(err); }
    // respond to the client
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(newDBString);
    res.end();
  });
}

router.get('/api', function(req, res){
  // read in the database
  fs.readFile(databasePath, function(err, data){
    if (err) { console.log(err); }
    // send a response
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(data);
    res.end();
  });
});

router.post('/api', function(req, res){
  var newData = req.body.todos;
  saveDatabase(newData, res);
  // or...
  // readDatabase(function(parsedData){
  //   // add new item to the database
  //   parsedData.push(newData);
  //   saveDatabase(parsedData, res);
  // });
});

// router.delete('/api', function(req, res){
//   var editId = req.body.id;
//   readDatabase(function(parsedData){
//     // remove item
//     parsedData.splice(editId, 1);
//     saveDatabase(parsedData, res);
//   });
// });

// router.put('/api', function(req, res){
//   var editId = req.body.id;
//   var todoData = req.body.todo;
//   readDatabase(function(parsedData){
//     // update item
//     parsedData[editId] = todoData;
//     saveDatabase(parsedData, res);
//   });
// });

// Everything route

router.get('/*', function indexRouteHandler (req, res) {
  res.render('view', {
    title: "Website Example",
    token: _.uniqueId()
  });
});




module.exports = router;