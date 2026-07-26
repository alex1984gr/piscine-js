import { colors } from './fifty-shades-of-cold.data.js'

const coldKeywords = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple']

export const generateClasses = () => {
    const style = document.createElement('style')
    style.textContent = colors.map(c => `.${c} { background: ${c}; }`).join('\n')
    document.head.append(style)
}

export const generateColdShades = () => {
    colors
        .filter(c => coldKeywords.some(k => c.includes(k)))
        .forEach(c => {
            const div = document.createElement('div')
            div.className = c
            div.textContent = c
            document.body.append(div)
        })
}

export const choseShade = (shade) => {
    document.querySelectorAll('div').forEach(div => {
        if (div.textContent !== shade) div.className = shade
    })
}
