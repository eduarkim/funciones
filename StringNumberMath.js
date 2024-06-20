/* 1. Haga una función que dado un texto lo convierta todo en mayúscula o en minúscula según lo decida un usuario.
Ejemplo: convertirTexto("Hola Mundo", "minusculas") debería retornar "hola mundo".
*/
/*
let texto = prompt("Ingrese su texto a convertir: ")
let tipo = prompt("Ingrese M para convertirlo en mayúscula y m para minúscula")
*/

function convertirTexto(texto, tipo){
    tipo = tipo.toLowerCase()          
    if(tipo === "mayusculas"){
        return mayuscula = texto.toUpperCase()
    }else if(tipo === "minusculas"){
        return minuscula = texto.toLowerCase()
    }else{
        return invalido = "No se admiten tildes o están mal escritas, debe escribir 'minusculas' o 'mayusculas'"
    }
}

// alert(convertirTexto(texto, tipo))


/*
2. Haga una funcion que retorne un único carácter según una posición específica dado cualquier texto.
Ejemplo: obtenerCaracter("Hola Mundo, 1) debería retornar "o")
*/

// let texto = prompt("Ingrese su texto")
// let posicion = prompt("Ingrese el numero de la posicion ")
function obtenerCaracter(texto, posicion){
    return letraposicion = texto.charAt(posicion)
}
// alert(obtenerCaracter(texto, posicion))


/*
3. Haga una función que elimine los espacios al inicio y al final de cualquier texto y 
retorne un subtexto dada una posición inicial y posición final.
Ejemplo: subTexto ("     Hola Mundo    ",2,7) debería retornar "la Mu"
*/

function subTexto(texto, posicion1, posicion2){
   return textomodificado = texto.trim().substring(posicion1,posicion2)
}

/*
4. Haga una función que reemplace todas las coincidencias de un texto por otro texto que le envíe el usuario.
Ejemplo: reemplazarTexto("Hola Mundo, Hola Estudiantes", "Hola", "Hi") debería retornar "Hi Mundo, Hi Estudiantes"
*/
function reemplazarTexto(frase, texto, textoreempla){
    return reemplazo =  frase.replaceAll(texto, textoreempla)
}

/*
5.Haga una función que verifique si un texto inicia con un carácter o texto dado.
Ejemplo: iniciaCon("Hola Mundo", "Hola") debería retornar true.
*/

function iniciaCon(frase, texto){
    return verifica = frase.startsWith(texto)
}

/*
6.Haga una función que dado un número con decimales retorne el número redondeado hacia el número entero más
próximo (Math.round) o hacia el siguiente número entero (Math.ceil) según lo decida el usuario.
Ejemplo: redondearNumero(4.2, "ceil")
*/

function redondearNumero(numero, parametro){
   if(parametro=="round"){
        return redondeoround = Math.round(numero)
   }else if(parametro=="ceil"){
        return redondeoarriba = Math.ceil(numero)
   }else{
    return invalido = "opcion invalida"
   }
}

/*
7.Haga una funcion que normalice un texto (elimine los espacios al inicio y al final y luego lo deje en minúscula)
Ejemplo: normalizarTexto("   Hola Mundo   ") debería retornar "hola mundo"
*/

function normalizarTexto(texto){
  return textonormalizado = texto.trim().toLowerCase()
}


/*
8.Haga una funcion que, dado el siguiente texto "  thIs Is a StrIng MounTAin AndES   ", 
retorne "This is a string mountain andes".
Ejemplo: formatearTexto("  thIs Is a StrIng MounTAin AndES   "), retorne "This is a string mountain andes" 
*/
function formatearTexto(texto){
    let textosinespacio = texto.trim()  // elimina los espacios iniciales y finales
    let textominuscula = textosinespacio.toLowerCase()   // convierte en minúscula
    let primeraletra = textominuscula.charAt(0)     //   elige la primera letra
    let primeramayuscula = primeraletra.toUpperCase()   // lo convierte en mayuscula
    let restotexto = textominuscula.slice(1)  // recorta desde la segunda letra
    return textocompleto = primeramayuscula + restotexto
}

/*
9.Haga una función que dado un número verifique si es un número entero o un número decimal.
Ejemplo: esEntero(4.2) debería retornar false.
Ejemplo: esEntero(4) debería retornar true.
*/

function esEntero(numero){
   return numeroentero = Number.isInteger(numero)
}


/*
10.Haga una funcion que dado tres números devuelva un objeto con el número mayor y el número menor

Ejemplo: encontrarExtremos(1,3,5) debería retornar {mayor: 5, menor:1}
*/

function encontrarExtremos(num1, num2, num3){
      let numeromayor = Math.max(num1,num2,num3)
      let numeromenor = Math.min(num1,num2,num3)
      return mayorymenor = {
        mayor: numeromayor,
        menor: numeromenor,
      }
    }
