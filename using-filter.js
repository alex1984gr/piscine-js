const filterShortStateName = (arr) => arr.filter(s => s.length < 7)

const filterStartVowel = (arr) => arr.filter(s => /^[aeiou]/i.test(s))

const filter5Vowels = (arr) => arr.filter(s => (s.match(/[aeiou]/gi) || []).length >= 5)

const filter1DistinctVowel = (arr) =>
    arr.filter(s => new Set(s.toLowerCase().match(/[aeiou]/g) || []).size === 1)

const multiFilter = (arr) =>
    arr.filter(o =>
        o.capital.length >= 8 &&
        !/^[aeiou]/i.test(o.name) &&
        /[aeiou]/i.test(o.tag) &&
        o.region !== 'South'
    )
