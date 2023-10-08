const slider = document.getElementById('slider');
const body = document.body;
const textThema = document.getElementById('textTheme');

const cuerpoBotones = document.getElementById('cuerpo-botones');
const textCalc = document.getElementById('p');
const numerosThema = document.querySelectorAll('.numbers');

const buttonIgual = document.getElementById('button-igual');
const buttonReset = document.getElementById('button-reset');
const buttonDel = document.getElementById('del');

/*OPERATION OF CALCULATOR */
const botones = document.querySelectorAll('.button');
const pantallaLcd = document.getElementById('pantalla-lcd');

const estilosSlider = {
  'value-1': {
    trackBackground: 'hsl(223, 31%, 20%)',
    thumbBackground: '#e74c3c',
  },
  'value-2': {
    trackBackground: '...otro color...',
    thumbBackground: '...otro color...',
  },
  'value-3': {
    trackBackground: '...otro color...',
    thumbBackground: '...otro color...',
  },
};

botones.forEach(boton =>{
  boton.addEventListener("click", () =>{
    
    const botonApretado = boton.textContent;

    /*conditional of reset */
    if(boton.id === 'button-reset'){
      pantallaLcd.textContent = "0"
      return;
    }

    /*conditional of del */
    if (boton.id === 'del'){
      if(pantallaLcd.textContent.length === 1){
        pantallaLcd.textContent = "0";
        
      }else{
        pantallaLcd.textContent = pantallaLcd.textContent.slice(0, -1);
      }
      
      return;
    }

    if(boton.id === 'button-igual'){
      try{
        pantallaLcd.textContent = eval(pantallaLcd.textContent);
      }catch{
        pantallaLcd.textContent = 'Error!';

      }
      
      return;
    }


    if (pantallaLcd.textContent === "0"){
      pantallaLcd.textContent = botonApretado;
    }else{
      pantallaLcd.textContent += botonApretado;
    }

    

  })
})



/* CHANGE THEMA */


// Cambiar el tema por defecto al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  cambiarTema(1); // Aplicar el tema 1 por defecto
});

// Cambiar el tema en función del valor del slider
slider.addEventListener('input', () => {
  const value = parseFloat(slider.value);
  cambiarTema(value);
});


function cambiarTema(value){
  
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
    botones.forEach(boton =>{
      boton.style.color = 'sl(221, 14%, 31%)';
      boton.style.backgroundColor = 'hsl(30, 25%, 89%)';
    });


    buttonIgual.style.color = 'hsl(0, 0%, 100%)';
    buttonIgual.style.backgroundColor = 'hsl(6, 70%, 34%)';
    buttonReset.style.color = 'hsl(0, 0%, 100%)';
    buttonReset.style.backgroundColor = 'hsl(224, 28%, 35%)';
    del.style.color = 'hsl(0, 0%, 100%)';
    del.style.backgroundColor = 'hsl(224, 28%, 35%)';
    textThema.style.color = 'hsl(0, 0%, 100%)';


    /*styles of texto pantalla */
    pantallaLcd.style.color = 'hsl(0, 0%, 100%)';
    pantallaLcd.style.fontSize = '45px';
    pantallaLcd.style.padding = '10px';
    pantallaLcd.style.boxSizing = 'border-box';



    // Elimina todas las clases de estilo
    slider.classList.remove('value-1', 'value-2', 'value-3');

    /*styles for slider type range */
    slider.classList.add('value-1');
    
    

  } else if (value === 2) {
    
    
    body.style.backgroundColor = 'hsl(0, 0%, 90%)';
    pantallaLcd.style.backgroundColor = 'hsl(0, 0%, 93%)';
    cuerpoBotones.style.backgroundColor = 'hsl(0, 5%, 81%)';
    textCalc.style.color = 'hsl(60, 10%, 19%)';
    
    numerosThema.forEach(numero => {
      numero.style.color = 'hsl(60, 10%, 19%)';
    });

    //botones
    botones.forEach(boton =>{
      boton.style.color = 'hsl(60, 10%, 19%)';
      boton.style.backgroundColor = 'hsl(45, 7%, 89%)';
    });


    buttonIgual.style.color = 'hsl(0, 0%, 100%)';
    buttonIgual.style.backgroundColor = 'hsl(25, 99%, 27%)';
    buttonReset.style.color = 'hsl(0, 0%, 100%)';
    buttonReset.style.backgroundColor = 'hsl(185, 58%, 25%)';
    del.style.color = 'hsl(0, 0%, 100%)';
    del.style.backgroundColor = 'hsl(185, 58%, 25%)';
    textThema.style.color = 'hsl(60, 10%, 19%)';


    /*styles of texto pantalla */
    pantallaLcd.style.color = 'hsl(60, 10%, 19%)';
    pantallaLcd.style.fontSize = '45px';
    pantallaLcd.style.padding = '10px';
    pantallaLcd.style.boxSizing = 'border-box';


    // Elimina todas las clases de estilo
    slider.classList.remove('value-1', 'value-2', 'value-3');

    /*styles for slider type range */
    slider.classList.add('value-2');
 
  } else if (value === 3) {
    
    
    body.style.backgroundColor = 'hsl(268, 75%, 9%)';
    pantallaLcd.style.backgroundColor = 'hsl(268, 71%, 12%)';
    cuerpoBotones.style.backgroundColor = 'hsl(268, 71%, 12%)';
    textCalc.style.color = 'hsl(52, 100%, 62%)';
    
    numerosThema.forEach(numero => {
      numero.style.color = 'hsl(52, 100%, 62%)';
    });

    //botones
    botones.forEach(boton =>{
      boton.style.color = 'hsl(52, 100%, 62%)';
      boton.style.backgroundColor = 'hsl(268, 47%, 21%)';
    });


    
    buttonIgual.style.color = 'hsl(0, 0%, 100%)';
    buttonIgual.style.backgroundColor = 'hsl(176, 100%, 44%)';
    buttonReset.style.color = 'hsl(0, 0%, 100%)';
    buttonReset.style.backgroundColor = 'hsl(281, 89%, 26%)';
    del.style.color = 'hsl(0, 0%, 100%)';
    del.style.backgroundColor = 'hsl(281, 89%, 26%)';


    /*styles of texto pantalla */
    pantallaLcd.style.color = 'hsl(52, 100%, 62%)';
    pantallaLcd.style.fontSize = '45px';
    pantallaLcd.style.padding = '10px';
    pantallaLcd.style.boxSizing = 'border-box';

    textThema.style.color = 'hsl(52, 100%, 62%)';
 

    // Elimina todas las clases de estilo
    slider.classList.remove('value-1', 'value-2', 'value-3');

    /*styles for slider type range */
    slider.classList.add('value-3');

    
  }
  
}


