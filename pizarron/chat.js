var socketChat = io.connect("http://localhost:9090/chat"); // Socket Chat
var socketWBoard = io.connect("http://localhost:9090/wboard"); // Socket Whiteboard

socketChat.on("message", function(message) {
	alert(message);
});