const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const courses = require('./data/categories.json');
const courseDetails = require('./data/category_details.json');
const checkout = require('./data/category_details.json');

app.use(cors());

app.get('/', (req, res) =>{
    res.send('News API Running');
});

app.get('/courses', (req, res) =>{
    res.send(courses);
})

app.get('/course/:id', (req, res) =>{
    const id = req.params.id;
    const selectedCourse = courseDetails.find( n => n.category_id === id);
    res.send(selectedCourse);
   
})

app.get('/checkout/:id', (req, res) =>{
    const id = req.params.id;
    const selectedCourse = checkout.find( n => n._id === id);
    res.send(selectedCourse);
   
})

app.get('/coursedetails/:id', (req, res) =>{
    const id = req.params.id;
    const selectedCourse = courseDetails.find( n => n.category_id === id);
    res.send(selectedCourse);
   
})


app.listen(port, () =>{
    console.log('Courses Server running on port', port);
})