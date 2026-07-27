import { places } from './where-do-we-go.data.js'

const parseDMS = (coords) => {
    const latM = coords.match(/(\d+)°(\d+)'([\d.]+)"([NS])/)
    const lonM = coords.match(/(\d+)°(\d+)'([\d.]+)"([EW])/)
    if (!latM || !lonM) return null
    const lat = (Number(latM[1]) + Number(latM[2]) / 60 + Number(latM[3]) / 3600) * (latM[4] === 'N' ? 1 : -1)
    const lon = (Number(lonM[1]) + Number(lonM[2]) / 60 + Number(lonM[3]) / 3600) * (lonM[4] === 'E' ? 1 : -1)
    return { lat, lon, latDecimal: lat.toFixed(6), lonDecimal: lon.toFixed(6) }
}

export const explore = () => {
    const sorted = [...places].sort((a, b) => {
        const aLat = parseDMS(a.coordinates)?.lat ?? 0
        const bLat = parseDMS(b.coordinates)?.lat ?? 0
        return bLat - aLat
    })

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
        location.href = `https://www.google.com/maps?q=${place.coordinates}`
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
