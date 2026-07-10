function findIP(str) {
    const octet = '(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])';
    const ip = `${octet}\\.${octet}\\.${octet}\\.${octet}`;
    const port = '(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[0-9]{1,4})';
    const regex = new RegExp(`(?<![\\d.])${ip}:${port}(?![\\d.])|(?<![\\d.:])${ip}(?![\\d.:])`, 'g');
    return str.match(regex) || [];
}
