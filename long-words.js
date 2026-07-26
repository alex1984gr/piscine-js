const longWords = (arr) => arr.every(s => s.length >= 5)

const oneLongWord = (arr) => arr.some(s => s.length >= 10)

const noLongWords = (arr) => !arr.some(s => s.length >= 7)
