document.querySelector('.tabs').addEventListener('click', event => {
  if (event.target.classList.contains('outline')) {
    event.preventDefault();
  }
});
