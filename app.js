let numerosecreto;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function AsignarTextoElemento(elemento,texto){
    let mielemento = document.querySelector(elemento);
    mielemento.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    console.log(intentos)
    if (numeroDeUsuario === numerosecreto){
        AsignarTextoElemento("p",`felicitaciones,tu acertaste el número en ${intentos} ${(intentos === 1) ? `vez` :`veces`}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
        
    }else{

        //el usuario no acertó
        if(numeroDeUsuario > numerosecreto){
            AsignarTextoElemento("p","el número secreto es menor");
        }else{
            AsignarTextoElemento("p","el número secreto es mayor");
        }

        intentos++;
        limpiarcaja();
    }

    return;
}

function limpiarcaja() {
   let valorCaja =  document.querySelector("#valorUsuario");
   valorCaja.value = "";
    
}


AsignarTextoElemento("h1", "Mi juego del amigo secreto ");
AsignarTextoElemento("p", "vale,Ahora Por favor indica un número del 1 al 10 ");

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados)
    //si ya sorteamos todos los números 
    if (listaNumerosSorteados.length == numeroMaximo){
        AsignarTextoElemento("p","ya se sortearon todos los números posibles")

    }else{

        //revisa la lita y verifica los números en la lista para verificar si ya han salido
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        }else{
            //guardamos ese número generado en la lista para que no vuelva a salir 
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
        
    }
}
function condicionesIniciales(){
    AsignarTextoElemento("h1", "Juego adivina un número secreto");
    AsignarTextoElemento("p", `Ahora Por favor indica un número del 1 al ${numeroMaximo} para ver si aciertas`);
    numerosecreto = generarNumeroSecreto();
    intentos = 1;

}

function reinicarjuego(){
    //limpiar la caja
    limpiarcaja();
    //indicar mensaje de intervalo de números
    
    //generar el número aleatorio
    
    //inicializar el número de intentos 
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled",true);
    
}

condicionesIniciales();
console.log(numerosecreto)