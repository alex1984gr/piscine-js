export const pick = () => {
    const hslDiv = document.createElement('div')
    hslDiv.className = 'text hsl'
    document.body.append(hslDiv)

    const hueDiv = document.createElement('div')
    hueDiv.className = 'text hue'
    document.body.append(hueDiv)

    const lumDiv = document.createElement('div')
    lumDiv.className = 'text luminosity'
    document.body.append(lumDiv)

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    const lineX = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    lineX.id = 'axisX'
    lineX.setAttribute('y1', '0')
    lineX.setAttribute('y2', '100vh')
    const lineY = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    lineY.id = 'axisY'
    lineY.setAttribute('x1', '0')
    lineY.setAttribute('x2', '100vw')
    svg.append(lineX, lineY)
    document.body.append(svg)

    document.addEventListener('mousemove', (e) => {
        const hue = Math.round((e.clientX / window.innerWidth) * 360)
        const lum = Math.round((e.clientY / window.innerHeight) * 100)
        const hsl = `hsl(${hue}, 50%, ${lum}%)`

        document.body.style.background = hsl
        hslDiv.textContent = hsl
        hueDiv.textContent = hue
        lumDiv.textContent = lum

        lineX.setAttribute('x1', e.clientX)
        lineX.setAttribute('x2', e.clientX)
        lineY.setAttribute('y1', e.clientY)
        lineY.setAttribute('y2', e.clientY)
    })

    document.addEventListener('click', () => {
        navigator.clipboard.writeText(hslDiv.textContent)
    })
}
