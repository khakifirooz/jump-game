var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;

function jump() {
    if(character.classList=="animation"){return}
    character.classList.add("animation");
    setInterval(function() {
        character.classList.remove("animation");
    }, 300);
}

var checkdead = setInterval(function(){
    let charactertop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
},10);