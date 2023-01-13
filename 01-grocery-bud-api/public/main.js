/* SELECT ITEMS */
/* ==================================================================================================== */

const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.querySelector('#grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

/* EDIT VARIABLES */
/* ==================================================================================================== */

let editElement;
let editFlag = false;

/* FUNCTIONS */
/* ==================================================================================================== */

function submitForm(e) {
    e.preventDefault();
    const value = grocery.value;
    if (value && !editFlag) {
        createListItem(value);
        container.classList.add('show-container');
        displayAlert('item added to the list', 'success');
        setBackToDefault();
    } else if (value && editFlag) {
        editElement.textContent = grocery.value;
        displayAlert('item has been updated', 'success');
        setBackToDefault();
    } else {
        displayAlert('please enter value', 'danger');
    }
}

function editItem(e) {
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.textContent;
    editFlag = true;
    submitBtn.textContent = 'edit';
}

function deleteItem(e) {
    e.currentTarget.parentElement.parentElement.remove();
    displayAlert('Item removed from the list', 'danger');
    setBackToDefault();
    if (list.children.length < 1) {
        container.classList.remove('show-container');
    }
}

function clearItems() {
    const items = document.querySelectorAll('.grocery-item');
    items.forEach(function (item) {
        item.remove();
    });
    displayAlert('items removed', 'danger');
    container.classList.remove('show-container');
    setBackToDefault();
}

function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    setTimeout(function () {
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

function setBackToDefault() {
    grocery.value = '';
    editFlag = false;
    submitBtn.textContent = 'submit';
}

function createListItem(value) {
    const element = document.createElement('article');
    element.classList.add('grocery-item');
    element.innerHTML = `<p class="title"></p>
                             <div class="btn-container">
                                <button type="button" class="edit-btn">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="delete-btn">
                                    <i class="fas fa-trash"></i>
                                </button>
                             </div>`;
    const title = element.querySelector('.title');
    title.textContent = value;
    const editBtn = element.querySelector('.edit-btn');
    const deleteBtn = element.querySelector('.delete-btn');
    editBtn.addEventListener('click', editItem);
    deleteBtn.addEventListener('click', deleteItem);
    list.append(element);
}

/* EVENT LISTENERS */
/* ==================================================================================================== */

form.addEventListener('submit', submitForm);
clearBtn.addEventListener('click', clearItems);

/* END */
/* ==================================================================================================== */
