document.querySelector('.themetoggle').addEventListener('click', event => {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  addDarkClassToHTML();
});

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('body').classList.add('dark');
      document.querySelector('.themetoggle').classList.add('dark');
      document.querySelector('.material-icons').classList.add('dark');
      document.querySelector('.main-render').classList.add('dark');
      document.querySelector('header').classList.add('dark');
      document.querySelector('.main-render').classList.add('dark');
    } else {
      document.querySelector('body').classList.remove('dark');
      document.querySelector('.themetoggle').classList.remove('dark');
      document.querySelector('.material-icons').classList.remove('dark');
      document.querySelector('.main-render').classList.remove('dark');
      document.querySelector('header').classList.remove('dark');
      document.querySelector('.main-render').classList.remove('dark');
    }
  } catch (err) {}
}

addDarkClassToHTML();
