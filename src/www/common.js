function page(stub, href) {
  return { stub, href };
}

const PAGES = [
  page('home', '/index.html'),
  page('blog', '/blog'),
  page('links', '/links.html'),
  page('about', '/about.html'),
];

/**
 * create a button which links to something
 */
function linkButton(text, href) {
  const button = document.createElement('button');

  button.classList.add('header-link')
  button.innerText = text;
  button.onclick = () => {
    window.location.href = href;
  };

  return button;
}

/**
 * generate common header contents
 */
function genHeader(div) {
  div.textContent = '';

  PAGES
    .map(({stub, href}) => linkButton(stub, href))
    .forEach((child) => div.appendChild(child));
}

/**
 * generate common footer contents
 */
function genFooter(div) {
  div.textContent = 'Copyright 2024 axqr';
}

addEventListener('load', () => {
  const header = document.querySelector('#header');
  const footer = document.querySelector('#footer');

  genHeader(header);
  genFooter(footer);
});
