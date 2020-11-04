const btns = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content');
const docsMain = document.querySelector('.docs-main ');

docsMain.addEventListener('click', (e) => {
  let id = e.target.dataset.id;
  if (id) {
    content.forEach((cnt) => {
      cnt.classList.add('active');
    });
    let element = e.target;
    // console.log(element);
    element.classList.add('active');
  }
});
