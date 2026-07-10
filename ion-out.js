function ionOut(str) {
    const regex = /\b\w*tion\w*\b/g;
    return (str.match(regex) || []).map(w => w.replace('ion', ''));
}