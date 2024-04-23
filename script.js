// Отримання кнопки бокової панелі та навігаційного меню
const sidebarButton = document.getElementById('sidebarButton');
const nav = document.querySelector('nav');
const hiddenLinks = document.querySelectorAll('.hiddenLink');
const menuSection = document.getElementById('menuSection');

// Функція для перевірки ширини вікна та відображення / приховування кнопки бокової панелі
function toggleSidebarButton() {
    if (window.innerWidth <= 800) {
        nav.style.display = 'none';
        sidebarButton.style.display = 'block';
        hiddenLinks.forEach(link => link.style.display = 'none');
    } else {
        nav.style.display = 'flex';
        sidebarButton.style.display = 'none';
        hiddenLinks.forEach(link => link.style.display = 'inline-block');
    }
}

// Додавання події кліку на кнопку бокової панелі
sidebarButton.addEventListener('click', function() {
     if (menuSection.style.display === 'block') {
        menuSection.style.display = 'none';
    } else {
        menuSection.style.display = 'block';
    }
});

// Приховування меню при кліку на будь-яку область крім самого меню
document.addEventListener('click', function(event) {
    const isClickInsideMenu = menuSection.contains(event.target);
    const isClickOnSidebarButton = sidebarButton.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnSidebarButton) {
        menuSection.style.display = 'none';
    }
});

// Виклик функції при завантаженні сторінки та зміні розміру вікна
window.onload = toggleSidebarButton;
window.onresize = toggleSidebarButton;

// Приховуємо кнопку бокової панелі при збільшенні ширини вікна браузера більше 500px
window.addEventListener('resize', function() {
    if (window.innerWidth > 800) {
        sidebarButton.style.display = 'none';
    }
});

