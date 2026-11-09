let numero = "0";
let primero = 0;
let operacion = "";
let nuevo = false;


// ENTRAR Y VOLVER

function entrar() {
    document.getElementById("inicio").classList.add("oculto");
    document.getElementById("calculadora").classList.remove("oculto");
}

function volver() {
    document.getElementById("calculadora").classList.add("oculto");
    document.getElementById("inicio").classList.remove("oculto");
}


// MOSTRAR NUMERO

function mostrar() {
    document.getElementById("resultado").innerHTML = numero;
}


// AGREGAR NUMEROS

function agregar(valor) {

    if (nuevo) {
        numero = "0";
        nuevo = false;
    }

    if (valor == "." && numero.includes(".")) {
        return;
    }

    if (numero == "0" && valor != ".") {
        numero = valor;
    } else {
        numero = numero + valor;
    }

    mostrar();
}


// ELEGIR OPERACION

function operar(op) {
    if (numero == "Error") return;

    primero = Number(numero);
    operacion = op;
    nuevo = true;
}


// REALIZAR OPERACION

function calcular() {

    let segundo = Number(numero);
    let resultado;

    if (operacion == "+") {
        resultado = primero + segundo;
    }

    else if (operacion == "-") {
        resultado = primero - segundo;
    }

    else if (operacion == "*") {
        resultado = primero * segundo;
    }

    else if (operacion == "/") {
        resultado = primero / segundo;
    }

    else {
        return;
    }

    if (!isFinite(resultado)) {
        numero = "Error";
    } else {
        numero = String(resultado);
    }

    operacion = "";
    nuevo = true;

    mostrar();
}


// BORRAR

function borrar() {

    if (nuevo) {
        numero = "0";
        nuevo = false;
    } else {
        numero = numero.substring(0, numero.length - 1);

        if (numero == "") {
            numero = "0";
        }
    }

    mostrar();
}


// LIMPIAR

function limpiar() {

    numero = "0";
    primero = 0;
    operacion = "";
    nuevo = false;

    mostrar();
}