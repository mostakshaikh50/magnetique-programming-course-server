const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
//const news = require('./data/news.json');

app.use(cors());

app.get('/', (req, res) =>{
    res.send('News API Running');
});

app.get('/courses-categories', (req, res) =>{
    res.send(categories);
})

// app.get('/news', (req, res) =>{
//     res.send(news);
// })


app.listen(port, () =>{
    console.log('Magnetique Courses Server running on port', port);
})