import '../css/common.css';

// Планировка задач встроена в самом браузере и не есть частью JS

/*
 * Метод window.setTimeout(callback, delay, args) 
 */

// setTimeout() позволяет нам зарегистрировать отложенный вызов какой-то функции: принимает три параметра:
// callback, delay - минимум времени (в мсек) через, который необходимо вызвать функцию, args - аргументы для
// вызываемой функции.

// На примере:
// 1.
// console.log('До вызова setTimeout');
// // 2.
// setTimeout(() => {
//   console.log('Внутри callback для setTimeout');
// }, 2000);
// // 3.
// console.log('После вызова setTimeout');

// Даже если мы в setTimeout(callback, delay, args) на место delay поставим 0, наша функция выполнится 3 - й т.к.setTimeout
// в любом случае добавляется в планировщик, потом в список отложенных функций и только потом ставится на стек и если
// есть синхронный код после отложенной функции, то сначала выполнится весь синхронный а только потом из планировщика и 
// списка отложенных функций по очереди вызовутся наши асинхронные функции 

// Из примера мы видим, что в первую очередь выполняется запись 1, потом 3, и только потом с задержкой в 2 сек 2-я
// Очень важно: весь синхронный код выполняется сначала, а только потом выполняются отложенные функции.

// Ещё один примере:
// 1.
// console.log('До вызова setTimeout');
// // 2.
// setTimeout(() => {
//   console.log('Внутри callback для setTimeout');
// }, 2000);
// // 3.
// console.log('После вызова setTimeout');
// // 4.
// for (let index = 0; index < 10000; index++) {
//   console.log(index);
//   }

// В этом примере мы видим что выполнятся опирации в такой последовательности: операция 1, затем зарегистрируется и отложется
// на 2 секунды операция 2, затем опирация 3 и опреация 4(при этом опирация 4 будет выполняться более чем 2 секунды) и лишь
// только после того как закончит выполняться операция 4 выполнится операция 2. Получается что пока не отработает синхронный
// код планировщику не позволят запустить отложенную операцию 2 (отработает как минимум через 2сек, если не будет занято
// синхронным кодом, если будет занято, то сразу после)

// В примере ниже две отложенные функции, при этом порядок их регистрации не важен, т.к.будет выполняться по времени сразу
// после синхронного кода, в итоге последовательность выполнения такая: 1, 4, 3, 2

// 1.
// console.log('До вызова setTimeout');

// 2.
// setTimeout(() => {
//   console.log('1 - Внутри callback для setTimeout');
// }, 2000);

// 3.
// setTimeout(() => {
//   console.log('2 - Внутри callback для setTimeout');
// }, 1000);

// 4.
// console.log('После вызова setTimeout');

// Как передать аргументы в нашу функцию?:

// setTimeout((х) => {
//   console.log('2 - Внутри callback для setTimeout');
// }, 1000, 5);

// Наш х будет равно 5 т.к. мы передали после колбека и делея, аргументом 5, в итоге:

// setTimeout(х => {
//   console.log(х);
//   }, 1000, 5);

// т.е.в setTimeout(callback, delay, args) мы передали колбек х, отложенное время 1000 и аргумент для колбека 5,
// соответстве наш колбек х вызовется через 1 секунду с значением 5.

// Мы рассмотрели как планировать операции в планировщик, теперь рассмотрим как убрать операции из планировщика после того
// как они стали не нужными:

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

// У нас есть функция логер:
const logger = time => {
  console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
};

// Делаем сет тайм аут для этой функции:
// setTimeout(logger, 2000, 2000);

// При регистрации каждому таймауту присваивается уникальный идентификатор: 
const timerId = setTimeout(logger, 2000, 2000);

// console.log(timerId); // в данном случае будет 1

// Пишем переменную с рандомным числом:
const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer);

// пишем условие если shouldCancelTimer больше 0.3, то очистить таймаут с указанным идентификатором:
if (shouldCancelTimer) {
  clearTimeout(timerId);
}

// Если true, то происходит очистка таймаута с идентификатором timerId и наш колбек не выполниться, если false, то
// выполниться колбек функция logger.

// В итоге:
// setTimeout(callback, delay, args)  - может зпланировать отложенный вызов функции. Позволяет только ОДИН раз вызвать функцию
// если необходимо вызвать не один раз, то на помощь приходит setInterval (см.далее)
// clearTimeout(timerId) - может очистить запланированный вызов функции по идентификатору этого таймаута

