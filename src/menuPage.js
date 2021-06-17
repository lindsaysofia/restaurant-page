import './style.css';
import coffeeImg from './images/coffee.jpeg';
import latteImg from './images/latte.jpeg';
import macchiatoImg from './images/macchiato.jpeg';
import espressoImg from './images/espresso.jpeg';


function menuPage() {
  const content = document.querySelector('#content');
  const menu = document.querySelector('.menu');
  menu.classList.add('active');

  let menuItems = [{src: coffeeImg, description: 'Coffee'}, {src: macchiatoImg, description: 'Macchiato'}, {src: latteImg, description: 'Latte'}, {src: espressoImg, description: 'Espresso'}];

  menuItems.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('menu-item');
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = `Image of ${item.description} cup`;
    const p = document.createElement('p');
    p.textContent = item.description;
    div.appendChild(img);
    div.appendChild(p);
    content.appendChild(div);
  });
}

export default menuPage;