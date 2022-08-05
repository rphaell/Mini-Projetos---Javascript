const turnOnOff = document.getElementById( 'turnOnOff' );
const lamp = document.getElementById( 'lamp' );

function isLampBroken (){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn (){
    if (!isLampBroken()){
        lamp.src = './img/ligada.jpg';
        turnOnOff.textContent = 'Desligar';
    }
}
function lampOff (){
    if (!isLampBroken()){
        lamp.src = './img/desligada.jpg';
        turnOnOff.textContent = 'Ligar';
    }
}
function lampBroken (){
    if (!isLampBroken()){
        lamp.src = './img/quebrada.jpg';
        turnOnOff.src = lampOnOff();
    }
}

function lampOnOff (){

    if (turnOnOff.textContent == 'Ligar' && !isLampBroken()){
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }else{
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}

function lampBrokenReset(){
    if(isLampBroken()){
        lamp.src = './img/desligada.jpg';
        lampOff();
    }
}


turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('dblclick', lampBroken);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
turnOnOff.addEventListener('dblclick', lampBrokenReset);