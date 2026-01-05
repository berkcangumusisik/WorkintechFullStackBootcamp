// Kodlar Buraya
const descriptionDiv = document.querySelector('.description');

const button = document.createElement('button');
button.setAttribute('id', 'acKapa');
button.textContent = 'Karanlık temayı aç';

descriptionDiv.appendChild(button);

function karanlikTemayiAcKapa() {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    button.textContent = 'Karanlık temayı kapat';
  } else {
    button.textContent = 'Karanlık temayı aç';
  }
}

button.addEventListener('click', karanlikTemayiAcKapa);
