const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const counter = document.querySelector('.counter');

const maxChars = 200;

textInput.addEventListener('input', () => {
    const currentLength = textInput.value.length;
    charCount.textContent = currentLength;

    if (currentLength >= maxChars) {
        counter.classList.add('limit');
        counter.classList.remove('warning');
    } else if (currentLength >= maxChars * 0.8) {
        counter.classList.add('warning');
        counter.classList.remove('limit');
    } else {
        counter.classList.remove('warning', 'limit');
    }
});
