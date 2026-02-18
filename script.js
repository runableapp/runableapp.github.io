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
