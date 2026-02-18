document.getElementById('currentYear').textContent = new Date().getFullYear();

const gsearchThumb = document.getElementById('gsearchThumb');
const gsearchModal = document.getElementById('gsearchModal');

const simplesokThumb = document.getElementById('simplesokThumb');
const simplesokModal = document.getElementById('simplesokModal');

const diaryThumb = document.getElementById('diaryThumb');
const diaryModal = document.getElementById('diaryModal');

gsearchThumb.addEventListener('click', function() {
    gsearchModal.style.display = 'block';
});

simplesokThumb.addEventListener('click', function() {
    simplesokModal.style.display = 'block';
});

diaryThumb.addEventListener('click', function() {
    diaryModal.style.display = 'block';
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
