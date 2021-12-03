const toggle = document.getElementById('toggle');
const price = document.getElementById('switch-price');
const pill = document.getElementById('pill');

toggle.addEventListener('change', (e) => {
    price.classList.toggle('show-annually');
    pill.classList.toggle('active');
});