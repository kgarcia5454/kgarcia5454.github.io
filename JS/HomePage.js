

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

    if(About.style.height != "25vh"){   
        About.style.height="25vh";
        About.style.borderTop="3px ridge white";
        About.style.borderBottom="3px ridge white";

    }else{
        About.style.height="0vh";
        About.style.borderTop="0px ridge gray";
        About.style.borderBottom="0px ridge gray";

    }
    
}
