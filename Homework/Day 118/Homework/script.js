const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;


app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1><p>Welcome to the about page.</p>');
});


app.get('/homepage', (req, res) => {
  res.send(`
    <h1>Homepage</h1>
    <p>Welcome to the homepage.</p>
    <a href="/about">Go to About Page</a><br>
    <a href="/random-files">View Random Files</a>
  `).end();
});


const phrases = ["გამარჯობა", "სალამი", "როგორ ხარ", "სასიამოვნოა", "ნახვამდის"];

for (let i = 1; i <= 20; i++) {
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  fs.writeFileSync(path.join(__dirname, `file${i}.txt`), randomPhrase);
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
