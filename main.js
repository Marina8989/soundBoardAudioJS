const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('button');
    btn.innerText = sound;

    document.querySelector('.buttons').append(btn);


    btn.addEventListener('click', () => {
        console.log('clicked')
    })
})