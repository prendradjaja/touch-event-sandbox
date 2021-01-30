function handleClick(button) {
  button.classList.add('active');
  setTimeout(() => {
    button.classList.remove('active');
  }, 500);
  document.getElementById('log').innerHTML += '<br>click';
}
