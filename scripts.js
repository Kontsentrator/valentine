const HEART_RENDER_TIMEOUT = 5000;
const HEART_RENDER_INTERVAL = 200;
const HEART_SYMBOLS = ['❤️', '💖', '💝', '💕'];

const COUPLE_IMAGE_SRC = 'assets/images/couple.png';
const CAT_WITH_FLOWER_IMAGE_SRC = 'assets/images/cat-with-flower.png';

const handleDOMContentLoaded = () => {
    const envelopeWrapper = document.getElementById('envelope-wrapper');
    const buttonAgree = document.getElementById('button-agree');
    const buttonReject = document.getElementById('button-reject');
    const successScreen = document.getElementById('success-screen');
    const failureScreen = document.getElementById('failure-screen');
    const successScreenImage = document.getElementById('success-screen-image');

    const handleEnvelopeWrapperClick = () => {
        envelopeWrapper.classList.add('opened');
    }

    const moveButton = () => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        if (buttonReject.style.position !== 'fixed') {
            const rect = buttonReject.getBoundingClientRect();
            document.body.appendChild(buttonReject);
            buttonReject.style.position = 'fixed';
            buttonReject.style.top = rect.top + 'px';
            buttonReject.style.right = 'auto';
            buttonReject.style.bottom = 'auto';
            buttonReject.style.left = rect.left + 'px';

            requestAnimationFrame(() => {
                buttonReject.style.top = x + '%';
                buttonReject.style.left = y + '%';
            })
        } else {
            buttonReject.style.top = x + '%';
            buttonReject.style.left = y + '%';
        }

        buttonReject.style.zIndex = 10;
    }

    // Падающие сердечки
    const renderHeart = (symbol) => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = symbol;
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        document.body.appendChild(heart);
        return heart;
    }

    const startHeartsFalling = () => {
        setInterval(() => {
            const symbol = HEART_SYMBOLS[Math.floor(Math.random() * HEART_SYMBOLS.length)]
            const heart = renderHeart(symbol);
            setTimeout(() => heart.remove(), HEART_RENDER_TIMEOUT);
        }, HEART_RENDER_INTERVAL);
    }

    const changeImage = () => {
        successScreenImage.src = COUPLE_IMAGE_SRC;
    };

    const returnImage = () => {
        successScreenImage.src = CAT_WITH_FLOWER_IMAGE_SRC;
    }

    const handleButtonAgreeClick = () => {
        envelopeWrapper.classList.add('hidden');
        buttonReject.classList.add('hidden');
        successScreen.classList.remove('hidden');
        startHeartsFalling();
    }

    const handleButtonRejectClick = () => {
        envelopeWrapper.classList.add('hidden');
        buttonReject.classList.add('hidden');
        failureScreen.classList.remove('hidden');
    }

    // Открытие конверта
    envelopeWrapper.addEventListener('click', handleEnvelopeWrapperClick);

    // Кнопка "Нет"
    buttonReject.addEventListener('mouseenter', moveButton);
    buttonReject.addEventListener('touchstart', moveButton);
    buttonReject.addEventListener('click', handleButtonRejectClick);

    // Кнопка "Да"
    buttonAgree.addEventListener('click', handleButtonAgreeClick);

    // Картинка на экране успеха
    successScreenImage.addEventListener('mouseenter', changeImage);
    successScreenImage.addEventListener('touchstart', changeImage);
    successScreenImage.addEventListener('mouseleave', returnImage);
    successScreenImage.addEventListener('touchend', returnImage);
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

