document.getElementById('currentYear').textContent = new Date().getFullYear();

const GA_MEASUREMENT_ID = 'G-4N0G7MTYN8';

window.dataLayer = window.dataLayer || [];
function gtag() {
    window.dataLayer.push(arguments);
}
window.gtag = gtag;

function loadExternalScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
}

gtag('js', new Date());
gtag('config', GA_MEASUREMENT_ID);
loadExternalScript(`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`);
loadExternalScript('//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');

const navHamburger = document.getElementById('navHamburger');
const navLinks = document.getElementById('navLinks');
navHamburger.addEventListener('click', function() {
    navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
        navLinks.classList.remove('open');
    });
});

const langToggle = document.getElementById('langToggle');
const langMenu = document.getElementById('langMenu');
const langOptions = document.querySelectorAll('.lang-option');

if (langToggle && langMenu) {
    langToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        const isOpen = langMenu.classList.toggle('open');
        langToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    langMenu.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    document.addEventListener('click', function() {
        langMenu.classList.remove('open');
        langToggle.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            langMenu.classList.remove('open');
            langToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

langOptions.forEach(function(option) {
    option.addEventListener('click', function() {
        const lang = option.getAttribute('data-lang');
        applyGoogleLanguage(lang);
        if (langMenu && langToggle) {
            langMenu.classList.remove('open');
            langToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

function applyGoogleLanguage(lang) {
    if (!lang) return;

    const setLanguage = function() {
        const combo = document.querySelector('.goog-te-combo');
        if (!combo) return false;
        combo.value = lang;
        combo.dispatchEvent(new Event('change'));
        return true;
    };

    if (setLanguage()) return;

    let tries = 0;
    const maxTries = 20;
    const timer = setInterval(function() {
        tries += 1;
        if (setLanguage() || tries >= maxTries) {
            clearInterval(timer);
        }
    }, 300);
}

function googleTranslateElementInit() {
    if (!window.google || !google.translate || !google.translate.TranslateElement) return;
    new google.translate.TranslateElement(
        {
            pageLanguage: 'en',
            autoDisplay: false
        },
        'google_translate_element'
    );
}

window.googleTranslateElementInit = googleTranslateElementInit;

const gsearchThumb = document.getElementById('gsearchThumb');
const gsearchModal = document.getElementById('gsearchModal');

const simplesokThumb = document.getElementById('simplesokThumb');
const simplesokModal = document.getElementById('simplesokModal');

const diaryThumb = document.getElementById('diaryThumb');
const diaryModal = document.getElementById('diaryModal');

const gowikitThumb = document.getElementById('gowikitThumb');
const gowikitModal = document.getElementById('gowikitModal');

const vibefilterThumb = document.getElementById('vibefilterThumb');
const vibefilterModal = document.getElementById('vibefilterModal');

const gonewsdThumb = document.getElementById('gonewsdThumb');
const gonewsdModal = document.getElementById('gonewsdModal');

const postnoteThumb = document.getElementById('postnoteThumb');
const postnoteModal = document.getElementById('postnoteModal');

const ttsonnxThumb = document.getElementById('ttsonnxThumb');
const ttsonnxModal = document.getElementById('ttsonnxModal');

const dictionaryThumb = document.getElementById('dictionaryThumb');
const dictionaryModal = document.getElementById('dictionaryModal');

const secmsThumb = document.getElementById('secmsThumb');
const secmsModal = document.getElementById('secmsModal');

gsearchThumb.addEventListener('click', function() {
    gsearchModal.style.display = 'block';
});

simplesokThumb.addEventListener('click', function() {
    simplesokModal.style.display = 'block';
});

diaryThumb.addEventListener('click', function() {
    diaryModal.style.display = 'block';
});

gowikitThumb.addEventListener('click', function() {
    gowikitModal.style.display = 'block';
});

vibefilterThumb.addEventListener('click', function() {
    vibefilterModal.style.display = 'block';
});

gonewsdThumb.addEventListener('click', function() {
    gonewsdModal.style.display = 'block';
});

postnoteThumb.addEventListener('click', function() {
    postnoteModal.style.display = 'block';
});

ttsonnxThumb.addEventListener('click', function() {
    ttsonnxModal.style.display = 'block';
});

dictionaryThumb.addEventListener('click', function() {
    dictionaryModal.style.display = 'block';
});

secmsThumb.addEventListener('click', function() {
    secmsModal.style.display = 'block';
});

document.querySelectorAll('[data-close-modal]').forEach(function(button) {
    button.addEventListener('click', function() {
        const modalId = button.getAttribute('data-close-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        }
    });
});

window.addEventListener('click', function(event) {
    if (event.target === gsearchModal) {
        gsearchModal.style.display = 'none';
    }
    if (event.target === simplesokModal) {
        simplesokModal.style.display = 'none';
    }
    if (event.target === diaryModal) {
        diaryModal.style.display = 'none';
    }
    if (event.target === gowikitModal) {
        gowikitModal.style.display = 'none';
    }
    if (event.target === vibefilterModal) {
        vibefilterModal.style.display = 'none';
    }
    if (event.target === gonewsdModal) {
        gonewsdModal.style.display = 'none';
    }
    if (event.target === postnoteModal) {
        postnoteModal.style.display = 'none';
    }
    if (event.target === ttsonnxModal) {
        ttsonnxModal.style.display = 'none';
    }
    if (event.target === dictionaryModal) {
        dictionaryModal.style.display = 'none';
    }
    if (event.target === secmsModal) {
        secmsModal.style.display = 'none';
    }
});
