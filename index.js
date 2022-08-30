// alert('Working')
$("button").on('click',function(){
    // let audio = new Audio('sounds/tom-1.mp3');
    letter = this.innerHTML
    switch(letter){
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            break;
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            break;
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            break;
        default:
            break;
    }
    audio.play();
})

$(document).keypress(function(event){
    // console.log(event.key);
    key = event.key
    switch(key){
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            break;
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            break;
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            break;
        default:
            break;
    }
    audio.play();
});