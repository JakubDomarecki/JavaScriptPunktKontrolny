const btns = document.querySelectorAll('button');
const alert = document.querySelector('.alert');

    btns.forEach(function (btn) {
       btn.addEventListener("click", function (e) {
           alert.innerText = btn.dataset.text;
       });
    });

    // 2 roziwazanie
// const buttons = document.querySelector('.row');
//
// buttons.addEventListener('click', function (e) {
//     const button = e.target;
//     if (button.classList.contains('btn')) {
//         alert.innerText = button.dataset.text;
//     }
// });