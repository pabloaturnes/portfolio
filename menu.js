
export default function menu(){

let $menuButton = document.querySelector(".menu-button");
let $menu = document.querySelector("nav ul")

$menuButton.addEventListener("click", ()=>{

    $menu.classList.toggle("menu-active");


})


}