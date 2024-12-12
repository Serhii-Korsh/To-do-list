//TODO-1
// Напишіть логіку обробнику подій по сабміту
// При сабміті треба у змінну записувати значення поля інпута
// Повинна бути перевірка на порожнє поле.
// import { nanoid } from 'nanoid'
// const form = document.querySelector("#task-form");
// const formUl = document.querySelector("#task-list");
// form.addEventListener("submit", onFormSubmit);
// let localStor = JSON.parse(localStorage.getItem("task_key")) || [];
// const text = document.querySelector('input[name="taskName"]');

// const { document } = require("postcss");

// const { document } = require("postcss");

// const { document } = require("postcss");

// const { document } = require("postcss");

// console.log(localStor);
// function onFormSubmit(event) {
//     event.preventDefault();
    
//     const onFormInput = event.target.taskName.value;
//     if (!onFormInput) { return; }
//     const id = nanoid();
//     formUl.insertAdjacentHTML("beforeend", `<li id="${id}">${onFormInput}<button id="delit_dtn">x</button></li>`);
//     localStor.push({ text: onFormInput, id });
//     locolStorrege("task_key", localStor);
//     text.value = '';
    
// };
// function locolStorrege(key, value) { localStorage.setItem(key, JSON.stringify(value)) };

// function openLlocolStorrege() {
     
//     const parsedSettings = JSON.parse(localStorage.getItem("task_key"));
//     const murCap = parsedSettings.map(mur => `<li id="${mur.id}">${mur.text}<button>x</button></li>`).join("");
//     formUl.insertAdjacentHTML("beforeend", murCap);
// };

// formUl.addEventListener("click", onDeleteForm);
// function onDeleteForm(event) {
//     if (event.target.nodeName !== "BUTTON") { return; };
    
//     const selectЕlementId = event.target.parentNode.id;
//     var el = document.getElementById(selectЕlementId);
//     el.remove();
//     localStor = localStor.filter(task => task.id !== selectЕlementId);
//    locolStorrege("task_key", localStor);
//     // console.dir(localStorage);
//  };

//TODO-2
// Напишіть логіку яка з сабміта буде брати значення поля інпут
// Генерувати елемент списку LI  з текстом і кнопкою Х, у майбутньому це буде кнопка видалення таски

//TODO-3
// Написати функцію, яка при сабміті буде зберігати данні в сховище по ключу task_key, в сховище повинні додаватись таски, а не перезаписуватись існуюча

//TODO-4
//Відформатуйте код таким чином, щоб данні в сховищі зберігались у вигляді об'єкта { id: value, text: value}, розмітка додавалась з айдішніком на елемент списку li, айдішнік генерувати з допомогою бібліотеки nanoid, її треба встановити
//відповідно треба буде відформатувати код який генерує розмітку при перезавантаженні сторінки, айдішнік генерувати з допомогою бібліотеки nanoid, її треба встановити

//TODO-5
// Написати функцію, яка буде при завантаженні сторінки відмальовувати розмітку беручи данні з ЛС

// Напишите функцию, которая принимает два числа и проверяет, делится ли первое число на второе без остатка. Если делится, функция должна вернуть true, иначе — false.

// function checkDivision(one, two) { if (one % two === 0) {return true };  return false; };
// console.log(checkDivision(10, 5));
// console.log(checkDivision(6, 5));
// console.log(checkDivision(20, 3));
// 3. Фильтрация чётных чисел
// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только чётные числа.
// function evenNumberFilter(numbers) {
//     let numbersNew = [];
//     for (const number of numbers) {
//             if (number % 2 === 0) {
//                numbersNew.push(number);
//         }
//     }
//     return numbersNew;
//     }
// console.log(evenNumberFilter([1, 2, 3, 4, 8]));
 
// 4. Поиск минимального числа в массиве
// Создайте функцию, которая принимает массив чисел и возвращает наименьшее число в массиве.
// function maxMinArray(list) {
//     return Math.min(...list);
//   }

// console.log(maxMinArray([1, 2, 3, 4, 8]));
// 5. Конвертация температуры
// Напишите функцию, которая принимает температуру в градусах Цельсия и возвращает её эквивалент в градусах Фаренгейта. Формула: F = C * 9/5 + 32.
// function conversionThemes(params) {
//    return (params * 9 / 5) + 32;
// }
// console.log(conversionThemes(15));
// Создание и добавление элемента на страницу: Напишите код, который создает новый элемент <p> с текстом "Привет, мир!" и добавляет его в конец элемента с id content.
// const content = document.querySelector("#content");
// content.insertAdjacentHTML("beforeend","<p class='box'> Привет, мир! </p> <button id='changeColorButton'>Change Color</button>");
// const button = document.querySelector("#changeColorButton");
// const box = document.querySelector(".box");
// const color = `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
// // const color = getRandomHexColor();
// const boxColor = (color) => box.style.backgroundColor = color;
// button.addEventListener("click", boxColor);
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
//   console.log(getRandomHexColor());

// Изменение стиля элемента: Напишите код, который меняет цвет фона элемента с классом box на синий при нажатии на кнопку с id changeColorButton.
// Изменение текста элемента: Напишите код, который изменяет текст элемента <h1> с id title на "Новый заголовок", когда пользователь вводит текст в поле ввода с id inputField.
// const input = document.querySelector("#inputField");
// const title = document.querySelector("#title");
// input.addEventListener("input", replaceTitle);
// function replaceTitle() {
//     let inputText = input.value;
//     title.innerText = inputText;
// }
// Перебор всех элементов определенного типа: Напишите код, который находит все элементы <p> на странице и изменяет их текст на "Обновленный текст".
// const arrayP = document.querySelectorAll("p");
// arrayP.forEach((arrP) => arrP.innerHTML = "Обновленный текст",);
// Добавление элемента в начало списка: Напишите код, который добавляет новый элемент списка <li> с текстом "Первый элемент" в начало списка с id myList.
// const ulList = document.querySelector('#task-list');
// ulList.innerHTML = '<li>"Первый элемент"</li>';
// Изменение атрибута элемента: Напишите код, который изменяет атрибут src изображения с id myImage на новый URL-адрес картинки при нажатии на кнопку.
const btn = document.querySelector('#btn');
const myImage = document.querySelector('#myImage')
const arraySrc = ["./img/taxi.jpg", "./img/online.jpg", "./img/cashless.jpg", "./img/banking.jpg"];
btn.addEventListener("click", changeImg);
function changeImg() {
    let randomItem = arraySrc[Math.floor(Math.random() * arraySrc.length)];
    if (randomItem === myImage.getAttribute("src")) {return changeImg();};
     
return myImage.setAttribute("src", `${randomItem}`);     
};
// console.log(randomItem);
// console.log(randomItem);
// console.log(randomItem);
const text = document.getElementById('animated-text');
const letters = text.innerText.split('');
text.innerText = '';

letters.forEach((letter, i) => {
  const span = document.createElement('span');
  span.innerText = letter;
  span.classList.add('hidden');
  text.appendChild(span);
  
  setTimeout(() => {
    span.classList.remove('hidden');
  }, i * 700); // задержка в 100ms для каждой буквы
});