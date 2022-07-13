let buttonLeft = document.querySelector(".left");
let buttonRight = document.querySelector(".right");

let i = 1;
function RightClick(){
    i++;
    let img = document.querySelector("img");
    img.src = i + ".jpg";
}
function LeftClick(){
    i--;
    let img = document.querySelector ("img");
    img.src = `${i}.jpg`;
}