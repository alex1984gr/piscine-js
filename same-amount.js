function sameAmount(str, regex1, regex2) {
    const count = (re) => {
        const flags = re.flags.includes('g') ? re.flags : re.flags + 'g';
        const globalRe = new RegExp(re.source, flags);
        return (str.match(globalRe) || []).length;
    };
    return count(regex1) === count(regex2);
}
