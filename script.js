const currentYear = document.getElementById('currentYear');
if (currentYear) currentYear.textContent = new Date().getFullYear();

function loadExternalScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
}

loadExternalScript('//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');

const navHamburger = document.getElementById('navHamburger');
const navLinks = document.getElementById('navLinks');
if (navHamburger && navLinks) {
    navHamburger.addEventListener('click', function() {
        navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.classList.remove('open');
        });
    });
}

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

function openModal(modal) {
    if (!modal) return;
    modal.style.display = 'block';
}

function closeModal(modal) {
    if (!modal) return;
    modal.style.display = 'none';
}

function bindThumbToModal(thumb, modal) {
    if (!thumb || !modal) return;
    thumb.addEventListener('click', function() {
        openModal(modal);
    });
}

const gsearchThumb = document.getElementById('gsearchThumb');
const gsearchModal = document.getElementById('gsearchModal');

const simplesokThumb = document.getElementById('simplesokThumb');
const simplesokModal = document.getElementById('simplesokModal');

const simplescreeneditorThumb = document.getElementById('simplescreeneditorThumb');
const simplescreeneditorModal = document.getElementById('simplescreeneditorModal');

const iyagidosboxThumb = document.getElementById('iyagidosboxThumb');
const iyagidosboxModal = document.getElementById('iyagidosboxModal');

const gotransThumb = document.getElementById('gotransThumb');
const gotransModal = document.getElementById('gotransModal');

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

bindThumbToModal(gsearchThumb, gsearchModal);
bindThumbToModal(simplesokThumb, simplesokModal);
bindThumbToModal(simplescreeneditorThumb, simplescreeneditorModal);
bindThumbToModal(iyagidosboxThumb, iyagidosboxModal);
bindThumbToModal(gotransThumb, gotransModal);
bindThumbToModal(diaryThumb, diaryModal);
bindThumbToModal(gowikitThumb, gowikitModal);
bindThumbToModal(vibefilterThumb, vibefilterModal);
bindThumbToModal(gonewsdThumb, gonewsdModal);
bindThumbToModal(postnoteThumb, postnoteModal);
bindThumbToModal(ttsonnxThumb, ttsonnxModal);
bindThumbToModal(dictionaryThumb, dictionaryModal);
bindThumbToModal(secmsThumb, secmsModal);

document.querySelectorAll('[data-close-modal]').forEach(function(button) {
    button.addEventListener('click', function() {
        const modalId = button.getAttribute('data-close-modal');
        const modal = document.getElementById(modalId);
        closeModal(modal);
    });
});

window.addEventListener('click', function(event) {
    if (event.target === gsearchModal) closeModal(gsearchModal);
    if (event.target === simplesokModal) closeModal(simplesokModal);
    if (event.target === simplescreeneditorModal) closeModal(simplescreeneditorModal);
    if (event.target === iyagidosboxModal) closeModal(iyagidosboxModal);
    if (event.target === gotransModal) closeModal(gotransModal);
    if (event.target === diaryModal) closeModal(diaryModal);
    if (event.target === gowikitModal) closeModal(gowikitModal);
    if (event.target === vibefilterModal) closeModal(vibefilterModal);
    if (event.target === gonewsdModal) closeModal(gonewsdModal);
    if (event.target === postnoteModal) closeModal(postnoteModal);
    if (event.target === ttsonnxModal) closeModal(ttsonnxModal);
    if (event.target === dictionaryModal) closeModal(dictionaryModal);
    if (event.target === secmsModal) closeModal(secmsModal);
});
