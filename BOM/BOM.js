const alertButton = document.getElementById('alertButton');
const openWindowButton = document.getElementById('openWindowButton');
const navigateBackButton = document.getElementById('navigateBackButton');
const changeURLButton = document.getElementById('changeURLButton');

alertButton.addEventListener('click', () => {
    window.alert('Hello, this is an alert!');
});

openWindowButton.addEventListener('click', () => {
    window.open('https://www.spyck.ca/', '_blank');
});

navigateBackButton.addEventListener('click', () => {
    history.forward();
});

changeURLButton.addEventListener('click', () => {
    location.href = 'https://colorhunt.co/';
});