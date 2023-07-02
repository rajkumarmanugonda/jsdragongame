// score = 0;
// cross = true;
// audio = new Audio('music.mp3');
// audiogo = new Audio('gameover.mp3');

// setTimeout(() => {
//     audio.play();
// }, 1000);

// document.onkeydown = function (e) {
//     console.log("key code is", e.key)
//     if (e.key === 'ArrowUp') {
//         dino = document.querySelector('.dino');
//         dino.classList.add('animateDino');
//         setTimeout(() => {
//             dino.classList.remove('animateDino')
//         }, 700);
//     }
//     if (e.key === 'ArrowRight') {
//         dino = document.querySelector('.dino');
//         dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
//         dino.style.left = (dinox + 100) + "px";
//     }
//     if (e.key === 'ArrowLeft') {
//         dino = document.querySelector('.dino');
//         dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
//         dino.style.left = (dinox - 100) + "px";
//     }
// }

// setInterval(() => {
//     dino = document.querySelector('.dino');
//     gameover = document.querySelector('.gameover');
//     obstacle = document.querySelector('.obstacle');

//     dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
//     dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

//     ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
//     oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

//     offsetX = Math.abs(dx - ox);
//     offsetY = Math.abs(dy - oy);
//     console.log(offsetX, offsetY);
//     if (offsetX < 100 && offsetY < 100) {
//         gameover.innerHTML = "Game over-reload to start again ";
//         gameover.style.visibility = 'visible';
//         obstacle.classList.remove('obstacleAni')
//         audiogo.play();
//         setTimeout(() => {
//             audiogo.pause();
//             audio.pause();
//         }, 1000);
//     }
//     else if (cross && offsetX < 145) {
//         score += 1;
//         updatescore(score)
//         cross = false;
//         setTimeout(() => {
//             cross = true;
//         }, 1000);
//         setTimeout(() => {
//             aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
//             newDur = aniDur - 0.05;
//             obstacle.style.animationDuration = newDur + 's';
//         }, 500);

//     }
// }, 100);

// function updatescore(score) {
//     scorecont.innerHTML = 'your score is ' + score;
// }


score = 0;
cross = true;
audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');

setTimeout(() => {
    audio.play();
}, 1000);

document.addEventListener('keydown', handleKeyPress);
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

function handleKeyPress(e) {
    if (e.key === 'ArrowUp') {
        handleSwipeUp();
    }
    if (e.key === 'ArrowRight') {
        moveDinoRight();
    }
    if (e.key === 'ArrowLeft') {
        moveDinoLeft();
    }
}

let startX = 0;
let startY = 0;

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
}

function handleTouchMove(event) {
    if (!startX || !startY) {
        return;
    }

    const deltaX = event.touches[0].clientX - startX;
    const deltaY = event.touches[0].clientY - startY;

    if (Math.abs(deltaY) > Math.abs(deltaX)) {
        if (deltaY < 0) {
            handleSwipeUp();
        }
    }

    startX = 0;
    startY = 0;
}

function handleSwipeUp() {
    dino = document.querySelector('.dino');
    dino.classList.add('animateDino');
    setTimeout(() => {
        dino.classList.remove('animateDino');
    }, 700);
}

function moveDinoRight() {
    dino = document.querySelector('.dino');
    dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = (dinox + 100) + "px";
}

function moveDinoLeft() {
    dino = document.querySelector('.dino');
    dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = (dinox - 100) + "px";
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    if (offsetX < 30 && offsetY < 10) {
        gameover.innerHTML = "Game over - reload to start again";
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (cross && offsetX < 145) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.05;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
    }
}, 100);

function updateScore(score) {
    scorecont.innerHTML = 'Your score is ' + score;
}
