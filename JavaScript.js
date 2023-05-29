let nombre = prompt("Como es tu nombre?");
let resultado = saludo(nombre);

alert(resultado);

function saludo(nombre){
    if(nombre == nombre){
        return ("Bienvenido " + nombre);
    } else {
        return "Ingrese su nombre!";
    }
}

