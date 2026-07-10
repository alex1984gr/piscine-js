function getURL(dataSet) {
    const regex = /https?:\/\/[^\s]+/g;
    return dataSet.match(regex) || [];
}

function greedyQuery(dataSet) {
    const urls = getURL(dataSet);
    return urls.filter(url => {
        const query = url.split('?')[1];
        if (!query) return false;
        return query.split('&').length >= 3;
    });
}

function notSoGreedy(dataSet) {
    const urls = getURL(dataSet);
    return urls.filter(url => {
        const query = url.split('?')[1];
        if (!query) return false;
        const params = query.split('&').length;
        return params >= 2 && params <= 3;
    });
}