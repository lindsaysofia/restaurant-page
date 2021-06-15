import './style.css';
import bg from './bg.jpeg';

function homePage() {
  let h1 = document.createElement('h1');
  h1.textContent = `Linda's`;
  
  let h2 = document.createElement('h2');
  h2.textContent = `Coffee you'll love.`;

   /* 
  Photo by <a href="https://unsplash.com/@asthetik?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mike Kenneally</a> on <a href="https://unsplash.com/s/photos/coffee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  */
 
  let img = document.createElement('img');
  img.src = bg;
  img.alt = 'An image of a coffee cup next to spilled coffee beans';

  let nav = document.createElement('nav');
  let ul = document.createElement('ul');
  let home = document.createElement('li');
  home.textContent = 'Home';
  let menu = document.createElement('li');
  menu.textContent = 'Menu';
  let contact = document.createElement('li');
  contact.textContent = 'Contact';

  const content = document.querySelector('div#content');
  content.appendChild(h1);
  content.appendChild(h2);
  content.appendChild(nav);
  nav.appendChild(ul);
  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(contact);
  content.appendChild(img);
}

export default homePage;