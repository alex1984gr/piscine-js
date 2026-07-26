let lastCircle = null
let trapped = false
const RADIUS = 25

export const setBox = () => {
    const box = document.createElement('div')
    box.className = 'box'
    document.body.append(box)
}

export const createCircle = () => {
    document.addEventListener('click', (e) => {
        const div = document.createElement('div')
        div.className = 'circle'
        div.style.background = 'white'
        div.style.left = `${e.clientX - RADIUS}px`
        div.style.top = `${e.clientY - RADIUS}px`
        document.body.append(div)
        lastCircle = div
        trapped = false
    })
}

export const moveCircle = () => {
    document.addEventListener('mousemove', (e) => {
        if (!lastCircle) return

        let cx = e.clientX
        let cy = e.clientY

        const box = document.querySelector('.box')
        if (box) {
            const b = box.getBoundingClientRect()
            const isInside = cx > b.left + RADIUS && cx < b.right - RADIUS &&
                             cy > b.top + RADIUS && cy < b.bottom - RADIUS

            if (isInside && !trapped) {
                lastCircle.style.background = 'var(--purple)'
                trapped = true
            }

            if (trapped) {
                cx = Math.max(b.left + RADIUS, Math.min(b.right - RADIUS, cx))
                cy = Math.max(b.top + RADIUS, Math.min(b.bottom - RADIUS, cy))
            }
        }

        lastCircle.style.left = `${cx - RADIUS}px`
        lastCircle.style.top = `${cy - RADIUS}px`
    })
}
