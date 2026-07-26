export const generateLetters = () => {
    const total = 120
    for (let i = 0; i < total; i++) {
        const div = document.createElement('div')
        div.textContent = String.fromCharCode(65 + Math.floor(Math.random() * 26))
        div.style.fontSize = `${11 + Math.round(i * (130 - 11) / (total - 1))}px`
        div.style.fontWeight = i < 40 ? '300' : i < 80 ? '400' : '600'
        document.body.append(div)
    }
}
