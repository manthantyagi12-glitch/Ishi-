const message =
"I made this little website just to remind you how loved you are ❤️";

let i = 0;

function typeWriter(){

if(i < message.length){

document.getElementById("typing").innerHTML += message.charAt(i);

i++;

setTimeout(typeWriter,45);

}

}

typeWriter();

document.getElementById("openBtn").addEventListener("click", function () {
    window.location.href = "pages/comfort.html";
});
