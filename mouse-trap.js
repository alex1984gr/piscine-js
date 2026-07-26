let lastCircle = null
let trapped = false

export const createCircle = () => {
    document.addEventListener('click', (e) => {
        const div = document.createElement('div')
        div.className = 'circle'
        div.style.background = 'white'
        div.style.left = `${e.clientX - 25}px`
        div.style.top = `${e.clientY - 25}px`
        document.body.append(div)
        lastCircle = div
        trapped = false
    })
}

export const moveCircle = () => {
    document.addEventListener('mousemove', (e) => {
        if (!lastCircle || trapped) return
        lastCircle.style.left = `${e.clientX - 25}px`
        lastCircle.style.top = `${e.clientY - 25}px`
        checkTrap()
    })
}

const checkTrap = () => {
    if (!lastCircle) return
    const box = document.querySelector('.box')
    if (!box) return
    const b = box.getBoundingClientRect()
    const c = lastCircle.getBoundingClientRect()
    if (c.left > b.left && c.right < b.right && c.top > b.top && c.bottom < b.bottom) {
        lastCircle.style.background = 'var(--purple)'
        trapped = true
    }
}

export const setBox = () => {
    const box = document.createElement('div')
    box.className = 'box'
    document.body.append(box)
}
