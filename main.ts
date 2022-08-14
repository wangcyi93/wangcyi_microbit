input.onGesture(Gesture.TiltLeft, function () {
    蛇.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.LogoDown, function () {
    蛇.change(LedSpriteProperty.Y, -1)
})
input.onGesture(Gesture.LogoUp, function () {
    蛇.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    蛇.change(LedSpriteProperty.X, 1)
})
let 蛇: game.LedSprite = null
蛇 = game.createSprite(2, 2)
let 虫 = game.createSprite(randint(0, 4), randint(0, 4))
basic.forever(function () {
    if (蛇.isTouching(虫)) {
        game.addScore(1)
        虫.delete()
        basic.pause(200)
        虫 = game.createSprite(randint(0, 4), randint(0, 4))
    }
    if (game.score() == 10) {
        basic.showIcon(IconNames.Happy)
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        game.gameOver()
    }
})
