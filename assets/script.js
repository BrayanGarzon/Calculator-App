const slider = document.getElementById('slider');
const body = document.body;
const pantallaLcd = document.getElementById('pantalla-lcd');
const cuerpoBotones = document.getElementById('cuerpo-botones');
const textCalc = document.getElementById('p');
const numerosThema = document.querySelectorAll('.numbers');
const button = document.querySelectorAll('.button');
const buttonIgual = document.getElementById('button-igual');
const buttonReset = document.getElementById('button-reset');
const buttonDel = document.getElementById('del');










slider.addEventListener('input', () => {
  const value = parseFloat(slider.value);
  
  if (value === 1) {
    
    
    body.style.backgroundColor = 'hsl(222, 26%, 31%)';
    pantallaLcd.style.backgroundColor = 'hsl(224, 36%, 15%)';
    cuerpoBotones.style.backgroundColor = 'hsl(223, 31%, 20%)';
    textCalc.style.color = 'hsl(0, 0%, 100%)';

    //numeros
    numerosThema.forEach(numero => {
      numero.style.color = 'hsl(0, 0%, 100%)';
    });

    //botones
    button.forEach(boton =>{
      boton.style.color = 'hsl(0, 0%, 100%)';
      boton.style.backgroundColor = 'hsl(28, 16%, 65%)';
    });


    buttonIgual.style.color = 'hsl(0, 0%, 100%)';
    buttonIgual.style.backgroundColor = 'hsl(6, 70%, 34%)';
    buttonReset.style.color = 'hsl(0, 0%, 100%)';
    buttonReset.style.backgroundColor = 'hsl(224, 28%, 35%)';
    del.style.color = 'hsl(0, 0%, 100%)';
    del.style.backgroundColor = 'hsl(224, 28%, 35%)';


  } else if (value === 2) {
    
    
    body.style.backgroundColor = 'hsl(0, 0%, 90%)';
    pantallaLcd.style.backgroundColor = 'hsl(0, 0%, 93%)';
    cuerpoBotones.style.backgroundColor = 'hsl(0, 5%, 81%)';
    textCalc.style.color = 'hsl(60, 10%, 19%)';
    
    numerosThema.forEach(numero => {
      numero.style.color = 'hsl(60, 10%, 19%)';
    });

    //botones
    button.forEach(boton =>{
      boton.style.color = 'hsl(60, 10%, 19%)';
      boton.style.backgroundColor = 'hsl(45, 7%, 89%)';
    });


    buttonIgual.style.color = 'hsl(0, 0%, 100%)';
    buttonIgual.style.backgroundColor = 'hsl(25, 99%, 27%)';
    buttonReset.style.color = 'hsl(0, 0%, 100%)';
    buttonReset.style.backgroundColor = 'hsl(185, 58%, 25%)';
    del.style.color = 'hsl(0, 0%, 100%)';
    del.style.backgroundColor = 'hsl(185, 58%, 25%)';



 
  } else if (value === 3) {
    
    
    body.style.backgroundColor = 'hsl(268, 75%, 9%)';
    pantallaLcd.style.backgroundColor = 'hsl(268, 71%, 12%)';
    cuerpoBotones.style.backgroundColor = 'hsl(268, 71%, 12%)';
    textCalc.style.color = 'hsl(52, 100%, 62%)';
    
    numerosThema.forEach(numero => {
      numero.style.color = 'hsl(52, 100%, 62%)';
    });

    //botones
    button.forEach(boton =>{
      boton.style.color = 'hsl(52, 100%, 62%)';
      boton.style.backgroundColor = 'hsl(268, 47%, 21%)';
    });





    
    buttonIgual.style.color = 'hsl(0, 0%, 100%)';
    buttonIgual.style.backgroundColor = 'hsl(176, 100%, 44%)';
    buttonReset.style.color = 'hsl(0, 0%, 100%)';
    buttonReset.style.backgroundColor = 'hsl(281, 89%, 26%)';
    del.style.color = 'hsl(0, 0%, 100%)';
    del.style.backgroundColor = 'hsl(281, 89%, 26%)';
  }
});
