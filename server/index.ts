import express from 'express';
import puppeteer from 'puppeteer';

const app = express();
const PORT = 4000;

app.get('/crawl', async (req, res) => {
  const url = req.query.url as string;
  if (!url) return res.status(400).send('URL is required');

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const links = await page.evaluate(() =>
    Array.from(document.querySelectorAll('a'))
      .map(a => a.href)
      .filter(href => href.startsWith(window.location.origin))
  );

  await browser.close();
  res.json({ url, links });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
