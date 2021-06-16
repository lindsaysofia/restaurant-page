import './style.css';

function homePage() {
  const content = document.querySelector('#content');

  let pWelcome = document.createElement('p');
  pWelcome.textContent = `Welcome to Linda's!`;
  pWelcome.classList.add('home');

  let pIntro = document.createElement('p');
  pIntro.innerHTML = `Coffee you'll love &#x2665;`;
  pIntro.classList.add('home');

  content.appendChild(pWelcome);
  content.appendChild(pIntro);
}

export default homePage;