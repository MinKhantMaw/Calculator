(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });

    equal.addEventListener('click', function (e) {
        try {
            if (screen.value === '') {
                screen.value = 'Please Enter';
            } else {
                let answer = math.evaluate(screen.value); // Use math.js library
                screen.value = answer;
            }
        } catch (error) {
            screen.value = 'Invalid Input';
        }
    });

    clear.addEventListener('click', function (e) {
        screen.value = '';
    });
})();
