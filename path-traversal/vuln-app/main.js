const WHITE_LIST = [
  'home',
  'contact'
];

const navigate = (page) => {
  fetch(`pages/${page}.html`)
    .then(data => data.text())
    .then(html => document.getElementById('page').innerHTML = html);
};

window.addEventListener('hashchange', () => {
  const page = location.hash.substring(2);
  console.log(page);
  if(!WHITE_LIST.includes(page)) return;
  navigate(page);
});
