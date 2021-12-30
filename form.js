export default function form(){

    let $formName = document.getElementById("nombre");
    let $formEmail = document.getElementById("email");
    let $formMsj = document.getElementById("mensaje");
    let $forms = [$formName, $formEmail, $formMsj];
    let formValidation = true;



    document.addEventListener("submit",(event)=>{

        console.log($forms);
        event.preventDefault(); //prevenimos que se envie el formulario todavia


        emptyValidation();
        emailValidation();

        if(formValidation == true){
            document.querySelector("form").submit();
        }

    })




    function emptyValidation(){

        formValidation = true;  // se resetea la variable de control

        $forms.forEach(input=>{

            //limpio los iconos cada vez que se dispara la funcion de validacion;
            if(input.parentElement.querySelector(".error-icon") != null){
                let remove = input.parentElement.querySelector(".error-icon");
                input.parentElement.removeChild(remove);
            }

            
            //limpio los mensajes de error cada vez que se dispara la funcion de validacion;
            if(input.parentElement.querySelector(".error-msj") != null){
                let remove = input.parentElement.querySelector(".error-msj");
                input.parentElement.removeChild(remove);
            }
            


            input.value = input.value.trim();  // le quito los espacios antes y despues

            if(input.value == ""){  //pregunto si los inputs estan vacios;

            // aca muestro el mensaje de error
            let $errorMsj = document.createElement("p");
            $errorMsj.innerHTML=`el ${input.id} no puede estar vacio`;
            $errorMsj.classList.add("error-msj");        
            input.parentElement.appendChild($errorMsj);


            // aca muestro el icono de error
            let $errorIcon = document.createElement("i");
            $errorIcon.classList.add("bi", "bi-exclamation-circle-fill", "error-icon");        
            input.parentElement.appendChild($errorIcon);

            formValidation = false;  // la variable de control arroja falso

            }


        })

    }


    function emailValidation(){


        let regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;   // regex para un correo electronico
        let spacesRegex = /\s/;    // pregunta si tiene al menos un espacio en blanco 
        
        $formEmail.value = $formEmail.value.trim();  // le quito los espacios antes y despues


        if(!regex.test($formEmail.value)){  // si no tiene el formato email

            // aca muestro el mensaje de error
            

            if($formEmail.parentElement.querySelector(".error-msj")){  // si ya habia un mensaje de error anterior lo sistituye
                $formEmail.parentElement.querySelector(".error-msj").innerHTML=`Ingrese un e-mail valido`;
            }else{ // si no habia un mensaje anterior lo crea.
                let $errorMsj = document.createElement("p");
                $errorMsj.innerHTML=`Ingrese un e-mail valido`;
                $errorMsj.classList.add("error-msj");        
                $formEmail.parentElement.appendChild($errorMsj);
            }
            

            // aca muestro el icono de error
            //limpio los iconos cada vez que se dispara la funcion de validacion;
                        if($formEmail.parentElement.querySelector(".error-icon") == null){
                            let $errorIcon = document.createElement("i");
                            $errorIcon.classList.add("bi", "bi-exclamation-circle-fill", "error-icon");        
                            $formEmail.parentElement.appendChild($errorIcon);
                        }



            formValidation = false;  // la variable de control arroja falso
        }

        if(spacesRegex.test($formEmail.value)){  // si tiene algun espacio en blanco

            if($formEmail.parentElement.querySelector(".error-msj")){  // si ya habia un mensaje de error anterior lo sistituye
                $formEmail.parentElement.querySelector(".error-msj").innerHTML=`el Email contiene espacios en blanco`;
            }else{ // si no habia un mensaje anterior lo crea.
                let $errorMsj = document.createElement("p");
                $errorMsj.innerHTML=`el Email contiene espacios en blanco`;
                $errorMsj.classList.add("error-msj");        
                $formEmail.parentElement.appendChild($errorMsj);
            }
            

            // aca muestro el icono de error
            //limpio los iconos cada vez que se dispara la funcion de validacion;
            if($formEmail.parentElement.querySelector(".error-icon") == null){
                let $errorIcon = document.createElement("i");
                $errorIcon.classList.add("bi", "bi-exclamation-circle-fill", "error-icon");        
                $formEmail.parentElement.appendChild($errorIcon);
            }

        
            formValidation = false;  // la variable de control arroja falso
            
        }

    }





}