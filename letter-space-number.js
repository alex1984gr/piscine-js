function letterSpaceNumber(str) {
    const regex = /[a-zA-Z] \d(?![a-zA-Z\d])/g;
    return str.match(regex) || [];
}