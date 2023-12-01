// PHONE CHECKER

const phoneInput = document.querySelector('#phone_input'),
    phoneButton = document.querySelector('#phone_button'),
    phoneSpan = document.querySelector('#phone_result');

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click', () => {
    if (regExp.test(phoneInput.value)) {
        phoneSpan.innerHTML = 'OK';
        phoneSpan.style.color = 'green';
    } else {
        phoneSpan.innerHTML = 'NOT OK';
        phoneSpan.style.color = 'red';
    }
});

// TAB SLIDER

const tabsContentCards = document.querySelectorAll('.tab_content_block'),
    tabsItems = document.querySelectorAll('.tab_content_item'),
    tabsItemsParent = document.querySelector('.tab_content_items');
let currentIndex = 0;

const hideTabsContentCards = () => {
    tabsContentCards.forEach((tabContentCard) => {
        tabContentCard.style.display = 'none';
    })
    tabsItems.forEach((tabItem) => {
        tabItem.classList.remove('tab_content_item_active');
    })
};

const showTabsContentCards = (indexElement = 0) => {
    tabsContentCards[indexElement].style.display = 'block';
    tabsItems[indexElement].classList.add('tab_content_item_active');
};

const autoTabSlider = () => {
    hideTabsContentCards();
    currentIndex = (currentIndex + 1) % tabsContentCards.length;
    showTabsContentCards(currentIndex);
};

hideTabsContentCards();
showTabsContentCards(currentIndex);

tabsItemsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabsItems.forEach((tabItem, tabItemIndex ) => {
            if (event.target === tabItem) {
                hideTabsContentCards();
                currentIndex = tabItemIndex;
                showTabsContentCards(tabItemIndex);
            }
        })
    }
};

setInterval(autoTabSlider, 3000);

// CONVERTER

const somInput = document.querySelector('#som'),
    usdInput = document.querySelector('#usd'),
    eurInput = document.querySelector('#eur');

const converter = (element, targetElement, targetElement2, type) => {
    element.oninput = async () => {
        try {
            const response = await fetch('../data/converter.json');
            const data = await response.json();

            switch (type) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2);
                    targetElement2.value = (element.value / data.eur).toFixed(2);
                    break;
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2);
                    targetElement2.value = (element.value / data.eur * data.usd).toFixed(2);
                    break;
                case 'eur':
                    targetElement.value = (element.value * data.eur).toFixed(2);
                    targetElement2.value = (element.value / data.usd * data.eur).toFixed(2);
                    break;
                default:
                    break;
            }
            if (element.value === '') {
                targetElement.value = '';
                targetElement2.value = '';
            }

        } catch (e) {
            console.log(e);
        }
    };
};

converter(somInput, usdInput, eurInput, 'som');
converter(usdInput, somInput, eurInput,'usd');
converter(eurInput, somInput, usdInput, 'eur');

// CARD SWITCHER

const card = document.querySelector('.card'),
    btnPrev = document.querySelector('#btn-prev'),
    btnNext = document.querySelector('#btn-next');

let count = 1;

const fetchRequest = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`);
        const data = await response.json();
        card.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
        `;
    } catch (e) {
        console.log(e);
    }
};

btnNext.onclick = () => {
    count++;
    if (count > 200) {
        count = 1;
    }
    fetchRequest();
};

btnPrev.onclick = () => {
    count--;
    if (count < 1) {
        count = 200;
    }
    fetchRequest();
};

fetchRequest();

// SEARCH WEATHER

const cityNameInput = document.querySelector('.cityName'),
    city = document.querySelector('.city'),
    temp = document.querySelector('.temp');

const WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather',
    API_KEY = 'e417df62e04d3b1b111abeab19cea714';

cityNameInput.oninput = async (event) => {
    try {
        const response = await fetch(`${WEATHER_API}?q=${event.target.value}&appid=${API_KEY}`);
        const data = await response.json();
        city.innerHTML = data?.name ? data?.name : 'Город не найден';
        temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273) + '&deg;C' : '';
    } catch (e) {
        console.log(e);
    }
};