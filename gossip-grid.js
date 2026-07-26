import { gossips } from './gossip-grid.data.js'

export const grid = () => {
    // ranges controls
    const ranges = document.createElement('div')
    ranges.className = 'ranges'

    const makeRange = (id, min, max, defaultVal, onChange) => {
        const wrap = document.createElement('div')
        wrap.className = 'range'
        const label = document.createElement('label')
        label.textContent = id
        const input = document.createElement('input')
        input.type = 'range'
        input.className = 'range'
        input.id = id
        input.min = min
        input.max = max
        input.value = defaultVal
        const span = document.createElement('span')
        span.textContent = defaultVal
        input.addEventListener('input', () => {
            span.textContent = input.value
            onChange(input.value)
        })
        wrap.append(label, input, span)
        return wrap
    }

    const cards = () => document.querySelectorAll('.gossip')

    ranges.append(
        makeRange('width', 200, 800, 250, v => cards().forEach(c => c.style.width = `${v}px`)),
        makeRange('fontSize', 20, 40, 20, v => cards().forEach(c => c.style.fontSize = `${v}px`)),
        makeRange('background', 20, 75, 50, v => cards().forEach(c => c.style.background = `hsl(280, 50%, ${v}%)`)),
    )
    document.body.append(ranges)

    // form card
    const form = document.createElement('form')
    form.className = 'gossip'
    const textarea = document.createElement('textarea')
    textarea.placeholder = 'Share a gossip...'
    const btn = document.createElement('button')
    btn.type = 'submit'
    btn.textContent = 'Share gossip!'
    form.append(textarea, btn)
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if (!textarea.value.trim()) return
        addCard(textarea.value.trim())
        textarea.value = ''
    })
    document.body.append(form)

    const addCard = (text) => {
        const div = document.createElement('div')
        div.className = 'gossip fade-in'
        div.textContent = text
        const w = document.getElementById('width')
        const f = document.getElementById('fontSize')
        const b = document.getElementById('background')
        if (w) div.style.width = `${w.value}px`
        if (f) div.style.fontSize = `${f.value}px`
        if (b) div.style.background = `hsl(280, 50%, ${b.value}%)`
        document.body.append(div)
    }

    gossips.forEach(addCard)
}
