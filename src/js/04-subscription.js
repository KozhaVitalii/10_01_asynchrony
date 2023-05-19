import '../css/common.css';
import BSN from 'bootstrap.native';

// Задача: при заходе на страницу, через какой то промежуток времени всплывает модальное окно с предложением подписаться
// на рассылку, при закрытии через 30 секунд эта модалка вылазит снова и так три раза подряд, после чего больше не беспокоит
// Решаем задачу последовательно:

// Создаем переменную в которой храним интервал, через который должно всплывать модальное окно:
// const PROMPT_DELAY = 3000;
// Создаем переменную в которую записываем значение, какое кол-во раз должно всплывать модальное окно:
// const MAX_PROMPT_ATTEMPTS = 3;

// Создаем переменную в которую будем записывать сколько раз мы пользователя уже попросили подписаться. Каждый раз, когда
// будет выполняться функция setInterval, мы будем увеличивать значение переменной на +1:
// let promptCounter = 0;

// Добавим ещё переменную, в которую запишем результат выполнения условия подписался / не подписался.По умолчанию false, т.е.
// как только станет true необходимо также прекращать наше интервальное всплытие модалки и очищать планировщик
// let hasSubscribed = false;

// Запускаем интервал с условием:
// setInterval(() => {
// // Обернем в условие с проверкой, на количество вызвовов (переменная promptCounter), если меньше 3 (т.е.
// // значению переменной MAX_PROMPT_ATTEMPTS, то вызываем, если нет, то прерываем)
//   if (promptCounter === MAX_PROMPT_ATTEMPTS) {
//     console.log('Нужно остановить интервал');
//     return;
// }
//   console.log('Подпишись на рассылку! - ' + Date.now());  // с интервалом в 1 секунду будет в консоль вылазить сообщение
//   promptCounter += 1;
//   console.log(promptCounter); // видим что при каждом вызове, значение увеличивается на +1
// }, PROMPT_DELAY);

// НО при достижении максимального кол - ва предложений подписаться мы должны остановить всплытие модалки, поэтому дополним
// нашу запись, присвоим ID и пропишем очистку планировщика, а также расширим наше if условие, т.е. если пользователь
// подписался, т.е. наш hasSubscribed сменился значение с false на true, то тоже прерываем и очищаем планировщик:
// const intervalId = setInterval(() => {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('Нужно остановить интервал');
//     clearInterval(intervalId);
//     return;
// }
//   console.log('Подпишись на рассылку! - ' + Date.now());
//   promptCounter += 1;
//   console.log(promptCounter);
// }, PROMPT_DELAY);

// Ок, далее сделаем по-другому, подключим модалку через bootstrap, и на ней реализуем нашу задачу.
// Подключаем бибилотеку bootstrap, для оформления нашей разметки. Т.е. подключаем модалку, далее берем html
// разметку для модалки(с уже прописанными классами под оформление) и вставляем её в html файл + подключаем предлагаемые
// под неё стили (в данном примере мы подключаем эти стили через cdn), а для того чтобы оживить эту модалку (открыть/закрыть
// и т.д.), подключаем через npm библиотеку bootstrap.native, которая содержит необходимый js код (это отдельная библиотека
// bootstrap, которая написана на js), по умолчанию bootstrap в своей документации предлагает подключение элементов(модалки)
// с готовой разметкой и стилями, но вместо js используется jquery, нам это не подходит, поэтому отдельно подключаем библиотеку
// bootstrap.native


// const PROMPT_DELAY = 3000;
// const MAX_PROMPT_ATTEMPTS = 3;
// let promptCounter = 0;
// let hasSubscribed = false;
// const modal = new BSN.Modal('#subscription-modal'); // инициализируем плагин нашего модального окна (согл. документации)

// console.log(modal);

// Реализуем открытие модалки через 3 сек после захода на страницу:
// setTimeout(() => {
//   console.log('Открываем надоедалку');
//   modal.show();  
// }, PROMPT_DELAY);


// const refs = {
//   modal: document.querySelector('#subscription-modal'), // настраиваем ссылку на саму модалку
//   subscribeBtn: document.querySelector('button[data-subscribe]'), // настраиваем ссылку на кнопку подписаться
// };

// openModal(); // запускаем функцию открытия модалки при загрузке страницы

// refs.modal.addEventListener('hide.bs.modal', openModal); // подписываемся на кастомное событие модалки от bootstrap
// (из документации), при нажатие на кнопку закрытия модалки.
// Проверим заинлайнив функцию открытия модалки: 
// refs.modal.addEventListener('hide.bs.modal', () => {
//   setTimeout(() => {
//     console.log('Открываем надоедалку');
//     modal.show();
//     // promptCounter += 1;
//   }, PROMPT_DELAY);
// });

// Можем переписать так. Нашу встроенную функцию сеттаймаут вынесем в отдельную функцию и повесим на слушатель событий:

// refs.modal.addEventListener('hide.bs.modal', openModal);

// function openModal() {
//   setTimeout(() => {
//     console.log('Открываем надоедалку');
//     modal.show();
//   }, PROMPT_DELAY);
// }
// Но так она будет открываться до бесконечности, необходимо ограничить кол-во раз. Мы это уже делали, поэтому добавим увеличение нашей переменной:

// function openModal() {
//   setTimeout(() => {
//     console.log('Открываем надоедалку');
//     modal.show();
//     promptCounter += 1;
//   }, PROMPT_DELAY);
// }

// И далее расширяем условием, если больше 3-х раз, то не открывать:

// function openModal() {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS) {
//     console.log('Максимальное кол-во надоеданий или подписался');
//     return;
//   }

//   setTimeout(() => {
//     console.log('Открываем надоедалку');
//     modal.show();
//     promptCounter += 1;
//   }, PROMPT_DELAY);
// }

// И последнее, добавляем условие, если пользователь сам нажал на кнопку подписаться. Но пока при её нажатии вообще ничего не происходит.


// refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick); // подписываемся на событие по кнопке подписаться

// Первое что нам необходимо сделать при нажатии на кнопку, это нам необходимо её закрыть, поэтому для начала заинлайним эту функцию:

// refs.subscribeBtn.addEventListener('click', () => {
//   modal.hide();
// }); // но этого не достаточно т.к. сеттаймаут все равно через заданное время снова откроет модалку заданное кол-во раз. Поэтому расширим нашу
// функцию, дописав в неё новое значение нашей переменной let hasSubscribed, т.е. если нажал, то уже true:

// refs.subscribeBtn.addEventListener('click', () => {
//   let hasSubscribed = true;
//   modal.hide();
// });

// Вынесем нашу инлайн функцию в отдельную функцию и сошлемся на неё переписав наш слушатель событий:

// refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

// // а для функции openModal расширим наше условие проверки добавив проверку hasSubscribed на true или false:

// function openModal() {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('Максимальное кол-во надоеданий или подписался');
//     return;
//   }

//   setTimeout(() => {
//     console.log('Открываем надоедалку');
//     modal.show();
//     promptCounter += 1;
//   }, PROMPT_DELAY);
// }

// function onSubscribeBtnClick() {
//   hasSubscribed = true;
//   modal.hide();
// }


// В итоге перепишем начисто и получим оригинальный код:

const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
};
const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;
const modal = new BSN.Modal('#subscription-modal');

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal);
refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    console.log('Максимальное кол-во надоеданий или подписался');
    return;
  }

  setTimeout(() => {
    console.log('Открываем надоедалку');
    modal.show();
    promptCounter += 1;
  }, PROMPT_DELAY);
}

function onSubscribeBtnClick() {
  hasSubscribed = true;
  modal.hide();
}
