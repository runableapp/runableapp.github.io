document.getElementById('currentYear').textContent = new Date().getFullYear();

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

secmsThumb.addEventListener('click', function() {
    secmsModal.style.display = 'block';
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
    if (event.target === secmsModal) {
        secmsModal.style.display = 'none';
    }
});

function closeGsearchModal() {
    gsearchModal.style.display = 'none';
}

function closeSimplesokModal() {
    simplesokModal.style.display = 'none';
}

function closeDiaryModal() {
    diaryModal.style.display = 'none';
}

function closeGowikitModal() {
    gowikitModal.style.display = 'none';
}

function closeVibefilterModal() {
    vibefilterModal.style.display = 'none';
}

function closeGonewsdModal() {
    gonewsdModal.style.display = 'none';
}

function closePostnoteModal() {
    postnoteModal.style.display = 'none';
}

function closeSecmsModal() {
    secmsModal.style.display = 'none';
}
