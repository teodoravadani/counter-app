let counter = document.querySelector('#count');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');

num = 0;

plus.addEventListener('click', function() {
    num++
    counter.innerHTML = num;
})

minus.addEventListener('click', function() {
    num--;
    counter.innerHTML = num;
})