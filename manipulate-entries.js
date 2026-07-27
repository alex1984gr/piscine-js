const round1 = (n) => Math.round((n + Number.EPSILON) * 10) / 10

const filterEntries = (obj, fn) =>
    Object.fromEntries(Object.entries(obj).filter(fn))

const mapEntries = (obj, fn) =>
    Object.fromEntries(Object.entries(obj).map(fn))

const reduceEntries = (obj, fn, init) => {
    const entries = Object.entries(obj)
    return init !== undefined ? entries.reduce(fn, init) : entries.reduce(fn)
}

const totalCalories = (cart) =>
    round1(reduceEntries(cart, (acc, [name, grams]) => acc + nutritionDB[name].calories * grams / 100, 0))

const lowCarbs = (cart) =>
    filterEntries(cart, ([name, grams]) => nutritionDB[name].carbs * grams / 100 < 50)

const cartTotal = (cart) =>
    mapEntries(cart, ([name, grams]) => [
        name,
        mapEntries(nutritionDB[name], ([nutrient, per100]) =>
            [nutrient, round1(per100 * grams / 100)]
        )
    ])
