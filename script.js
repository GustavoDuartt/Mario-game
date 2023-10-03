const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

        const jump = () => {
            mario.classList.add('jump');
            setTimeout(() => {
                mario.classList.remove('jump');
            }, 500);
        }

        const loop = setInterval(() => {

            const pipePosition = pipe.offsetLeft;
            const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

            if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

                pipe.style.animation = "none";
                pipe.style.left = `${pipePosition}px`;

                mario.style.animation = "none";
                mario.style.bottom = `${marioPosition}px`;

                mario.src = './images/gameOver.png';
                mario.style.width = '75px';
                mario.style.marginLeft = '50px';

                const gameOver = document.getElementById('game-over');
                gameOver.style.display = 'flex';

                clearInterval(loop);
            }

        }, 10)

document.addEventListener('keydown', jump);

document.addEventListener('keydown', function () {
    var audio = document.getElementById('Audio');
    audio.volume = 0.1;
    audio.play();
});
