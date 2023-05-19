import '../css/common.css';

/**
 * - Показываем и скрываем добавляя/удаляя класс is-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

// Нам необходимо реализовать нотификацию(точнее уже реализована, необходимо расширить функционал), которая после выполнения 
// будет автоматически скрываться через заданное кол-во времени:

// Сыылка на наш элемент "р" в разметке
// const refs = {
//   notification: document.querySelector('.js-alert'),
// };

// // Вешаем слушатель событий:
// refs.notification.addEventListener('click', onNotificationClick);

// // При запуске скрипта автоматически вызывается функция чтобы нотификация показывалась сразу:
// showNotification();

// // Пропишем функции функции:

// function onNotificationClick() {
//   hideNotification();
// }

// // Два метода:

// // 1. Добавляем класс is-visible:
// function showNotification() {
//   refs.notification.classList.add('is-visible');
// }

// // 2. Убираем класс is-visible:
// function hideNotification() {
//   refs.notification.classList.remove('is-visible');
// }

// Немного перепишем наш код:
// Добавляем в код константу, которой присвоим значение в мсек для отложенной функции: 
// const NOTIFICATION_DELAY = 3000;
// // Введем глобальную переменную, для того чтобы использовать её при добавлении кода, который будет очищать наш планировщик,
// // в том случае если пользователь сам нажмет на нотификацию и отложенную функцию скрытия нотификации через 3 сек, не нужно
// // будет больше использовать:
// let timeoutId = null; // изначально указываем null, т.к. если мы просто запишем let timeoutId, то будет считаться, что мы
// // её не объявили.

// // Сыылка на наш элемент "р" в разметке
// const refs = {
//   notification: document.querySelector('.js-alert'),
// };

// // Вешаем слушатель событий:
// refs.notification.addEventListener('click', onNotificationClick);

// // При запуске скрипта автоматически вызывается функция чтобы нотификация показывалась сразу:
// showNotification();

// // Пропишем функции функции:

// // Скрываем нотификацию при срабатывании слушателя событий, т.е. при клике пользователем на нотификацию:
// // function onNotificationClick() {
// //   hideNotification();
// // }
// // Немного расширим функцию, добавив функцию очишения по id нашей отложенной функции(скрытия нотификатора).Функция
// // срабатывает (очищает наш планировщик) в том случае если пользователь сам кликнул на нотификацию чтобы убрать её 

// function onNotificationClick() {
//   hideNotification();
//   clearTimeout(timeoutId);
// }


// // Два метода:
// // 1. Добавляем класс is-visible. Расширим нашу функцию, добавив в неё таймаут для закрытия нотификации через заданное
// // кол-во времени:

// function showNotification() {
//   refs.notification.classList.add('is-visible');
// // т.е. прямо во время вызова функции showNotification() мы планируем вызов нашего setTimeout, через 3 сек
// //   setTimeout(() => {
// //     console.log('Закрываем алерт автоматически чтобы не висел')
// // // и просто внутри этой отложенной функции вызываем нашу функцию hideNotification()
// //     hideNotification();
// //   }, NOTIFICATION_DELAY);
  
//   // немного перепишем нашу функцию присвоив ей Id чтобы по этому айди можно было бы снять с планировщика нашу функцию:
//     timeoutId = setTimeout(() => {
//     console.log('Закрываем алерт автоматически чтобы не висел')
//     hideNotification();
//   }, NOTIFICATION_DELAY);

// }

// // 2. Убираем класс is-visible:
// function hideNotification() {
//   refs.notification.classList.remove('is-visible');
// }


// Оригинальный код:

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;

// Сыылка на наш элемент "р" в разметке
const refs = {
  notification: document.querySelector('.js-alert'),
};

// Вешаем слушатель событий:
refs.notification.addEventListener('click', onNotificationClick);

showNotification();

/*
 * Функции
 */
function onNotificationClick() {
  hideNotification();
  clearTimeout(timeoutId);
}

function showNotification() {
  refs.notification.classList.add('is-visible');

  timeoutId = setTimeout(() => {
    console.log('Закрываем алерт автоматически чтобы не висел');
    hideNotification();
  }, NOTIFICATION_DELAY);
}

function hideNotification() {
  refs.notification.classList.remove('is-visible');
}