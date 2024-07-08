//moving ball part 1
//1. create a ball element in center of the screen(in html)
//2. find all element in DOM
//3. create handler: key up/down/left/right to move the ball
//4. register the handlers in js
//hint:
//getBoundingClientRect(): retrieve the size and position of an element
//let ballPosition = ball.getBoundingClientRect()
//ball.style.left = ballPosition.left - 10 + 'px'
//window.innerHeight
//window.innerWidth

//homework:
//moving ball part 2
//create a ball element from js
//change the color of the ball when key is down
//change the color of the ball to original color when key is up
//move the ball to the clicked position

//optional:
//change the ball to "Pac-Man"
//    keyframes
//    clip-path: polygon(100% 74%, 44% 48%, 100% 21%);

const ball = document.createElement('div');
ball.id='ball';
ball.style.width = '100px';
ball.style.height = '100px';
ball.style.backgroundColor = '#ffb700';
ball.style.position = 'absolute';
ball.style.borderRadius = '50%';
ball.style.overflow = 'hidden';
document.body.appendChild(ball);

const mouth = document.createElement('div');
mouth.style.width='100%';
mouth.style.height='100%';
mouth.style.backgroundColor = 'white';
mouth.style.clipPath = 'polygon(100% 74%, 44% 48%, 100% 21%)';
mouth.style.animation = 'pacManRightMouth 1s infinite linear';
ball.appendChild(mouth);

function moveBall(event){
    const ballPosition = ball.getBoundingClientRect();
    const moveDistance = 10;

    switch(event.key){
        case 'ArrowUp':
            if (ballPosition.top - moveDistance >= 0) {
                ball.style.top = (ballPosition.top - moveDistance) + 'px';
                mouth.style.clipPath = 'polygon(74% 0%, 48% 56%, 21% 0%)';
                mouth.style.animation = 'pacManUpMouth 0.5s infinite';
                ball.style.backgroundColor = '#ff0000';
            }
            break;
        case 'ArrowDown':
            if (ballPosition.bottom + moveDistance <= window.innerHeight) {
                ball.style.top = (ballPosition.top + moveDistance) + 'px';
                mouth.style.clipPath = 'polygon(74% 100%, 48% 56%, 21% 100%)';
                mouth.style.animation = 'pacManDownMouth 0.5s infinite';
                ball.style.backgroundColor = '#ff0000';

            }
            break;
        case 'ArrowLeft':
            if (ballPosition.left - moveDistance >= 0) {
                ball.style.left = (ballPosition.left - moveDistance) + 'px';
                mouth.style.clipPath = 'polygon(0% 74%, 44% 48%, 0% 21%)';
                mouth.style.animation = 'pacManLeftMouth 0.5s infinite';
                ball.style.backgroundColor = '#ff0000';
            }
            break;
        case 'ArrowRight':
            if (ballPosition.right + moveDistance <= window.innerWidth) {
                ball.style.left = (ballPosition.left + moveDistance) + 'px';
                mouth.style.clipPath = 'polygon(100% 74%, 44% 48%, 100% 21%)';
                mouth.style.animation = 'pacManRightMouth 0.5s infinite';
                ball.style.backgroundColor = '#ff0000';
            }
            break;
        default:
            break;
    }
}

//change the color of the ball back to original color 
function changeBallColorBack(event) {
    ball.style.backgroundColor = '#ffb700';
}

//move the ball to the clicked position
function moveBallByClick(event) {
    ball.style.top = event.clientY + 'px';
    ball.style.left = event.clientX + 'px';
}

document.addEventListener('click', moveBallByClick);
document.addEventListener('keyup', changeBallColorBack);
document.addEventListener('keydown', moveBall);



