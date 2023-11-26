// PHONE CHECKER

const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneSpan = document.querySelector('#phone_result');

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

const tabsContentCards = document.querySelectorAll('.tab_content_block');
const tabsItems = document.querySelectorAll('.tab_content_item');
const tabsItemsParent = document.querySelector('.tab_content_items');
// added
let currentIndex = 0;

const hideTabsContentCards = () => {
    tabsContentCards.forEach((tabContentCard) => {
        tabContentCard.style.display = 'none';
    })
    tabsItems.forEach((tabItem) => {
        tabItem.classList.remove('tab_content_item_active')
    })
}

const showTabsContentCards = (indexElement = 0) => {
    tabsContentCards[indexElement].style.display = 'block'
    tabsItems[indexElement].classList.add('tab_content_item_active')
}

// added
const autoTabSlider = () => {
    hideTabsContentCards();
    currentIndex = (currentIndex + 1) % tabsContentCards.length;
    showTabsContentCards(currentIndex);
}

hideTabsContentCards();
showTabsContentCards(currentIndex);

tabsItemsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabsItems.forEach((tabItem, tabItemIndex ) => {
            if (event.target === tabItem) {
                hideTabsContentCards();
                // added
                currentIndex = tabItemIndex;
                showTabsContentCards(tabItemIndex);
            }
        })
    }
}

setInterval(autoTabSlider, 3000);

// CONVERTER

const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

const converter = (element, targetElement, targetElement2, type) => {
    element.oninput = () => {
        request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();

        request.onload = () => {
            const data = JSON.parse(request.response);
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
        }
    }
}

converter(somInput, usdInput, eurInput, 'som');
converter(usdInput, somInput, eurInput,'usd');
converter(eurInput, somInput, usdInput, 'eur');

