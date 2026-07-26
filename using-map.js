const citiesOnly = (arr) => arr.map(o => o.city)

const upperCasingStates = (arr) =>
    arr.map(s => s.replace(/\b\w/g, c => c.toUpperCase()))

const fahrenheitToCelsius = (arr) =>
    arr.map(s => Math.floor((parseFloat(s) - 32) * 5 / 9) + '°C')

const trimTemp = (arr) =>
    arr.map(o => ({ ...o, temperature: o.temperature.replace(/\s/g, '') }))

const tempForecasts = (arr) =>
    arr.map(o => {
        const f = parseFloat(o.temperature.replace(/\s/g, ''))
        const c = Math.floor((f - 32) * 5 / 9)
        const state = o.state.replace(/\b\w/g, ch => ch.toUpperCase())
        return `${c}°Celsius in ${o.city}, ${state}`
    })
