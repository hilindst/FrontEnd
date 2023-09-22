const body = document.body;
const input = document.querySelector('.link-input');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('#link-form');
const linkList = document.querySelector('.link-list');
const allLinks = JSON.parse(localStorage.getItem('link-list'));

//console.log to check variables


input.addEventListener('focus', focusInput);
input.addEventListener('click', endFocus);

//form Submit Event Listener
form.addEventListener("submit", createLink);

function focusInput() {
  body.classList.add('focus-form')

}

function endFocus() {
  if (body.classList.contains('focus-form')) {
    body.classList.remove('focus-form');
  }
}

function createLink(e) {  //e = event
  e.preventDefault();   //keeps html page from refreshing
  
  const url = input.value;
  const linkContainer = document.createElement('li');
  const newLink = document.createElement('a');

  allLinks.push(url);
  saveAllLinksToLocalStorage(allLinks);

  newLink.className = 'link';
  newLink.innerText = url;
  newLink.href = url;
  newLink.target = "_blank";

  linkContainer.appendChild(newLink);
  linkList.appendChild(linkContainer);

  form.reset();
  
}

function saveAllLinksToLocalStorage(links = []) {
  localStorage.setItem('link-list', json.stringify(links));
}

function populateLinkList(links = []) {
  linkList.innerHTML = links.map(
    (link) => {
      return `<li> <a class="link" href=${link} target="_blank">${link}</a></li>`;
    }
  ).join('');
}