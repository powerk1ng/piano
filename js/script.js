const showKeyPanel = document.querySelector('.header__keys-checkbox input');
const showKey = document.querySelectorAll('.key span');
const pianoKeys = document.querySelectorAll('.key');
const volumeSlider = document.querySelector('.header__volume-slider input');
let audio = new Audio('audio/a.wav');


volumeSlider.addEventListener('input', handleVolume);

//volume range hanlder 
function handleVolume() {
    audio.volume = this.value;
}


//hide or display showkeys on piano buttons
function showKeys() {
    showKey.forEach(item => {
        if (showKeyPanel.checked) {
            item.classList.add('opacity');
        } else {
            item.classList.remove('opacity');
        }
    });
}

pianoKeys.forEach(item => {
    item.addEventListener('click', () => playPiano(item.dataset.key));
});


//producing sound 
function playPiano(dataKey) {
    audio.src = `audio/${dataKey}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${dataKey}"]`);

    if (clickedKey) {
        clickedKey.classList.add('active');
        setTimeout(function () {
            clickedKey.classList.remove('active');
        }, 100);
    }
}

//sound on keyboard keys
function playByPress(e) {
    pianoKeys.forEach(item => {
        if (item.dataset.key == e.key) {
            playPiano(e.key);
        } else {
            return;
        }
    });
}

document.addEventListener('keydown', playByPress);