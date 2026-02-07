const handleDOMContentLoaded = () => {
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const successScreen = document.getElementById('successScreen');

    const handleEnvelopeWrapperClick = (e) => {
        if (e.target.tagName === 'BUTTON') return;

        e.target.classList.add('open');
    }

    // Открытие конверта
    envelopeWrapper.addEventListener('click', handleEnvelopeWrapperClick);

    
    const moveButton = () => {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    }

    // Кнопка "Нет" убегает
    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('touchstart', moveButton);

    // Кнопка "Да"
    yesBtn.addEventListener('click', () => {
        envelopeWrapper.classList.add('hidden');
        successScreen.style.display = 'block';
        startHearts();
    });

    const HEART_RENDER_TIMEOUT = 5000;

    // Падающие сердечки
    const renderHeart = () => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = ['❤️', '💖', '💝', '💕'][Math.floor(Math.random() * 4)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        document.body.appendChild(heart);
        setTimeout(heart.remove, HEART_RENDER_TIMEOUT);
    }

    const HEART_RENDER_INTERVAL = 200;

    const startHeartsFalling = () => {
        setInterval(renderHeart, HEART_RENDER_INTERVAL);
    }
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

