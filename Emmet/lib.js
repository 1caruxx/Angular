export var FuncionesPropias = {
    "VerificarNumero": VerificarNumero,
    "VerificarNumeroPlus": VerificarNumeroPlus,
    "VerificarArrayDeNumeros": VerificarArrayDeNumeros,
    "VerificarArrayDeNumerosForEach": VerificarArrayDeNumerosForEach,
    "OrdenarNumerosConBurbujeo": OrdenarNumerosConBurbujeo,
    "OrdenarNumeros": OrdenarNumeros,
    "OrdenarNumerosFatArrow": OrdenarNumerosFatArrow,
    "OrdenarNumerosDecrecienteConBurbujeo": OrdenarNumerosDecrecienteConBurbujeo,
    "OrdenarNumerosDecreciente": OrdenarNumerosDecreciente,
    "Maximo": Maximo,
    "MaximoTernary": MaximoTernary,
    "Minimo": Minimo,
    "MinimoTernary": MinimoTernary,
    "VerificarNombre": VerificarNombre,
    "FormalizarNombre": FormalizarNombre,
    "OrdenarAlfabeticamente": OrdenarAlfabeticamente,
    "OrdenarAlfabeticamenteDecreciente": OrdenarAlfabeticamenteDecreciente,
    "VerificarEdad": VerificarEdad,
    "GenerarNumeroAleatorio": GenerarNumeroAleatorio,
    "SumarNumeros": SumarNumeros,
    "Debug": Debug,
    "AnalizadorDePropiedades": AnalizadorDePropiedades
};


/**
 * 
 * @param {String, Number} string El numero que se desea verificar.
 */
function VerificarNumero(string) {

    var esNumero = true;

    for(let i=0 ; i<string.length ; i++) {

        if(isNaN(parseInt(string.charAt(i)))) {

            esNumero = false;
            break;
        }
    }

    return esNumero;
}

function VerificarNumeroPlus(string) {

    var esNumero = true;

    if(typeof string != "number") {

        for(let item of string.split("")) {

            if(isNaN(parseInt(item))) {
    
                esNumero = false;
                break;
            }
        }
    }

    return esNumero;
}

function VerificarArrayDeNumeros(array) {

    for(let item of array) {

        if(!VerificarNumeroPlus(item)) {

            return false;
        }
    }

    return true;
}

function VerificarArrayDeNumerosForEach(array) {

    var retorno = true;

    array.forEach(item => {

        if (!VerificarNumeroPlus(item)) {

            retorno = false;
        }
    });

    return retorno;
}

function OrdenarNumerosConBurbujeo(array) {

    var auxiliar;

    for (let i = 0; i < array.length-1; i++) {

        for (let j = i+1; j < array.length; j++) {
            
            if(array[i] > array[j]) {

                auxiliar = array[i];
                array[i] = array[j];
                array[j] = auxiliar;
            }
        }
    }
    
    return array;
}

function OrdenarNumeros(array) {

    for(let item of array) {

        if (!VerificarNumeroPlus(item)) {
            return false;
        }
    }

    return array.sort(function(a , b) {

        return a - b;
    });
}

function OrdenarNumerosFatArrow(array) {

    if(!VerificarArrayDeNumerosForEach(array)) { return false; }
    return array.sort((a , b) => a - b );
}

function OrdenarNumerosDecrecienteConBurbujeo(array) {

    var auxiliar;

    for (let i = 0; i < array.length-1; i++) {
        
        for (let j = i+1; j < array.length; j++) {

           if(array[i] < array[j]) {

                auxiliar = array[i];
                array[i] = array[j];
                array[j] = auxiliar;
           }
        }
    }

    return array;
}

function OrdenarNumerosDecreciente(array) {

    var arrayAux;

    if(!(arrayAux = OrdenarNumeros(array))) {

        return false;
    }

    return arrayAux.reverse();
}

function Maximo(array) {

    var arrayAux;

    if(arrayAux = OrdenarNumeros(array)) {

        return arrayAux[array.length-1];
    }

    return false;
}

function MaximoTernary(array) {

    return (VerificarArrayDeNumeros(array)) ? Math.max(...array) : false;
}

function Minimo(array) {

    var arrayAux;

    if(arrayAux = OrdenarNumeros(array)) {

        return arrayAux[0];
    }

    return false;
}

function MinimoTernary(array) {

    return (VerificarArrayDeNumeros(array)) ? Math.min(...array) : false;
}

function VerificarNombre(string) {

    var esValido = true;

    if(typeof string == "string") {

        for(let item of string.split("")) {

            if((item>="A" && item<="Z") || (item>="a" && item<="z") || item==" ") {

                continue;
            }

            esValido = false;
            break;
        }
    } else {

        esValido = false;
    }

    return esValido;
}

function FormalizarNombre(string) {

    var arrayString;
    var contador = 0;

    if(VerificarNombre(string)) {

        string = string.toLowerCase();
        arrayString = string.split("");

        while(arrayString[0] == " ") {
            arrayString.splice(0 , 1);
        }

        arrayString[0] = (arrayString[0].charAt(0)).toUpperCase();

        for(let item of arrayString) {

            if(item == " ") {

                while(arrayString[contador+1] == " ") {

                    arrayString.splice(contador+1 , 1);
                }

                if(contador+1 == arrayString.length) {

                    arrayString.splice(contador , 1);

                } else {

                    arrayString[contador+1] = (arrayString[contador+1].charAt(0)).toUpperCase();
                }
            }

            contador++;
        }

        return (arrayString.toString()).replace(/,/g , "");
    }

    return false;
}

function OrdenarAlfabeticamente(array) {

    return array.sort(function (a , b) {

        return a.toLowerCase() > b.toLowerCase();
    });
}

function OrdenarAlfabeticamenteDecreciente(array) {

    return OrdenarAlfabeticamente(array).reverse();
}

function VerificarEdad(edad) {

    var EdadValida = false;

    if(VerificarNumeroPlus(edad)) {

        if(edad>=0 && edad<=120) {
            EdadValida = true;
        }
    }

    return EdadValida;
}

function GenerarNumeroAleatorio(min , max) {

    return Math.floor(Math.random() * (max - min)) + min;
}

function SumarNumeros() {

    var acumulador = 0;

    for (let item in arguments) {

        acumulador += arguments[item]
    }

    return acumulador;
}


function Debug(string) {

    if(string == "") throw "escribi algo"; 
}

function AnalizadorDePropiedades(array) {

    var contador = 1;
    var datos = "";

    for (var obj of array) {

        datos += `Persona numero: ${contador}\n`;

        for(let item in obj) {
        
        datos += `${item}: ${obj[item]}\n`;
        }

        datos += `\n\n`;
        contador++;
    }

    return datos;
}