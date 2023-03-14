var globalOperacion = "";
var casillaActiva = 1;




//Determina si es un número

function isNumeric(n) {
  //false               //true
  return !isNaN(parseFloat(n)) && isFinite(n);
}

// va a agregar un valor a la casilla activa

function insertar_digito(digito) {
  //validar si el texto ya tiene digito

  var Elemento = document.getElementById("vnum" + casillaActiva);

  if (digito == ".") {
    //Null
    console.log(Elemento.value);

    var valorActual = Elemento.value;

    if (valorActual[0] == ".") {
      alert("valor sin sentido");
    } else {
      //Validar si es el primer caracter
      if (valorActual.length > 0) {
        Elemento.value = Elemento.value + digito;
        console.log(typeof valorActual);
        console.log(valorActual[0]);
      } else {
        Elemento.value = "0.";
      }
    }
  } else if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(digito)) {
    Elemento.value = Elemento.value + digito;
  }
}

//va a cambiar a la segunda casilla activa y adicionalmente va
//a mostrar el operador en la calculadora
//si hay dos valores validos,va a calcular el resultado

function realizar_operacion(operacion) {

  //validar si son valores validos
  var campo1 = document.getElementById("vnum1");
  var campo2 = document.getElementById("vnum2");

  var num1 = campo1.value;

  var num2 = campo2.value; /*No existe en la primera*/



  if (isNumeric(num1) && isNumeric(num2)) {

         resolver();

  }


  //Variable Global
  globalOperacion = operacion;

  var caracter = "";

  //coloca el numero de la opracion en la caja de operacion

  switch (operacion) {
    case "suma":
      caracter = "+";
      break;
    case "multiplicacion":
      caracter = "*";
      break;
    case "division":
      caracter = "/";
      break;
    case "potencia":
      caracter = "^";
      break;
    case "modulo":
      caracter = "MOD";
      break;
    case "resta":
      caracter = "-";
      break;
    default:
      break;
  }

  
  document.getElementById("operador").innerHTML = caracter;

  //pasar a la sigueinte casilla
  casillaActiva = 2;
}

//va a eliminar el ultimo caracter de la casilla actvida.
function limpiar_caracter(limpiar) {}
//eliiminará el operador,los valores de las casillas y el resultado
//adicionalmente me devolverá a la primera casilla
function reiniciar(reninciar) {
  location.reload();
}

//function nombre (Parametros de la funciòn nombre = "alexis"){ }

function hola(){}


//me calculará y mostrará  el resultado si hay dos numeros validos
function resolver( recursivo = false ) {

  var campo1 = document.getElementById("vnum1");
  var campo2 = document.getElementById("vnum2");

  var num1 = campo1.value;
  var num2 = campo2.value;


  num1 = parseFloat(num1);
  num2 = parseFloat(num2);


  resultado = 0; //Buena practica de programación. 


  switch ( globalOperacion ) {

    case "suma":

      resultado = num1 + num2;

      break;
    case "multiplicacion":
      resultado = num1 * num2;
      break;
    case "division":
      resultado = num1 / num2;
      break;
    case "potencia":
      resultado = Math.pow(num1, num2);
      break;
    case "modulo":
      resultado = num1 % num2;
      break;
    case "resta":
      resultado = num1 - num2;
      break;
    default:
      break;
  }

    //visualizar resultado

      document.querySelectorAll("#ressin td")[0].innerHTML = resultado;

  //agregar el valor del unput1
  campo1.value = resultado;
  campo2.value = " ";

  if (recursivo) {

    //Por que esta vacio 
      //No se quiere opera más 

  } else {

    realizar_operacion("");
    
  }
}

function borrar() {
  location.reload();
}
