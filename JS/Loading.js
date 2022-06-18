let loadingWheel = document.getElementById("Wheel")

var Wheel2 = document.createElement("div");
Wheel2.className = "Loading";
Wheel2.id = "Wheel2";
loadingWheel.appendChild(Wheel2);

var Wheel3 = document.createElement("div");
Wheel3.className = "Loading";
Wheel3.id = "Wheel3";
Wheel2.appendChild(Wheel3);

var Wheel4 = document.createElement("div");
Wheel4.className = "Loading";
Wheel4.id = "Wheel4";
Wheel3.appendChild(Wheel4);


function onLoad() {
    const randomR = Math.floor(Math.random()*155+100);
    const randomG = Math.floor(Math.random()*155+100);
    const randomB = Math.floor(Math.random()*155+100);

    const borderStyle = " ridge ";
    
    const Color1 = "rgb("+randomR+","+randomG+","+(randomB+100)+")";
    const Color2 = "rgb("+(randomR+100)+","+randomG+","+randomB+")";
    const Color3 = "rgb("+randomR+","+(randomG+100)+","+randomB+")";
    const Color4 = "rgb("+(randomR+50)+","+(randomG+50)+","+(randomB+50)+")";

    loadingWheel.style.borderTop = "12px"+ borderStyle + Color1;
    Wheel2.style.borderTop = "10px"+borderStyle + Color2;
    Wheel3.style.borderTop = "8px"+ borderStyle + Color3;
    Wheel4.style.borderTop = "6px"+ borderStyle + Color4;
    
}setInterval(onLoad,3500);

window.onLoad = onLoad();

