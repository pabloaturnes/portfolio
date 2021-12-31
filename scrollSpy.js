export default function scrollSpy(){

    let $arrowButton = document.querySelector(".arrow-up");

    // el breakpoint que se observará (seccion skills)
    const $breakpoint = document.querySelector("#skills");


    //creamos una callback para facilitar el manejo del objeto observador
    const cb = (objetoObservado)=>{
        console.log(objetoObservado);
    
        //objeto observado es un array que tiene una coleccion de objetos dentro.
        // por cada uno de los objetos que tiene preguntamos si la variable isIntercepting es verdadera, es decir si lo ha interceptado.
        objetoObservado.forEach(entry => {

            if(entry.isIntersecting){
                $arrowButton.classList.toggle("arrow-active");
            }
            
        });


    }

    //creamos un objeto observador
    const observer = new IntersectionObserver(cb,{});

    // utilizamos la funcion observe del objeto y le asignamos como parametro el elemento que queremos observar
    observer.observe($breakpoint);
}