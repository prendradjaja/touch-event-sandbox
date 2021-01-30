function handleClick(button) {
  button.classList.add('active');
  document.getElementById('log').innerHTML += '<br>start ' + button.innerText;
}

function handleRelease(button) {
  button.classList.remove('active');
  document.getElementById('log').innerHTML += '<br>end ' + button.innerText;
}
