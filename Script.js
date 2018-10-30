const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;
let gameWidth = canvas.width;
const ballMove = ballsGame =>
{
    ballsGame.forEach(ballGame =>
    {
        ballGame.move(collisionObjects);
    })
}
const updateGameWindow = () =>
{
    gameWidth = canvas.width;
    computerPaddel.positionX = canvas.width - 30;
}
const clearScreen = () =>
{
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function Paddel(width,height,color,positionX,positionY) 
{
    this.width = width;
    this.height = height;
    this.color = color;
    this.positionX = positionX;
    this.positionY = positionY;
    this.speed = 3;
    this.middleHeight = height / 2;
}
function Ball(size,color,positionX,positionY)
{
    this.width = size;
    this.height = size;
    this.color = color;
    this.positionX = positionX;
    this.positionY = positionY;
    this.middleHeight = size / 2;
    this.speedX = 2;
    this.speedY = 2;
    this.directionX = true; //true w prawo
    this.directionY = true; //true w dó³
    this.move = collisionObjects =>
    {
        let collision = 0;
        const ballLeft = this.positionX;
        const ballRight = this.positionX + this.width;
        const ballTop = this.positionY;
        const ballBottom = this.positionY + this.height;

        if (this.directionX && this.directionY) {
            for (let i = 0; i < collisionObjects.length; i++)
            {
                let objectLeft = collisionObjects[i].positionX;
                let objectRight = collisionObjects[i].positionX + collisionObjects[i].width;
                let objectTop = collisionObjects[i].positionY
                let objectBottom = collisionObjects[i].positionY = collisionObjects[i].height;
                if (this === collisionObjects[i]) {
                    continue;
                } else if( ((objectLeft <= ballLeft && ballLeft <= objectRight) || (objectLeft <= ballRight && ballRight <= objectRight))&& ((objectTop <= ballTop && ballTop <= objectBottom)|| (objectTop <= ballBottom && ballBottom <= objectBottom)))
                {
                    this.directionX != this.directionX;
                    break
                }
                if (((objectLeft <= ballLeft && ballLeft <= objectRight) || (objectLeft <= ballRight && ballRight <= objectRight)) && ((objectTop <= ballTop && ballTop <= objectBottom) || (objectTop <= ballBottom && ballBottom <= objectBottom)))
                {

                }
            }
        } else if (this.directionX && !this.directionY) {

        } else if (!this.directionX && this.directionY) {

        } else
        {

        }
    }

}
const drawObject = (collisionObjects,context) =>
{
    collisionObjects.forEach(collisionObject =>
    {
        context.fillStyle = collisionObject.color;
        context.fillRect(collisionObject.positionX, collisionObject.positionY, collisionObject.width, collisionObject.height);
    })
}

const collisionObjects = [];
const ballsGame = [];

const playerPaddel = new Paddel(20, 120, 'green', 10, 50);
const computerPaddel = new Paddel(20, 120, 'red', canvas.width - 30, 100);
const ball1 = new Ball(8, 'white', canvas.width / 2 - 4, canvas.height / 2 - 4);
collisionObjects.push(playerPaddel, computerPaddel, ball1);
ballsGame.push()
const run = () =>
{
    if (gameWidth !== canvas.width)
    {
        updateGameWindow();
        
    }
    clearScreen();
    ballMove(ballsGame);
    drawObject(collisionObjects, ctx);
}
let timer = setInterval(run, 1000 / 60);
