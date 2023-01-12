namespace SpriteKind {
    export const obstacle = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (sprite.x < otherSprite.x) {
        ball.vx = 0 - bounce / 4
    } else {
        ball.vx = bounce / 4
    }
    ball.vy = bounce
    gravity += 1
    bounce = 0 - gravity
})
let ball: Sprite = null
let bounce = 0
let gravity = 0
info.setLife(3)
gravity = 200
bounce = 0 - gravity
scene.setBackgroundImage(img`
    fffffffffffff44444444444444444fffffffffff44444444444444444fffffffffffffffffffffffffffffffffffff44444fffffffffff44444444444ffffffff444444444444444444444444444444
    ffffffffffffff44444444444444444ffffffffff4444444fffff44444fffffffffffffffffffffffffffffffffffff4444fffffffffffff4444444444ffffffff444444444444444444444444444444
    fffffffffffffff44444444444444444fffffffff444444fffffff4444fffffffffffffffffffffffffffffffffffff4444fffffffffffff4444444444fffffff4444444444444fffffff44444444444
    ffffffffffffffff4444444444444444fffffffff444444fffffff4444fffffffffffffffffffffffffffffffffffff4444fffffffffffff4444444444fffffff44444444444fffffffffff444444444
    fffffffffffffffff4444444444444444ffffffff444444fffffff4444ffffffffffffffff44444444444ffffffffff4444fffffffffffff4444444444fffffff4444444444fffffffffffff44444444
    fffffffffffffffff44444444444444444fffffff444444fffffff4444fffffffffffff44444444444444444fffffff4444fffffffffffff4444444444fffffff4444444444fffffffffffff44444444
    ffffffffffffffffff4444444444444444fffffff444444fffffff4444ffffffffffff4444444444444444444ffffff4444fffffffffffff4444444444fffffff444444444fffffffffffffff4444444
    ffffffffffffffffff44444444444444444fffffff444444fffff4444ffffffffffff444444444444444444444fffff4444fffffffffffff4444444444fffffff444444444fffffffffffffff4444444
    ffffffffffffffffff44444444444444444ffffffff4444444444444fffffffffff4444444444444444444444444fff44444fffffffffff44444444444fffffff444444444fffffffffffffff4444444
    ffffffffffffffffff44444444444444444fffffffff44444444444ffffffffffff4444444444444444444444444ffff44444fffffffff44444444444ffffffff444444444fffffffffffffff4444444
    ffffffffffffffffff444444444444444444fffffffff444444444ffffffffffff4444444fffffffff44444444444fff444444fffffff444444444444ffffffff444444444fffffffffffffff4444444
    ffffffffffffffffff444444444444444444fffffffffffffffffffffffffffff444444fffffffffffff4444444444fff44444444444444444444444fffffffff444444444fffffffffffffff4444444
    ffffffffffffffffff444444444444444444ffffffffff444444444fffffffff444444fffffffffffffff4444444444fff444444444444444444444ffffffffff444444444fffffffffffffff4444444
    ffffffffffffffffff444444444444444444ffffffffffffffff4444ffffffff44444fffffffffffffffff444444444ffff4444444444444444444ffffffffffff444444444fffffffffffff44444444
    ffffffffffffffffff444444444444444444fffffffffffffffff4444fffffff4444fffffffffffffffffff44444444fffff44444444444444444fffffffffffff444444444fffffffffffff44444444
    fffffffffffffffff4444444444444444444ffffffffffffffffff4444fffff44444fffffffffffffffffff444444444fffff444444444444444ffffffffffffff4444444444fffffffffff444444444
    fffffffffffffffff4444444444444444444fffffffffffffffffff4444ffff4444fffffffffffffffffffff44444444fffffff44444444444fffffffffffffffff44444444444fffffff44444444444
    ffffffffffffffff44444444444444444444fffffffffffffffffff4444ffff4444fffffffffffffffffffff44444444ffffffffffffffffffffffffffffffffffff444444444444444444444444444f
    fffffffffffffff444444444444444444444fffffffffffffffffff4444ffff4444fffffffffffffffffffff44444444fffffffffffffffff4444444444444fffffff4444444444444444444444444ff
    ffffffffffffff4444444444444444444444fffffffffffffffffff4444ffff4444fffffffffffffffffffff44444444fffffffffffffff44444444444444444fffff4444444444444444444444444ff
    fffffffffffff44444444444444444444444fffffffffffffffffff4444ffff4444fffffffffffffffffffff44444444fffffffffffff444444444444444444444fffff444444444444444444444ffff
    44fffffffff4444444444444444444444444fffffffffffffffffff4444ffff4444fffffffffffffffffffff44444444fffffffffff4444444444444444444444444ffff4444444444444444444fffff
    444444444444444444444444444444444444fffffffffffffffffff4444ffff4444fffffffffffffffffffff44444444ffffffffff444444444444444444444444444ffff44444444444444444ffffff
    44444444444444444444444444444444444fffffff4fffffffffff44444ffff4444fffffffffffffffffffff44444444fffffffff44444444444444444444444444444ffffff44444444444fffffffff
    44444444444444444444444444444444444fffffff44fffffffff444444ffff4444fffffffffffffffffffff44444444ffffffff4444444444fffffffffff4444444444fffffffffffffffffffffffff
    44444444444444444444444444444444444ffffffff44fffffff444444fffff44444fffffffffffffffffff444444444fffffff444444444fffffffffffffff444444444ffffffffffffffffffffffff
    4444444444444444444444444444444444ffffffffff4444444444444fffffff4444fffffffffffffffffff44444444ffffffff44444444fffffffffffffffff44444444fffffffffffffff444444444
    4444444444444444444444444444444444fffffffffff44444444444ffffffff44444fffffffffffffffff444444444fffffff44444444fffffffffffffffffff44444444fffffffffffff4444444444
    444444444444444444444444444444444fffffffffffff444444444fffffffff444444fffffffffffffff4444444444fffffff4444444fffffffffffffffffffff4444444fffffffffff444444444444
    44444444444444444444444444444444fffffffffffffffffffffffffffffffff444444fffffffffffff4444444444fffffff4444444fffffffffffffffffffffff4444444fffffffff4444444444444
    44444444444444444444444444444444ffffffffffffffffffffffffffffffffff4444444fffffffff44444444444ffffffff444444fffffffffffffffffffffffff444444ffffffff44444444444444
    4444444444444444444444444444444ffffffffffffffffffffffffffffffffffff4444444444444444444444444ffffffff4444444fffffffffffffffffffffffff4444444fffffff44444444ffffff
    444444444444444444444444444444fffffffffffffffffffffffffffffffffffff4444444444444444444444444ffffffff444444fffffffffffffffffffffffffff444444ffffff4444444ffffffff
    44444444444444444444444444444ffffffffffffffffffffffffffff4444444fffff444444444444444444444ffffffffff444444fffffffffffffffffffffffffff444444fffff4444444fffffffff
    4444444444444444444444444444ffffffffffffffffffffffffffff444444444fffff4444444444444444444fffffffffff444444fffffffffffffffffffffffffff444444fffff444444ffffffffff
    f4444444444444444444444444ffffffff4444444ffffffffffffff44fffffff44fffff44444444444444444ffffffffffff444444fffffffffffffffffffffffffff444444fffff444444ffffffffff
    ff44444444444444444444444ffffffff444444444fffffffffffff4fffffffff4ffffffff44444444444fffffffffffffff444444fffffffffffffffffffffffffff444444fffff44444fffffffffff
    ffff4444444444444444444fffffffff44444444444ffffffffffff4fffffffff4ffffffffffffffffffffffffffffffffff444444fffffffffffffffffffffffffff444444fffff44444fffffffffff
    fffffff4444444444444ffffffffffff44444444444ffffffffffff4fffffffff4ffffffffffffffffffffffffffffffffff444444fffffffffffffffffffffffffff444444fffff44444fffffffffff
    ffffffffffffffffffffffffffffffff444fffff444ffffffffffff4fffffffff4ffffffffffffffffffffffffffffffffff444444fffffffffffffffffffffffffff444444fffff44444fffffffffff
    ffffffffffffffffffffffffffffffff444fffff444ffffffffffff4fffffffff4ffffffffffffffffffffffffffffffffff444444fffffffffffffffffffffffffff444444fffff44444fffffffffff
    fff444444444444444ffffffffffffff444fffff444ffffffffffff4fffffffff4ffffffffffffffffffffffffffffffffff444444fffffffffffffffffffffffffff444444fffff44444fffffffffff
    444444444444444444444fffffffffff444fffff444fffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444fffffffffffffffffffffffffff444444fffff44444fffffffffff
    444444444444444444444444ffffffff444fffff444fffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444fffffffffffffffffffffffff4444444fffff44444fffffffffff
    44444444444444444444444444fffffff444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff444444fffffffffffffffffffffffff444444fffffff4444fffffffffff
    444444444444444444444444444fffffff4444444ffffff4444444ffffffffffffff4444444444444ffffffffffffffffffff4444444fffffffffffffffffffffff4444444ffffffff4444ffffffffff
    44444444444444444444444444444fffffffffffffffff444444444ffffffffff4444444444444444444ffffffffffffffffff4444444fffffffffffffffffffff4444444fffffffff4444ffffffffff
    444444444444444444444444444444ffffffffffffffff44fffff44ffffffff44444444444444444444444ffffffffffffffff44444444fffffffffffffffffff44444444ffffffffff4444fffffffff
    4444444444444444444444444444444fffffffffffffff44fffff44fffffff4444444444444444444444444ffffffffffffffff44444444fffffffffffffffff44444444ffffffffffff4444ffffffff
    44444444444444444444444444444444ffffffffffffff44fffff44fffff44444444444444444444444444444ffffffffffffff444444444fffffffffffffff444444444ffffffffffffff4444ffffff
    444444444444444444444444444444444fffffffffffff44fffff44ffff4444444444444444444444444444444ffffffffffffff4444444444fffffffffff4444444444ffffffffffffffff444444444
    4444444444444444444444444444444444ffffffffffff44fffff44fff444444444444fffffffff444444444444ffffffffffffff44444444444444444444444444444fff444444444ffffffffffffff
    444444444444444fffffffffff444444444fffffffffff444444444ff44444444444fffffffffffff44444444444ffffffffffffff444444444444444444444444444ff4444444444444ffffffffffff
    444444444444fffffffffffffffff4444444fffffffffff4444444ff44444444444fffffffffffffff44444444444ffffffffffffff4444444444444444444444444ff444444444444444fffffffffff
    44444444444fffffffffffffffffff444444ffffffffffffffffffff4444444444fffffffffffffffff4444444444ffffffffffffffff444444444444444444444fff44444444444444444ffffffffff
    444444444fffffffffffffffffffffff44444ffffffffffffffffff44444444444fffffffffffffffff44444444444fffffffffffffffff44444444444444444ffff4444444444444444444fffffffff
    44444444fffffffffffffffffffffffff44444ffffffffffffffff44444444444fffffffffffffffffff44444444444ffffffffffffffffff4444444444444ffffff4444444444444444444fffffffff
    4444444fffffffffffffffffffffffffff4444ffffffffffffffff44444444444fffffffffffffffffff44444444444ffffffffffffffffffffffffffffffffffff444444444444444444444ffffffff
    444444fffffffffffffffffffffffffffff4444ffffffffffffff444444444444fffffffffffffffffff444444444444fffffffffffffffffffffffffffffffffff4444444fffff444444444ffffffff
    444444fffffffffffffffffffffffffffff4444ffffffffffffff444444444444fffffffffffffffffff444444444444fffffffffffffffffffffffffffffffffff444444fffffff44444444ffffffff
    44444fffffffffffffffffffffffffffffff444ffffffffffffff444444444444fffffffffffffffffff444444444444ffffffffffffff444444444ffffffffffff444444fffffff44444444ffffffff
    4444fffffffffffffffffffffffffffffffff444ffffffffffff4444444444444fffffffffffffffffff4444444444444fffffffffff4444444444444ffffffffff444444fffffff44444444ffffffff
    4444fffffffffffffffffffffffffffffffff444ffffffffffff4444444444444fffffffffffffffffff4444444444444ffffffffff444444444444444fffffffff444444fffffff44444444ffffffff
    4444fffffffffffffffffffffffffffffffff444ffffffffffff4444444444444fffffffffffffffffff4444444444444fffffffff44444444444444444ffffffff444444fffffff44444444ffffffff
    444fffffffffffffffffffffffffffffffffff444fffffffffff4444444444444fffffffffffffffffff4444444444444ffffffffffffffff4444444444ffffffff4444444fffff444444444ffffffff
    444fffffffffffffffffffffffffffffffffff444fffffffffff44444444444444fffffffffffffffff44444444444444fffffffffffffffff4444444444fffffff444444444444444444444ffffffff
    444fffffffffffffffffffffffffffffffffff444fffffffffff44444444444444fffffffffffffffff44444444444444fffffffffffffffff4444444444ffffffff4444444444444444444fffffffff
    444fffffffffffffffffffffffffffffffffff444fffffffffff444444444444444fffffffffffffff444444444444444fffffffffffffffff4444444444ffffffff4444444444444444444fffffffff
    444fffffffffffffffffffffffffffffffffff444fffffffffff4444444444444444fffffffffffff4444444444444444fffffffffffffffff4444444444fffffffff44444444444444444ffffffffff
    444fffffffffffffffffffffffffffffffffff444fffffffffff444444444444444444fffffffff444444444444444444fffffffffffffffff4444444444ffffffffff444444444444444fffffffffff
    444fffffffffffffffffffffffffffffffffff444fffffffffff444444444444444444444444444444444444444444444fffffffffffffffff4444444444fffffffffff4444444444444ffffffffffff
    444fffffffffffffffffffffffffffffffffff444fffffffffff444444444444444444444444444444444444444444444fffffffffffffffff4444444444fffffffffffff444444444ffffffffffffff
    444fffffffffffffffffffffffffffffffffff444fffffffffff444444444444444444444444444444444444444444444ffffffff4fffffff44444444444ffffffffffffffffffffffffffffffffffff
    444fffffffffffffffffffffffffffffffffff444fffffffffff444444444444444444444444444444444444444444444ffffffff4444444444444444444ffffffffffffffffffffffffffffffffffff
    444fffffffffffffffffffffffffffffffffff444ffffffffffff4444444444444444444444444444444444444444444ffffffffff44444444444444444fffffffffffffffffffffffffffffffffffff
    4444fffffffffffffffffffffffffffffffff4444ffffffffffff4444444444444444444444444444444444444444444ffffffffff44444444444444444ffffffffffffffffffffffff4444444444444
    4444fffffffffffffffffffffffffffffffff4444ffffffffffff4444444444444444444444444444444444444444444fffffffffff444444444444444ffffffffffffffffffffff4444444444444444
    4444fffffffffffffffffffffffffffffffff4444fffffffffffff44444444444444444444444444444444444444444fffffffffffff4444444444444ffffffffffffffffffff4444444444444444444
    44444fffffffffffffffffffffffffffffff44444fffffffffffff44444444444444444444444444444444444444444fffffffffffffff444444444ffffffffffffffffffff444444444444444444444
    444444fffffffffffffffffffffffffffff44444fffffffffffffff444444444444444444444444444444444444444fffffffffffffffffffffffffffffffffffffffffff44444444444444444444444
    444444fffffffffffffffffffffffffffff44444ffffffffffffffff4444444444444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffff4444444444444444444444444
    4444444fffffffffffffffffffffffffff444444ffffffffffffffff4444444444444444444444444444444444444ffffffffffffffffffffffffffffffffffffffff444444444444444444444444444
    44444444fffffffffffffffffffffffff444444ffffffffffffffffff44444444444444444444444444444444444ffffffffffffff444444444fffffffffffffffff4444444444444444444444444444
    444444444fffffffffffffffffffffff4444444fffffffffffffffffff444444444444444444444444444444444ffffffffffffff44444444444fffffffffffffff44444444444444444444444444444
    44444444444fffffffffffffffffff444444444ffffffffffffffffffff4444444444444444444444444444444ffffffffffffff4444444444444ffffffffffff44444444444444444444fffffffffff
    444444444444fffffffffffffffff444444444ffffffffffffffffffffff44444444444444444444444444444ffffffffffffff444444444444444ffffffffff444444444444444444ffffffffffffff
    444444444444444fffffffffff444444444444ffff4444444fffffffffffff4444444444444444444444444fffffffffffffff44444444444444444ffffffff44444444444444444ffffffffffffffff
    4444444444444444444444444444444444444ffff444444444fffffffffffff44444444444444444444444ffffffffffffffff4444444fffff44444fffffff4444444444444444ffffffffffffffffff
    444444444444444444444444444444444444fffff444444444fffffffffffffff4444444444444444444fff4444444ffffffff444444fffffff4444ffffff444444444444444ffffffffffffffffffff
    444444444444444444444444444444444444fffff44fffff44ffffffffffffffffff4444444444444ffff44444444444ffffff444444fffffff4444fffff444444444444444fffffffffffffffffffff
    44444444444444444444444444444444444ffffff44fffff44fffff44444ffffffffffffffffffffffff4444444444444fffff444444fffffff4444fffff4444444444444fffffffffffffffffffffff
    4444444444444444444444444444444444fffffff44fffff44fffff44444ffffffffffffffffffffffff4444444444444fffff444444fffffff4444ffff4444444444444ffffffffffffffffffffffff
    444444444444444444444444444444444ffffffff44fffff44fffff4ff44fffffffffffffffffffffff444444444444444ffff444444fffffff4444fff4444444444444fffffffffffffffffffffffff
    44444444444444444444444444444444fffffffff44fffff44fffff4ff44fffffffffff4444444fffff444444fffffff44ffff4444444fffff44444ff4444444444444ffffffffffffffffffffffffff
    4444444444444444444444444444444fffffffffff4444444ffffff44444ffffffffff444444444ffff44444fffffffff4ffff44444444444444444ff444444444444fffffffffffffffffffffffffff
    444444444444444444444444444444ffffffffffffffffffffffffffffffffffffffff444444444ffff44444fffffffff4fffff444444444444444ff444444444444ffffffffffffffffffffffffffff
    44444444444444444444444444444fffffffffffffffffffffffffffffffffff444fff44fffff44ffff44444fffffffff4ffffff4444444444444fff44444444444fffffffffffffffffffffffffffff
    444444444444444444444444444fffffffffffffffffffffffffffffffffffff444fff44fffff44ffff44444fffffffff4fffffff44444444444fff444444444444fffffffffffffffffffffffffffff
    44444444444444444444444444ffffffffffffffffffffffffffffffffffffff444fff44fffff44ffff44444fffffffff4ffffffff444444444ffff44444444444ffffffffffffffffffffffffffffff
    444444444444444444444444fffffff4444444444444fffffffff44444ffffffffffff44fffff44fffff4444ffffffffffffffffffffffffffffff44444444444fffffffffffffffffffffffffffffff
    444444444444444444444ffffffff44444444444444444fffffff44444ffffffffffff44fffff44fffff4444ffffffffffffffffffffffffffffff44444444444fffffffffffffffffffffffffffffff
    fff444444444444444fffffffff444444444444444444444fffff44ff4fffffffffffff4444444fffffff4444ffffffffffffffffffffffffffff44444444444ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffff4444444444444444444444444fff44ff4fffffffffffffffffffffffffffff4444444fffffffffffffffffffffff44444444444ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffff444444444444444444444444444ff44444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4444444444fffffffffffffffffffffffffffffffff
    4444444ffffffffffffffff44444444444444444444444444444ffffffffffffff444444444fffffffffffffffff44444444444fffffffffffff44444444444fffffffffffffffffffffffffffffffff
    444444444fffffffffffff4444444444444444444444444444444fffffffffff4444444444444fffffffffffff444444444444444fffffffffff4444444444ffffffffffffffffffffffffffffffffff
    44444444444ffffffffff444444444444444444444444444444444fffffffff444444444444444ffffffffff4444444444444444444fffffffff4444444444ffffffffffffffffffffffffffffffffff
    444444444444fffffffff444444444444444444444444444444444ffffffff44444444444444444ffffffff44444444fffffffff4444fffffff44444444444ffffffffffffffffffffffffffffffffff
    4444444444444fffffff44444444444444444444444444444444444ffffff4444444444444444444ffffff44444444fffffffffff4444ffffff4444444444fffffffffffffffffffffffffffffffffff
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    4fffffffff444444ff4444fffffffffffffffffff4444444444444444fff4444444fffffff4444444ff44444444fffffffffffffffff4444fff4444444444fffffffffffffffffffffffffffffffffff
    4fffffffff444444ff4444fffffffffffffffffff4444444444444444fff4444444fffffff4444444ff44444444fffffffffffffffff4444fff4444444444fffffffffffffffffffffffffffffffffff
    4fffffffff444444ff4444fffffffffffffffffff4444444444444444fff4444444fffffff4444444ff44444444fffffffffffffffff4444fff4444444444fffffffffffffffffffffffffffffffffff
    4fffffffff444444ff4444fffffffffffffffffff4444444444444444fff44444444fffff44444444ff44444444fffffffffffffffff4444fff4444444444fffffffffffffffffffffffffffffffffff
    44fffffff4444444ff4444fffffffffffffffffff4444444444444444fff444444444444444444444ff44444444fffffffffffffffff4444fff4444444444fffffffffffffffffffffffffffffffffff
    4444444444444444ff4444fffffffffffffffffff4444444444444444ffff4444444444444444444fff44444444fffffffffffffffff4444fff4444444444fffffffffffffffffffffffffffffffffff
    `)
let mySprite = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ......11111111111111111111......
    ........1111111..1111111........
    ..........11........11..........
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
ball = sprites.create(img`
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    ...........111...........
    .........1199911.........
    ........166111661........
    ........161fff161........
    .......191f8f8f191.......
    .......191ff8ff191.......
    .......191f8f8f191.......
    ........161fff161........
    ........166111661........
    .........1199911.........
    ...........111...........
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    `, SpriteKind.obstacle)
controller.moveSprite(mySprite, 100, 100)
mySprite.bottom = 110
game.splash("DONT LET THE BALL HIT THE YELLOW LINE")
game.splash("HOW GOOD ARE YOU AT THIS GAME?")
ball.ay += 0
ball.setBounceOnWall(true)
forever(function () {
    if (ball.y >= 110) {
        info.changeLifeBy(-1)
    }
})
