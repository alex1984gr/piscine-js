const hasCity = (country, cities) => city =>
    `${city} is${cities.includes(city) ? '' : ' not'} a city from ${country}`
