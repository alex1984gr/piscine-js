import { places } from './where-do-we-go.data.js'

const toDecimal = (coords) => {
    const match = coords.match(/(\d+)°(\d+)'([\d.]+)"([NS])/)
    if (!match) return 0
    const [, deg, min, sec, dir] = match
    const val = Number(deg) + Number(min) / 60 + Number(sec) / 3600
    return dir === 'N' ? val : -val
}

export const explore = () => {
    const sorted = [...places].sort((a, b) => toDecimal(b.coordinates) - toDecimal(a.coordinates))

    sorted.forEach(({ name, coordinates, color }) => {
        const section = document.createElement('section')
        const slug = name.split(',')[0].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
        section.style.background = `url('https://public.01-edu.org/subjects/where-do-we-go/where-do-we-go_images/${slug}.jpg') center/cover no-repeat`
        document.body.append(section)
    })

    const location = document.createElement('a')
    location.className = 'location'
    location.target = '_blank'
    document.body.append(location)

    const direction = document.createElement('div')
    direction.className = 'direction'
    document.body.append(direction)

    const updateLocation = () => {
        const mid = window.scrollY + window.innerHeight / 2
        const index = Math.min(Math.floor(mid / window.innerHeight), sorted.length - 1)
        const place = sorted[index]
        location.textContent = `${place.name}\n${place.coordinates}`
        location.style.color = place.color
        location.setAttribute('href', `https://www.google.com/maps?q=${place.coordinates}`)
    }

    let lastScrollY = window.scrollY
    window.addEventListener('scroll', () => {
        const current = window.scrollY
        direction.textContent = current < lastScrollY ? 'N\n↑' : 'S\n↓'
        lastScrollY = current
        updateLocation()
    })

    updateLocation()
}
