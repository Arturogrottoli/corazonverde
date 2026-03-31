const fs = require('fs');
const urls = ['https://ibb.co/vx2SwyLV', 'https://ibb.co/hJTvKs26', 'https://ibb.co/sZzNgQ5', 'https://ibb.co/Y44L5FH0'];
Promise.all(urls.map(u => fetch(u).then(r => r.text()).then(t => {
    const match = t.match(/<meta property=\"og:image\" content=\"([^\"]+)\"/);
    return match ? match[1] : '';
}))).then(links => {
    fs.writeFileSync('urls.txt', links.join('\n'));
});
