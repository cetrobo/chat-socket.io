// Tout d'abbord on initialise notre application avec le framework Express 
// et la bibliothèque http integrée à node.
var express = require('express');
var app = express();
var http = require('http');
var path=require('path');

// On gère les requêtes HTTP des utilisateurs en leur renvoyant les fichiers du dossier 'public'

var port = process.env.PORT || 8080;
var server = http.createServer(app);
var favicon = require('express-favicon');
var io = require('socket.io').listen(server);

app.use("/style", express.static(__dirname + '/style'));
app.use("/lib", express.static(__dirname + '/lib'));




app.get('/', function (req, res) {

res.sendFile(path.join(__dirname, '../public', 'index.html'));

});



io.on('connection', function (socket) {

  /**
  Log de connexion et de déconnexion des utilisateurs
  
  **/
  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('user disconnected');

  });





/**
 * Réception de l'événement 'chat-message' et réémission vers tous les utilisateurs
 */

socket.on('chat-msg',function(message){
  
      console.log('Votre message est : '+message.text);
  
});



});
server.listen(port);
