import '../css/common.css';

// Задача: напишем таймер с кнопкой старт при нажатии на которую начинается отсчёт и стоп при нажатии
// на которую время останавливается.

// Создадим объект (секундомер с двумя кнопками старт и стоп)
// const timer = {
//   start() {
//     const startTime = Date.now(); // создадим локальную переменную в которой будем хранить начальное время.
// // Также во время вызова start() запустим интервал, который будет вызывать какую то функцию каждую секунду: 
//     setInterval(() => {
//   // console.log('startTime :', startTime); // при этом startTime при этом не меняется т.к. была создана во время вызова функции старт start(), а не setInterval()
//   // console.log('Вывожу сообщение каждую секунду');
// //  Далее, мы внутри этой функции можем получать текущее время на момент вызова этой отложенной функции:
//     const currentTime = Date.now(); 
//   // console.log('startTime :', currentTime); // получаем текущее время
// //  Теперь возьмем и отнимем от текущего времени currentTime время старта startTime нашего секундомера:
//     // console.log(currentTime - startTime);
// // Запишем эту разницу в виде переменной: 
//     const deltaTime = currentTime - startTime;
//   //  А так же создадим переменную в которой будем преобразовывать полученный в deltaTime результат в привычный формат времени:    
//       // const timeComponents = getTimeComponents(deltaTime);
//       // console.log(timeComponents); // получим такой результат
//       // console.log('HH:MM:SS'); // а нам необходимо получять время в таком формате, поэтому нам необходимо нашу функцию getTimeComponents расширить, 
//       // обернув её в функцию pad 
//       // Деструктуризаруем наш timeComponents, т.к. сама функция возвращает return { hours, mins, secs }: и теперь вместо const timeComponents = 
//       // getTimeComponents(deltaTime); запишем так:
//       const { hours, mins, secs } = getTimeComponents(deltaTime); // и подставим значение в наш формат(шаблон) console.log('HH:MM:SS'):
//       console.log(`${hours}:${mins}:${secs}`);

//       // или так:
//       // console.log(`${pad(new Date(deltaTime).getUTCHours())}:${pad(
//       // new Date(deltaTime).getUTCMinutes())}:${pad(new Date(deltaTime).getUTCSeconds())}`); // но проблема такого подхода в том, что если нам к примеру
//       // необходимо запустить акцию по распродаже на 2 суток 12 часов 40 минут и 10 секунд, все хорошо до тех пор пока нам не понадобиться вытащить сутки, а
//       // через такой подход получить сутки возможности нет, а кол-во часов ограничено 24 часами (т.е. вывести к примеру 60 часов или 72 не получится).
//       // А через формулы Индуса можно посчитать дни, сутки, недели, месяцы и т.д.

//     }, 1000);
//   },
// };

//  Необходимо написать функцию которая будет полученный результат преобразовать в нормальный формат времени:
  // function  getTimeComponents(time) {
  //   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  //   const secs = Math.floor((time % (1000 * 60)) / 1000);

  //   return { hours, mins, secs };
  // }

  // Функция pad принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков, если два знака то ничего не делает:
  function pad(value) {
    return String(value).padStart(2, '0');
  }

// дополним нашу функцию getTimeComponents функцией pad, можем расширить (дополнив сутками, днями, неделями):
  function  getTimeComponents(time) {
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }

// timer.start() // во время вызова этого метода, создается переменная startTime в которой хранится начальное время.

// Ок со временем разобрались, теперь необходимо реализовать интерфейс для пользователя (разметку):

    // <div class="timer">
    //   <p class="clockface js-clockface"></p> // это условное табло, куда мы будем выводить наше время т.е. deltaTime

    //   <div class="actions">
    //     <button class="timer-btn" data-action-start>Запустить</button> // кнопка запустить таймер
    //     <button class="timer-btn" data-action-stop>Остановить</button> // кнопка остановить таймер
    //   </div>
    // </div>
   
// Настроим связи с разметкой:
const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

// Повесим слушатели событий на наши кнопки, где заинлайним функцию:
// refs.startBtn.addEventListener('click', () => { timer.start() }); // слушатель событий с фунцкцией для запуска таймера 
// refs.stopBtn.addEventListener('click', () => { timer.stop() }); // слушатель событий с фунцкцией для остановки таймера

// если хотим передавать колбеком то нашему timer необходимо привязать контекст через .bind(timer):
// refs.startBtn.addEventListener('click', timer.start.bind(timer));
// refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

// Необходимо реализоваь функцию которая остановит интервал, дополним нашу запись функцией стоп:
// const timer = {
//   intervalId: null,
//   start() {
//     const startTime = Date.now();
    
