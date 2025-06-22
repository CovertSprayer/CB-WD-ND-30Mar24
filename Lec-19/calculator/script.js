const buttons = document.querySelectorAll("td");
const screen = document.querySelector('input');

for(let button of buttons){
  button.addEventListener('click', (e) => {
    e.target.style.animation = "bounce 400ms"
    try {
      const btn = e.target.innerText;

      if(btn.toLowerCase() === 'c'){
        screen.value = '';
      }  
      else if(btn.toLowerCase() === 'x') {
        screen.value += '*';
      }
      else if (btn.toLowerCase() === '=') {
        screen.value = eval(eval(screen.value));
      }
      else{ 
        screen.value += e.target.innerText;
      }
    } catch (error) {
      screen.value = "Invalid Operation!"
    }
  })
}