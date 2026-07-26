let brickCount = 0
let interval = null

export const build = (count) => {
    brickCount = 0
    interval = setInterval(() => {
        brickCount++
        const brick = document.createElement('div')
        brick.id = `brick-${brickCount}`
        const col = ((brickCount - 1) % 3) + 1
        if (col === 2) brick.dataset.foundation = 'true'
        document.body.append(brick)
        if (brickCount >= count) clearInterval(interval)
    }, 100)
}

export const repair = (...ids) => {
    ids.forEach(id => {
        const el = document.getElementById(id)
        if (!el) return
        el.dataset.repaired = el.hasAttribute('data-foundation') ? 'in progress' : 'true'
    })
}

export const destroy = () => {
    const bricks = document.querySelectorAll('div')
    if (bricks.length) bricks[bricks.length - 1].remove()
}
