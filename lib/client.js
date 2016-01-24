var socket = io();

$('form').submit(function(e){
 
  e.preventDefault();   // On évite le recharchement de la page lors de la validation du formulaire

  
  
  var message={
        
    text : $('#m').val()
      
    
  }
  
  
  //l'utilisateur envoie un message et lier donc un événement
  socket.emit('chat-msg',message); // On émet l'événement avec le message associé
  
  $('#m').val(''); //on vide le champ text
  
  if(message.text.trim().length !== 0){//gestion message vide
    
     socket.emit('chat-msg',message);
  }

 /* réceptionner d'un message*/
  socket.on('chat-msg', function (message) {

   $('#messages').html($('<span>').text(message.text));
    
    
  });

    
    
    
  $('#chat input').focus();
  
});