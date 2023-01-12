namespace SpriteKind {
    export const obstacle = SpriteKind.create()
}
let red_line = sprites.create(, SpriteKind.obstacle)
let mySprite = sprites.create(, SpriteKind.Player)
mySprite.bottom = 110
controller.moveSprite(mySprite, 100, 100)
game.splash("DONT LET THE BALL HIT THE RED LINE")
game.splash("HOW GOOD ARE YOU AT THIS GAME?")
game.splash("0 IS FOR BEGGINERS 9 IF FOR EXPERTS")
let question = game.askForNumber("WHAT'S YOUR LEVEL?", 1)
let ball = sprites.create(, SpriteKind.obstacle)
if (question == 0) {
    ball.vx = 50
    ball.vy = 50
} else if (question == 1) {
    ball.vx = 100
    ball.vy = 100
} else if (question == 2) {
    ball.vx = 150
    ball.vy = 150
} else if (question == 3) {
    ball.vx = 200
    ball.vy = 200
} else if (question == 4) {
    ball.vx = 250
    ball.vy = 250
} else if (question == 5) {
    ball.vx = 300
    ball.vy = 300
} else if (question == 6) {
    ball.vx = 350
    ball.vy = 350
} else if (question == 7) {
    ball.vx = 400
    ball.vy = 400
} else if (question == 8) {
    ball.vx = 450
    ball.vy = 450
} else {
    ball.vx = 500
    ball.vy = 500
}
ball.setStayInScreen(true)
ball.setBounceOnWall(true)
forever(function () {
    if (ball.overlapsWith(red_line)) {
        game.over(false, effects.confetti)
    }
})
forever(function () {
    mySprite.setBounceOnWall(true)
})
