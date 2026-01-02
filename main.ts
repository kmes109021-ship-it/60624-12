input.onButtonPressed(Button.A, function () {
    籃子.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(game.score())
})
input.onButtonPressed(Button.B, function () {
    籃子.change(LedSpriteProperty.X, 1)
})
let 籃子: game.LedSprite = null
game.setScore(0)
籃子 = game.createSprite(2, 4)
let 水果 = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    水果.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
    if (水果.isTouching(籃子)) {
        game.addScore(1)
        水果.delete()
        水果 = game.createSprite(randint(0, 4), 0)
    }
    水果.set(LedSpriteProperty.Brightness, 55)
    籃子.set(LedSpriteProperty.Brightness, 200)
})
