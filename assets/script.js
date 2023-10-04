const slider = document.getElementById('slider');
const cuerpo = document.getElementById('section');
const body = document.body;


slider.addEventListener('input', () => {
  const value = parseFloat(slider.value);
  
  if (value === 1) {
    
    cuerpo.style.backgroundColor = 'white';
    body.style.backgroundColor = 'hsl(222, 26%, 31%)';
    
  } else if (value === 2) {
    console.log('Centro');
    cuerpo.style.backgroundColor = 'aqua';
    body.style.backgroundColor = 'hsl(0, 0%, 90%)';
 
  } else if (value === 3) {
    console.log('Derecha');
    cuerpo.style.backgroundColor = 'aquamarine';
    body.style.backgroundColor = 'hsl(268, 75%, 9%)';
  }
});
