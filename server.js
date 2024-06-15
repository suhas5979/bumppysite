// server.js
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Set cache headers for static assets
  server.use('/_next/static', express.static('.next/static', { maxAge: '365d' }));
  /*
  server.get('/:slug', (req, res) => {
    const actualPage = '/[slug]';
    const queryParams = { slug: req.params.slug };
    app.render(req, res, actualPage, queryParams);
  });
  */

  // Handle other routes
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
