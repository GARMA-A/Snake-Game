const btn = document.querySelector(".btn");
const txtContainer = document.querySelector(".all-txt");
const welcomeToSnakeAndButton = document.querySelector(".flex");
const canvas = document.getElementById("board");
const arrows = document.querySelector(".arrows");


btn.addEventListener("click", function() {

    txtContainer.classList.add('remove');
    welcomeToSnakeAndButton.classList.add("remove");
    canvas.classList.add('killBlur');
    arrows.classList.add("backToLive");
    arrows.classList.remove("none");
   


});
