var btn = document.querySelector('button');
var text = document.querySelector('p');

function swapText(e) {
  text.innerHTML = 'Nice To Meet You';
}

btn.addEventListener('click', swapText);