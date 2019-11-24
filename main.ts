let position: Position = null
let positionTemp: Position = null
let j = 0
player.onChat("run", function () {
    agent.teleport(positions.create(10, -5, -12), CompassDirection.South)
    position = agent.getPosition()
    agent.setItem(Block.RedWool, 64, 1)
    agent.setItem(Block.OrangeWool, 64, 2)
    agent.setItem(Block.YellowWool, 64, 3)
    agent.setItem(Block.LimeWool, 64, 4)
    agent.setItem(Block.LightBlueWool, 64, 5)
    agent.setItem(Block.BlueWool, 64, 6)
    agent.setItem(Block.PurpleWool, 64, 7)
    for (let i = 0; i <= 4; i++) {
        agent.teleport(positions.add(
        position,
        positions.create(0, i, i)
        ), CompassDirection.South)
        LigneMulticolor(7)
    }
    positionTemp = positions.add(
    position,
    positions.create(0, 5, 5)
    )
    for (let i = 0; i <= 5; i++) {
        agent.teleport(positions.add(
        positionTemp,
        positions.create(0, i, i)
        ), CompassDirection.South)
        LigneMulticolor(6 - i)
    }
    positionTemp = positions.add(
    position,
    positions.create(0, 0, 19)
    )
    for (let i = 0; i <= 4; i++) {
        agent.teleport(positions.add(
        positionTemp,
        positions.create(0, i, i * -1)
        ), CompassDirection.South)
        ligneCouleurInverse(7)
    }
    positionTemp = positions.add(
    position,
    positions.create(0, 5, 15)
    )
    for (let i = 0; i <= 5; i++) {
        agent.teleport(positions.add(
        positionTemp,
        positions.create(0, i, 0)
        ), CompassDirection.South)
        ligneCouleurInverse(6 - i)
    }
    positionTemp = positions.add(
    position,
    positions.create(0, 5, 11)
    )
    for (let i = 0; i <= 6; i++) {
        agent.setSlot(7 - i)
        agent.teleport(positions.add(
        positionTemp,
        positions.create(0, i, 0)
        ), CompassDirection.South)
        ligne(4)
    }
})
function LigneMulticolor (num: number) {
    for (let i = 0; i <= num - 1; i++) {
        agent.setSlot(i + 1)
        agent.place(SixDirection.Down)
        agent.move(SixDirection.Forward, 1)
    }
}
function ligneCouleurInverse (num: number) {
    j = num
    for (let i = 0; i <= num - 1; i++) {
        agent.setSlot(j)
        agent.place(SixDirection.Down)
        agent.move(SixDirection.Forward, 1)
        j += -1
    }
}
function ligne (num: number) {
    for (let index = 0; index < num; index++) {
        agent.place(SixDirection.Down)
        agent.move(SixDirection.Forward, 1)
    }
}
