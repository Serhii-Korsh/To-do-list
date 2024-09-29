//TODO-1
// Напишіть логіку обробнику подій по сабміту
// При сабміті треба у змінну записувати значення поля інпута
// Повинна бути перевірка на порожнє поле.
const form = document.querySelector("#task-form");
const formUl = document.querySelector("#task-list");
form.addEventListener("submit", onFormSubmit);
const localStor = [];
function onFormSubmit(event) {
    event.preventDefault();
    
    const onFormInput = event.target.taskName.value;
    if (!onFormInput) { return; }
    console.log(onFormInput);
    formUl.insertAdjacentHTML("beforeend", `<li>${onFormInput}<button>x</button></li>`);
    localStor.push(onFormInput);
    locolStorrege("task_key", localStor);
    
};
function locolStorrege(key, value) { localStorage.setItem(key, JSON.stringify(value)) };


//TODO-2
// Напишіть логіку яка з сабміта буде брати значення поля інпут
// Генерувати елемент списку LI  з текстом і кнопкою Х, у майбутньому це буде кнопка видалення таски

//TODO-3
// Написати функцію, яка при сабміті буде зберігати данні в сховище по ключу task_key, в сховище повинні додаватись таски, а не перезаписуватись існуюча

