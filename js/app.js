// Navbar

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});


// For simple pop-in transition

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show1');
        } else {
            entry.target.classList.remove('show1');
        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden1');

hiddenElements.forEach((el) => observer.observe(el));


// translate from left

const observer2 = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
        } else {
            entry.target.classList.remove('show2');
        }
    })
});

const hiddenElements2 = document.querySelectorAll('.hidden2');

hiddenElements2.forEach((el) => observer2.observe(el));

// translate from right

const observer3 = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show3');
        } else {
            entry.target.classList.remove('show3');
        }
    })
});

const hiddenElements3 = document.querySelectorAll('.hidden3');

hiddenElements3.forEach((el) => observer3.observe(el));


// Image Carousels

const carouselData = {
    'carousel-smiths': [
        'images/Smiths_Grips/Screenshot 2026-04-20 222540.png',
        'images/Smiths_Grips/Screenshot 2026-04-20 222652.png',
        'images/Smiths_Grips/Screenshot 2026-04-20 222731.png',
        'images/Smiths_Grips/Screenshot 2026-04-20 222808.png',
        'images/Smiths_Grips/Screenshot 2026-04-20 222841.png',
        'images/Smiths_Grips/Screenshot 2026-04-20 222904.png',
        'images/Smiths_Grips/Screenshot 2026-04-20 222940.png',
        'images/Smiths_Grips/Screenshot 2026-04-20 222959.png'
    ],
    'carousel-rosewater': [
        'images/Rosewater_Grill/Screenshot 2026-04-20 221811.png',
        'images/Rosewater_Grill/Screenshot 2026-04-20 221834.png',
        'images/Rosewater_Grill/Screenshot 2026-04-20 221855.png',
        'images/Rosewater_Grill/Screenshot 2026-04-20 221926.png',
        'images/Rosewater_Grill/Screenshot 2026-04-20 221948.png',
        'images/Rosewater_Grill/Screenshot 2026-04-20 222007.png',
        'images/Rosewater_Grill/Screenshot 2026-04-20 222115.png'
    ]
};

const carouselIndexes = {};

function initCarousels() {
    for (const id in carouselData) {
        carouselIndexes[id] = 0;
        const container = document.getElementById(id);
        if (!container) continue;

        const img = container.querySelector('.carousel-img');
        img.src = carouselData[id][0];

        const dotsContainer = document.getElementById('dots-' + id);
        if (dotsContainer) {
            carouselData[id].forEach((_, i) => {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => goToSlide(id, i));
                dotsContainer.appendChild(dot);
            });
        }
    }
}

function updateCarousel(id) {
    const index = carouselIndexes[id];
    const container = document.getElementById(id);
    if (!container) return;

    container.querySelector('.carousel-img').src = carouselData[id][index];

    const dotsContainer = document.getElementById('dots-' + id);
    if (dotsContainer) {
        dotsContainer.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
}

function prevSlide(id) {
    const len = carouselData[id].length;
    carouselIndexes[id] = (carouselIndexes[id] - 1 + len) % len;
    updateCarousel(id);
}

function nextSlide(id) {
    const len = carouselData[id].length;
    carouselIndexes[id] = (carouselIndexes[id] + 1) % len;
    updateCarousel(id);
}

function goToSlide(id, index) {
    carouselIndexes[id] = index;
    updateCarousel(id);
}

initCarousels();


// Scroll to top button

const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
