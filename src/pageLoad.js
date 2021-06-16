import './style.css';

function pageLoad() {
  let h1 = document.createElement('h1');
  h1.textContent = `Linda's`;
  
  let h2 = document.createElement('h2');
  h2.textContent = `Coffee you'll love.`;

  let nav = document.createElement('nav');
  let ul = document.createElement('ul');
  let home = document.createElement('li');
  home.textContent = 'Home';
  let menu = document.createElement('li');
  menu.textContent = 'Menu';
  let contact = document.createElement('li');
  contact.textContent = 'Contact';

  const header = document.querySelector('header');
  header.appendChild(h1);
  header.appendChild(h2);
  header.appendChild(nav);
  nav.appendChild(ul);
  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(contact);
}

export default pageLoad;