export default function collapse(){

let $componentsContainer = document.querySelector(".components-container");
let $sitesContainer = document.querySelector(".sites-container");
let $appsContainer = document.querySelector(".apps-container");

document.addEventListener("click", (event)=>{

if(event.target.matches(".components-button i")){
    $componentsContainer.classList.toggle("collapsed");
    $sitesContainer.classList.remove("collapsed");
    $appsContainer.classList.remove("collapsed");
}

if(event.target.matches(".sites-button i")){
    $sitesContainer.classList.toggle("collapsed");
    $componentsContainer.classList.remove("collapsed");
    $appsContainer.classList.remove("collapsed");
}


if(event.target.matches(".apps-button i")){
    $appsContainer.classList.toggle("collapsed");
    $sitesContainer.classList.remove("collapsed");
    $componentsContainer.classList.remove("collapsed");
}



})


}