export const getArchitects = () => {
    const architects = Array.from(document.querySelectorAll('a'))
    const nonArchitects = Array.from(document.querySelectorAll('span'))
    return [architects, nonArchitects]
}

export const getClassical = () => {
    const architects = Array.from(document.querySelectorAll('a'))
    return [
        architects.filter(el => el.classList.contains('classical')),
        architects.filter(el => !el.classList.contains('classical')),
    ]
}

export const getActive = () => {
    const classical = Array.from(document.querySelectorAll('a.classical'))
    return [
        classical.filter(el => el.classList.contains('active')),
        classical.filter(el => !el.classList.contains('active')),
    ]
}

export const getBonannoPisano = () => {
    const active = Array.from(document.querySelectorAll('a.classical.active'))
    const bonanno = document.getElementById('BonannoPisano')
    return [
        bonanno,
        active.filter(el => el.id !== 'BonannoPisano'),
    ]
}
