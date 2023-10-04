const slider = document.getElementById('slider');
const body = document.body;
const pantallaLcd = document.getElementById('pantalla-lcd');
const cuerpoBotones = document.getElementById('cuerpo-botones');
const textCalc = document.getElementById('p');
const numerosThema = document.querySelectorAll('.numbers');


slider.addEventListener('input', () => {
  const value = parseFloat(slider.value);
  
  if (value === 1) {
    
    
    body.style.backgroundColor = 'hsl(222, 26%, 31%)';
    pantallaLcd.style.backgroundColor = 'hsl(224, 36%, 15%)';
    cuerpoBotones.style.backgroundColor = 'hsl(223, 31%, 20%)';
    textCalc.style.color = 'hsl(0, 0%, 100%)';
    numerosThema.forEach(numero => {
      numero.style.color = 'hsl(0, 0%, 100%)';
    });
    
    
  } else if (value === 2) {
    
    
    body.style.backgroundColor = 'hsl(0, 0%, 90%)';
    pantallaLcd.style.backgroundColor = 'hsl(0, 0%, 93%)';
    cuerpoBotones.style.backgroundColor = 'hsl(0, 5%, 81%)';
    textCalc.style.color = 'hsl(60, 10%, 19%)';
    
    numerosThema.forEach(numero => {
      numero.style.color = 'hsl(60, 10%, 19%)';
    });
 
  } else if (value === 3) {
    
    
    body.style.backgroundColor = 'hsl(268, 75%, 9%)';
    pantallaLcd.style.backgroundColor = 'hsl(268, 71%, 12%)';
    cuerpoBotones.style.backgroundColor = 'hsl(268, 71%, 12%)';
    textCalc.style.color = 'hsl(52, 100%, 62%)';
    
    numerosThema.forEach(numero => {
      numero.style.color = 'hsl(52, 100%, 62%)';
    });
  }
});
