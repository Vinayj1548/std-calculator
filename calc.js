const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btns');

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        const value = button.textContent;
        if (value === 'AC') {
            display.value = '';
          } else if (value  === 'del') {
            display.value = display.value.slice(0, -1);
          } else if (value === '=') {
            try {
              display.value = eval(display.value);
            } catch (error) {
              display.value = 'Error';
            }
          } else {
            display.value += value;
        }
    })
})

function darkMode() {
  document.getElementsByTagName('legend')[0].style.color = '#f0f0f0';
  document.body.style.background = 'linear-gradient(to right, #1d4350, #a43931)';
  buttons.forEach(button => {
    button.style.backgroundColor = '#202020';
    button.style.color = '#f0f0f0';
    display.style.backgroundColor = '#202020';
    display.style.color = '#f0f0f0';
  })
}

function lightMode() {
  document.getElementsByTagName('legend')[0].style.color = '#202020';
  document.body.style.background = 'linear-gradient(to right, #00d2ff, #928dab)';
  buttons.forEach(button => {
    button.style.backgroundColor = '#f0f0f0';
    button.style.color = '#202020';
    display.style.backgroundColor = '#f0f0f0';
    display.style.color = '#202020';
  })
}

