export const compose = () => {
    document.addEventListener('keydown', (e) => {
        if (/^[a-z]$/.test(e.key)) {
            const div = document.createElement('div')
            div.className = 'note'
            div.textContent = e.key
            const hue = (e.key.charCodeAt(0) - 97) * (360 / 26)
            div.style.background = `hsl(${hue}, 70%, 50%)`
            document.body.append(div)
        } else if (e.key === 'Backspace') {
            const notes = document.querySelectorAll('.note')
            if (notes.length) notes[notes.length - 1].remove()
        } else if (e.key === 'Escape') {
            document.querySelectorAll('.note').forEach(n => n.remove())
        }
    })
}
