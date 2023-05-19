import '../css/common.css';

// Если функцию необходимо вызвать не один раз, то на помощь приходит setInterval (см.далее)

/*
 * Метод setInterval(callback, delay, args)
 */

const logger = time => console.log(`Лог каждые ${time}ms - ${Date.now()}`);

console.log('До вызова setInterval');
setInterval(logger, 2000, 2000);
console.log('После вызова setInterval');

// setInterval запланирует вызов функции logger, каждые 2 секунды, и пока не отменишь этот интервал, то каждые 2000 мс
// будет вызваться функция logger

// Для того чтобы очистить наш setInterval, по аналогии с clearTimeout, у нас есть clearInterval():

/*
 * Очистка интервала с clearInterval(intervalId)
 */

// const intervalId = setInterval(logger, 2000, 2000);
// const shouldCancelInterval = Math.random() > 0.3;
// console.log(shouldCancelInterval);

// if (shouldCancelInterval) {
//   clearInterval(intervalId);
// }
