//solution goes here....
const form = document.querySelector('#add');
const input = document.querySelector('#aadd-input');
const list = document.querySelector('#list');

form.addEventListener('submit', function(e){
    e.preventDefault();
    if(!e.target[0].value) return;
    const newEl = document.createElement('li');
    newEl.innerHTML = `<p>${e.target[0].value}</p>
    <p><i class="fa fa-pencil-square-o"></i><i class="fa fa-times"></i></p>
    <input class="edit-note" type="text">`;
    list.appendChild(newEl);
    e.target[0].value = '';
});
