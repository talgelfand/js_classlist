const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add('red', 'green'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red'); // toggle описывает такую же логическую конструкцию
});

// console.log(btns[0].className); // устаревшее свойство


// делегирование событий
wrapper.addEventListener('click', (event) => {
    // if (event.target && event.target.tagName == "BUTTON") { // если пользователь кликает именно на кнопку
    //     console.log('Hello');
    // }

    if (event.target && event.target.matches("button.red")) { // более продвинутое делегирование
        console.log('Hello');
    }

    // if (event.target && event.target.classList.contains('blue')) { // если пользователь кликает именно на синюю кнопку
    //     console.log('Hello');
    // }
});

// такой скрипт не сработает на динамически добавленной красной кнопке
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });

// добавить красную кнопку
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);