$(document).ready(function(){
  let socket = io()
  // TODO: initialize sockets
  addSubmitListener(socket);
  addResponseListener(socket);
});

let addSubmitListener = (socket) => {
  $('form').submit(function(event){
    event.preventDefault()
    let message = $('#message').val()
    socket.emit('chat message', message)
    $('#message').val('')
  })
}

let addResponseListener = (socket) => {
  socket.on('chat message', function(message) {
     $('#showMessage').append('<li>' + message + '</li>')
  })
}
