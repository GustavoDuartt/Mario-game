

function play () {
const meuBotao = document.querySelector(".meuBotao");
meuBotao.style.background = "transparent";
meuBotao.style.color = "transparent";
meuBotao.style.border = "none";

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const jump1 = document.querySelector(".jump");
const score = document.querySelector('.score');

let playerScore = "";
let gameIsOver = false;

  const scoreCounter = () => {
    if (!gameIsOver) {
      playerScore++;
      score.innerHTML = `Score <b>${playerScore}</b>`;
    }
  };

  const interval = 300;

  Interval = setInterval(scoreCounter, interval);

const loop = setInterval(() => {



        const jump = () => {
            mario.classList.add('jump');
            setTimeout(() => {
            mario.classList.remove('jump');
            }, 500);
        };

        document.addEventListener('keydown', function(event) {
            if (event.key === " ") {
              jump();
              var audio = document.getElementById('Audio');
              audio.volume = 0.1;
              audio.play();
            }

          });
            
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

                gameIsOver = true;
                clearInterval(loop);
                clearInterval(Interval);
            }

        }, 10)

          pipe.style.animationPlayState = "running";
          jump1.style.animationPlayState = "running";
          
};