//       this.intervalId = setInterval(() => {
//         const currentTime = Date.now();
//         const deltaTime = currentTime - startTime;
//         const { hours, mins, secs } = getTimeComponents(deltaTime);

//       console.log(`${hours}:${mins}:${secs}`);
//     }, 1000);
//   },
//   stop() {
//     clearInterval(this.intervalId);
//   }
// };

// timer.start() // во время вызова этого метода, создается переменная startTime в которой хранится начальное время.

// Проблема при такой реализации заключается в том, что если мы повторно нажмем на кнопку старт, то у нас запустить новый интервал, если несколько раз
// нажмем на старт, то запустится несколько интервалов.Нажав на кнопку стоп, мы остановим лишь один интервал а остальные будут скопом вести отсчёт, поэтому
// необходимо хранить состояние нашего интервала, и если он активный, потоврное нажатие ни к чему не приведёт. Дополним нашу запись доп. переменной
// isActive, которая по умолчанию будет false, а также дополним нашу функцию start условие с проверкой активный или нет:

// const timer = {
//   intervalId: null,
//   isActive: false, // состояние по умолчанию
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActive = true; // если наш isActive в условии if не активный, то присваиваем активный и запускаем интервал

//       this.intervalId = setInterval(() => {
//         const currentTime = Date.now(); 
//         const deltaTime = currentTime - startTime;
//         const { hours, mins, secs } = getTimeComponents(deltaTime);

//       console.log(`${hours}:${mins}:${secs}`);
//     }, 1000);
//   },
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   }
// };

// timer.start() // во время вызова этого метода, создается переменная startTime в которой хранится начальное время.

// Теперь необходимо нарисовать интерфейс.У нас есть метод updateClockface, который принимает объект с { hours, mins, secs }, буквально то что возвращает
// нам getTimeComponents и обновляет наш элемент clockface через refs.clockface.textContent

// Функция updateClockface принимает время в миллисекундах, Высчитывает сколько в них вмещается часов/минут/секунд, Рисует интерфейс:
// function updateClockface({ hours, mins, secs }) {
//   refs.clockface.textContent = `${hours}:${mins}:${secs}`;
// }

// // Перепишем нашу запись:
// const timer = {
//   intervalId: null,
//   isActive: false, // состояние по умолчанию
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActive = true; // если наш isActive в условии if не активный, то присваиваем активный и запускаем интервал

//       this.intervalId = setInterval(() => {
//         const currentTime = Date.now(); 
//         const deltaTime = currentTime - startTime;
//         const time = getTimeComponents(deltaTime);

//         // console.log(`${hours}:${mins}:${secs}`); // вместо выведения таймера в консоль, выведем наш таймер в элемент clockface (т.к. в функции
//         // updateClockface это прописано: refs.clockface.textContent = `${hours}:${mins}:${secs}`):
//         updateClockface(time); 
//     }, 1000);
//   },
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   }
// };

// timer.start() // во время вызова этого метода, создается переменная startTime в которой хранится начальное время.

// НО у нас в домашке необходимо написать из этого всего Класс.Плагин это js который натягивается на нашу или чью либо разметку.Но мы сделаем Плагин
// немного другого типа, тот который предоставлять логику, для этого создадим класс Timer:

// class Timer {
//   constructor() {
//     this.intervalId = null;
//     this.isActive = false;
//   }
// // Кроме того нам необходимо включить в наш прототип два метода старт и стоп, мы их писали просто скопируем уже готовые. В будущем это просто будут методы 
// // готового объекта, которые будут лежать не во вне а на прототипе:
// start() {
//     if (this.isActive) {
//       return;
//     }
//     const startTime = Date.now();
//     this.isActive = true;

//       this.intervalId = setInterval(() => {
//         const currentTime = Date.now(); 
//         const deltaTime = currentTime - startTime;
//         const time = getTimeComponents(deltaTime);

//         // updateClockface(time); // этот метод на прототипе нам пока не известен, поэтому закомментируем его
//     }, 1000);
//   }
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   }
// }

// Наш класс ничего не должен знает про обновление интерфейса, т.е.функция updateClockface(time); ему не доступна, он только умеет подсчитывать.Все остальное,
// реализовывается на экземпляре, на котором был вызван этот класс (прототип/плагин). Т.е. класс выполняет определенную задачу, все остальные хотелки 
// реализовываются уже на экземпляре. В итоге мы сделали плагин, т.е. класс из которого просто делаются готовые экземпляры, которые в поледствии обвешиваются
// различным дополнительным функционалом под требование проекта/задачи. 

