var About = document.getElementById("About");


var showCursor = false
var speed = 750

setInterval(() => {
    if(!showCursor){
        document.getElementById('cursor').style.opacity = 1
        showCursor= true
    }else{
        document.getElementById('cursor').style.opacity = 0
        showCursor = false
    }

},speed)

function ShowAbout(){
    About.classList.toggle('open'); 

    if(window.screen.width > 800){
        setTimeout(function() {
            About.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }, 650);
    }
}


