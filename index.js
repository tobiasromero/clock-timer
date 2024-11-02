//let cent=0;
//let seg=0;
//let min=0;
let interval;
let tiempoTranscurrido = 0;
let inicioTiempo;

let estaCorriendo = false;


let display = document.getElementById("display")
let stop = document.getElementById("stop")
let start = document.getElementById("start")
let reset = document.getElementById("reset")

function cronometerRefres(){
   /* cent ++
    if(cent >=99){
        cent = 0;
        seg++;
    }
    if(seg>=60){
        seg=0
        min++
    }*/
        const tiempoActual = Date.now();
    const diferencia = tiempoActual - inicioTiempo + tiempoTranscurrido;

    const minutos = Math.floor(diferencia / 60000);
    const segundos = Math.floor((diferencia % 60000) / 1000);
    const centesimas = Math.floor((diferencia % 1000) / 10);

    /*let cente = cent.toString().padStart(2,0)
    let segu = seg.toString().padStart(2,0)
    let minu = min.toString().padStart(2,0)

    display.textContent = `${minu}:${segu}:${cente}`;*/
    display.textContent = 
        `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}:${centesimas.toString().padStart(2, "0")}`;
}

function startCount(){
    /*if(!interval)
    interval=setInterval(cronometerRefres,10)*/
    if(!estaCorriendo){
        inicioTiempo=Date.now()
        interval = setInterval(cronometerRefres,10)
        estaCorriendo=true
    }
}

function stopCount(){
    if(estaCorriendo){
        clearInterval(interval)
    //interval=null
    tiempoTranscurrido += Date.now() - inicioTiempo;
    estaCorriendo=false
    }
}

function resetCount(){
    stopCount()
    
    display.textContent="00:00:00"
    estaCorriendo=false
}
start.addEventListener("click",startCount)
stop.addEventListener("click",stopCount)
reset.addEventListener("click",resetCount)


let reloj = document.getElementById("reloj")
let horaActual
function hora(){
    
    data = new Date()
    hora = data.getHours().toString().padStart(2,"0")
    minutos = data.getMinutes().toString().padStart(2,"0")
    segundos = data.getSeconds().toString().padStart(2,"0")
    contenedorHora=  `${hora}:${minutos}:${segundos}`
    reloj.textContent=contenedorHora

}

function actualizar(){

   setInterval(hora,1000)
}

actualizar()