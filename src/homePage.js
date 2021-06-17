import './style.css';

function homePage() {
  const content = document.querySelector('#content');
  const home = document.querySelector('.home');
  home.classList.add('active');

  let pWelcome = document.createElement('p');
  pWelcome.textContent = `Welcome to Linda's!`;
  pWelcome.classList.add('home-page');

  let pIntro = document.createElement('p');
  pIntro.innerHTML = `Coffee you'll love &#x2665;`;
  pIntro.classList.add('home-page');

  content.appendChild(pWelcome);
  content.appendChild(pIntro);
}

export default homePage;