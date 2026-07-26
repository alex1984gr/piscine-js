export const getArchitects = () => {
    const all = Array.from(document.querySelectorAll('li'))
    return [
        all.filter(el => el.querySelector('a') !== null),
        all.filter(el => el.querySelector('a') === null),
    ]
}

export const getClassical = () => {
    const architects = getArchitects()[0]
    return [
        architects.filter(el => el.classList.contains('classical')),
        architects.filter(el => !el.classList.contains('classical')),
    ]
}

export const getActive = () => {
    const classical = getClassical()[0]
    return [
        classical.filter(el => el.querySelector('a:not(.inactive)') !== null),
        classical.filter(el => el.querySelector('a.inactive') !== null),
    ]
}

export const getBonannoPisano = () => {
    const active = getActive()[0]
    const bonanno = document.getElementById('BonannoPisano')
    return [
        bonanno,
        active.filter(el => el.id !== 'BonannoPisano'),
    ]
}
