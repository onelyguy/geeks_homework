// MODAL

const modal = document.querySelector('.modal');
const modalTriggerBtn = document.querySelector('#btn-get');
const modalCloseBtn = document.querySelector('.modal_close');
// added
let modalOpened = false;

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    // added
    modalOpened = true;
}

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

modalTriggerBtn.onclick = () => openModal();
modalCloseBtn.onclick = () => closeModal();
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
}

// added
setTimeout(openModal, 10000);

const checkScroll = () => {
    const footer = document.querySelector('.footer');
    const footerTop = footer.offsetTop;

    if (window.scrollY + window.innerHeight >= footerTop && !modalOpened) {
        openModal();

        window.removeEventListener('scroll', checkScroll)
    }
}

window.addEventListener('scroll', checkScroll);