scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true)
    info.startCountdown(10)
})
let mySprite = sprites.create(img`
    . f f f . . . . . . . . f f f . 
    f f c . . . . . . . f c b b c . 
    f c c . . . . . . f c b b c . . 
    c f . . . . . . . f b c c c . . 
    c f f . . . . . f f b b c c . . 
    f f f c c . c c f b c b b c . . 
    f f f c c c c c f b c c b c . . 
    . f c 3 c c 3 b c b c c c . . . 
    . c b 3 b c 3 b b c c c c . . . 
    c c b b b b b b b b c c . . . . 
    c b 1 b b b 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    f b c b b b c b b b b f . . . . 
    . f 1 f f f 1 b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tiles.createTilemap(hex`10001000040707070707070707070707070707070416021602150202150202020215021904160202020215120a070e07070e0701080505111616020309150202020217030a070713020215030402030215050506041602020212020304020302020216030a07071302031503041503150a100e0104020202150302030402030f0415160304150707070707071302140e1302150304020215021616020215020202150203080505110202150202160202020202030918180416150a0c070c070c02070c01050511041602091502020202150202030a10130806020b02020204020203150d091616020215040f021504020203020308050505050508050e05040202030e06`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 . 2 . . . . . . . . . . . . 
    2 2 . . . . . 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 . 2 2 . . . . . . 2 
    2 2 2 2 . . . 2 2 . 2 . . 2 2 2 
    2 2 . . . 2 . 2 2 . 2 . . . 2 2 
    2 2 2 2 . 2 . 2 2 . 2 . 2 2 2 2 
    2 . . . . 2 . 2 2 . 2 . 2 . 2 2 
    2 . 2 2 2 2 2 2 2 . 2 2 2 . . 2 
    2 . . . . 2 2 . . . . . . . . 2 
    2 2 2 2 . . . . . 2 . . . . . 2 
    2 . . 2 2 . 2 2 2 2 2 2 . 2 2 2 
    2 2 2 2 2 . 2 . . . . . . . . 2 
    2 2 2 2 2 . 2 . . . 2 . . 2 . 2 
    2 2 2 . . . 2 . . . 2 . . 2 . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.floorDark0,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.collectibleInsignia,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.floorDark1,sprites.dungeon.floorDark3,sprites.dungeon.doorClosedEast,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.stairLarge], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
scene.cameraFollowSprite(mySprite)
