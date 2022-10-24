var numButton = document.querySelectorAll("button").length;
var audio = new Audio;
for (i=0; i<numButton; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        makeSound(this.innerText);
    });
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
});

function makeSound (key) {
    switch(key) {
        case "w" :
            audio.src = "sounds/tom-1.mp3";
            audio.play();
            break;
        
        case "a" :
            audio.src = "sounds/tom-2.mp3";
            audio.play();
            break;

        case "s" :
            audio.src = "sounds/tom-3.mp3";
            audio.play();
            break;

        case "d" :
            audio.src = "sounds/tom-4.mp3";
            audio.play();
            break;

        case "j" :
            audio.src = "sounds/snare.mp3";
            audio.play();
            break;

        case "k" :
            audio.src = "sounds/crash.mp3";
            audio.play();
            break;

        case "l" :
            audio.src = "sounds/kick-bass.mp3";
            audio.play();
            break;
    }  
}


