import cheerio from 'cheerio';

import fs from 'fs';

const html = fs.readFileSync('dist/index.html', { encoding: 'utf8' });

const $ = cheerio.load(html);

$('#import-script').before('<script src="app.min.js"></script>');

fs.writeFileSync('dist/index.html', $.html());