// Ок, просто создадим таймер из готового прототипа(плагина):
// const timer = new Timer({
//   // дополним наш экземпляр, который мы создали на основе готового прототипа, доп. настройками, которые будут обновлять наш интерфейс при каждом тике:
//   onTick: updateClockface
//   });

// Расширим наш класс доп.свойством для обновления интефейса, т.е. включим в наш прототип все функции которые писали ранее, останется только одна
// внешняя функция, которая обновляет нам наш интерфейс updateClockface:

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick; // деструктуризируем свойство onTick передав его в функцию constructor({onTick})

    this.init(); // добавим в объект настроек новое свойство (показ нулевого счетчика при открытии страницы)
  }

  // дополним наш класс функционалом: при открытии страницы в нашем интерфейсе будет сразу доступен счетчик с нолями. 
  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
  }

  start() {
    if (this.isActive) {
      return;
    }

    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponents(deltaTime); // наш класс дополнен методом

      this.onTick(time); // после деструктуризации передадим ссылку на функцию updateClockface, которая обновит нам интерфейс по каждому тику
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    // дополним нашу функцию стоп: при нажатии на кнопку обнуляется счетчик  
    const time = this.getTimeComponents(0); 
    this.onTick(time);
  }

// расширим нашу модель (класс) методами: 

// Принимает время в миллисекундах, Высчитывает сколько в них вмещается часов/минут/секунд, Возвращает обьект со свойствами hours, mins, secs, Адская 
// копипаста со стека 💩
  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }

//  Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new Timer({
  // дополним наш экземпляр, который мы создали на основе готового прототипа, доп. настройками, которые будут обновлять наш интерфейс при каждом тике:
  onTick: updateClockface
  });

// Ранее мы повесили слушатели событий на наши кнопки, где заинлайним функцию:
// refs.startBtn.addEventListener('click', () => { timer.start() }); // слушатель событий с фунцкцией для запуска таймера 
// refs.stopBtn.addEventListener('click', () => { timer.stop() }); // слушатель событий с фунцкцией для остановки таймера

// если хотим передавать колбеком то нашему timer необходимо привязать контекст через .bind(timer):
refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}

// class Timer {
//   constructor({ onTick }) {
//     this.intervalId = null;
//     this.isActive = false;
//     this.onTick = onTick; // деструктуризируем свойство onTick передав его в функцию constructor({onTick})

//     this.init();
//   }

//   init() {
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   start() {
//     if (this.isActive) {
//       return;
//     }

//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const time = this.getTimeComponents(deltaTime);

//       this.onTick(time);
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   /*
//    * - Принимает время в миллисекундах
//    * - Высчитывает сколько в них вмещается часов/минут/секунд
//    * - Возвращает обьект со свойствами hours, mins, secs
//    * - Адская копипаста со стека 💩
//    */
//   getTimeComponents(time) {
//     const hours = this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//     );
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs };
//   }

//   /*
//    * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
//    */
//   pad(value) {
//     return String(value).padStart(2, '0');
//   }
// }

// const timer = new Timer({
//   onTick: updateClockface,
// });





// Перепишем начисто, оригинальный код:

// const refs = {
//   startBtn: document.querySelector('button[data-action-start]'),
//   stopBtn: document.querySelector('button[data-action-stop]'),
//   clockface: document.querySelector('.js-clockface'),
// };

// class Timer {
//   constructor({ onTick }) {
//     this.intervalId = null;
//     this.isActive = false;
//     this.onTick = onTick;

//     this.init();
//   }

//   init() {
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   start() {
//     if (this.isActive) {
//       return;
//     }

//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const time = this.getTimeComponents(deltaTime);

//       this.onTick(time);
//     }, 1000);
//   }

//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//     const time = this.getTimeComponents(0);
//     this.onTick(time);
//   }

//   /*
//    * - Принимает время в миллисекундах
//    * - Высчитывает сколько в них вмещается часов/минут/секунд
//    * - Возвращает обьект со свойствами hours, mins, secs
//    * - Адская копипаста со стека 💩
//    */
//   getTimeComponents(time) {
//     const hours = this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//     );
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs };
//   }

//   /*
//    * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
//    */
//   pad(value) {
//     return String(value).padStart(2, '0');
//   }
// }

// const timer = new Timer({
//   onTick: updateClockface,
// });

// refs.startBtn.addEventListener('click', timer.start.bind(timer));
// refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

// /*
//  * - Принимает время в миллисекундах
//  * - Высчитывает сколько в них вмещается часов/минут/секунд
//  * - Рисует интерфейс
//  */
// function updateClockface({ hours, mins, secs }) {
//   refs.clockface.textContent = `${hours}:${mins}:${secs}`;
// }


