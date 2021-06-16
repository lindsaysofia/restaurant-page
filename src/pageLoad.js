import './style.css';

export function pageLoad() {
  let h1 = document.createElement('h1');
  h1.textContent = `Linda's`;

  let nav = document.createElement('nav');
  let ul = document.createElement('ul');
  let home = document.createElement('li');
  home.textContent = 'Home';
  home.classList.add('active');
  let menu = document.createElement('li');
  menu.textContent = 'Menu';
  let contact = document.createElement('li');
  contact.textContent = 'Contact';

  const header = document.querySelector('header');
  header.appendChild(h1);
  header.appendChild(nav);
  nav.appendChild(ul);
  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(contact);
}

export function clearLi() {
  const listItems = document.querySelectorAll('li');
  listItems.forEach(li => {
    li.classList.remove('active');
  })
}

export function clearContent() {
  const content = document.querySelector('#content');
  content.html = '';
}