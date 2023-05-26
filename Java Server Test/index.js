const sendButton = document.getElementById("sendButton");
const receiveButton = document.getElementById("receiveButton");
const eventBox = document.getElementById("eventBox");

function sendPressed(){
    eventBox.textContent = "I sent to server ...";
}

function receivePressed(){
    eventBox.textContent = "I received from server ...";
}

if (sendButton != null){
sendButton.addEventListener("click", sendPressed, true);
}
if (receiveButton != null){
    receiveButton.addEventListener("click", receivePressed, true);
}