// var button = document.querySelector('[data-button]');
// var isPurple = false;
// button.addEventListener('click', function() {
//     if (isPurple) {
//         document.body.style.background = 'white';
//         isPurple = false;
//     } else {
//         document.body.style.background = 'purple';
//         isPurple = true;
//     } 
// })

// or

// var button = document.querySelector('[data-button]');
// var isPurple = false;
// button.addEventListener('click', function() {
//     if (isPurple) {
//         document.body.style.background = 'white';
//     } else {
//         document.body.style.background = 'purple';
//     } 
//     isPurple = !isPurple;
// })

// or

var button = document.querySelector('[data-button]');
button.addEventListener('click', function() {
    document.body.classList.toggle("container"); 
})
