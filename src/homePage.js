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

  const content = document.querySelector('div#content');
  content.appendChild(h1);
  content.appendChild(h2);
  content.appendChild(img);
}

export default homePage;