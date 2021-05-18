const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('button');
    btn.innerText = sound;

    document.querySelector('.buttons').append(btn);


    btn.addEventListener('click', () => {
        stopPlay();
        document.getElementById(sound).play();
    })
})

function stopPlay() {
    sounds.forEach(sound => {
        let audio = document.getElementById('sound');
         audio.pause();
         audio.currentTime = 0;
    })
}