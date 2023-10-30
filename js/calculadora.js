window.addEventListener('load', ()=> { /* Escucha cuando se carga el documento */
    /* Creamos dos constantes para guardar los elementos que necesitamos */
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');

    /* Creamos otra constante para convertir el keypadButtons a array */

    const keypadButtonsArray = Array.from(keypadButtons);

    /* A cada boton le agregamos un listener */
    keypadButtonsArray.forEach( (button) => {
        button.addEventListener('click', ()=> {
            calculadora(button, display);
        })
    })
});

    function calculadora(button, display) {
        switch (button.innerHTML) {
            case 'C':
                borrar(display);
                break;

            case '=':
                calcular(display);
                break;
            
            case '√':
                raiz(display);
                break;

            case 'x^2':
                elevarAlCuadrado(display);
                break;

            case '⌫':
                borrarUnidad(display);

            case 'e':
                operacionNapier(display);

            default:
                actualizar(display, button);
                break;
        }
    }

    function calcular(display) {
        display.innerHTML = eval(display.innerHTML); /* Toma el string y lo resuelve */
    }

    function actualizar(display, button) {
        if(display.innerHTML == 0) {
            display.innerHTML = '';
        }
        display.innerHTML += button.innerHTML; 
    }

    function borrar(display) {
        display.innerHTML = 0;
    }

    function raiz(display) {
        const number = display.innerHTML;
        const resultado = Math.sqrt(number);
        display.innerHTML = resultado;
    }

    function elevarAlCuadrado(display) {
        const number = display.innerHTML;
        const resultado = Math.pow(number, 2);
        display.innerHTML = resultado;
    }

    function borrarUnidad(display) {
        var arr = Array.from(display.innerHTML);
        arr.pop();
        var resultado = '';
        for (var i=0; i<arr.length; i++) {
            resultado += arr[i];
        }
        display.innerHTML = resultado.innerHTML;
    }

    function operacionNapier(display) {
        const napier = 2.718;
        if (display.innerHTML == 0) {
            display.innerHTML = "Hola";
        }
    }



