import './style.css';

function contactPage() {
  const content = document.querySelector('#content');
  const contact = document.querySelector('.contact');
  contact.classList.add('active');

  const h3 = document.createElement('h3');
  h3.textContent = 'Please visit or contact us, we love hearing from you!';

  const email = document.createElement('div');
  email.classList.add('contact-item');
  email.innerHTML = `<i class="fas fa-envelope-open-text"></i><p>pleasedontemail@thisisfake.com</p>`;

  const phone = document.createElement('div');
  phone.classList.add('contact-item');
  phone.innerHTML = `<i class="fas fa-phone-square-alt"></i><p>123-456-7890</p>`;

  const address = document.createElement('div');
  address.classList.add('contact-item');
  address.innerHTML = `<i class="fas fa-map-marked-alt"></i><p>12345 Totally Real Place Dr <br> Real Place, Real State, 12345</p>`;

  const socials = document.createElement('div');
  socials.classList.add('socials');
  socials.innerHTML = `<i class="fab fa-twitter"></i> <i class="fab fa-instagram"></i> <i class="fab fa-github"></i>`;


  content.appendChild(h3);
  content.appendChild(email);
  content.appendChild(phone);
  content.appendChild(address);
  content.appendChild(socials);

}

export default contactPage;