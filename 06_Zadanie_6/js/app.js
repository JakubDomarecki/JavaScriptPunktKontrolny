document.addEventListener("DOMContentLoaded", function () {
    const BtnAdd = document.getElementById('button-1');
    const BtnRemove = document.getElementById('button-2');
    const BtnClone  = document.getElementById('button-3');
    const ul = document.getElementById('shopping-list');


    BtnAdd.addEventListener("click", function (e) {
        const newLi = document.createElement('li');
        newLi.classList.add('list-group-item');
        newLi.innerText = "Chleb";
        ul.appendChild(newLi);
    });

    BtnRemove.addEventListener("click", function () {
        if (ul.children.length > 0) {
            const lastLi = ul.lastElementChild;
            ul.removeChild(lastLi);
        } else {
            console.log('Lista jest pusta')
        }
    });
    BtnClone.addEventListener("click", function () {

        if (ul.children.length > 1) {
            const clone = ul.children[1];
            const NewClone= clone.cloneNode(true);
            ul.appendChild(NewClone);
        }
        else {
            console.log('Lista zawiera jeden lub mniej produktów');
        }
    });


});


