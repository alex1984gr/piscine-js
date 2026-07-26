import { styles } from './pimp-my-style.data.js'

let index = 0
let removing = false

export const pimp = (e) => {
    const btn = e.currentTarget

    if (!removing) {
        btn.classList.add(styles[index])
        index++
        if (index === styles.length) {
            btn.classList.toggle('unpimp')
            removing = true
        }
    } else {
        index--
        btn.classList.remove(styles[index])
        if (index === 0) {
            btn.classList.toggle('unpimp')
            removing = false
        }
    }
}
