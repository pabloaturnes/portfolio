
export default function menu(){

let $menuButton = document.querySelector(".menu-button");
let $menu = document.querySelector("nav ul");
let $linkMenu = document.querySelectorAll("nav ul li a");

$menuButton.addEventListener("click", ()=>{
    $menu.classList.toggle("menu-active");
})

$linkMenu.forEach(link => {

    link.addEventListener("click", ()=>{
        $menu.classList.remove("menu-active");
    })

})


}