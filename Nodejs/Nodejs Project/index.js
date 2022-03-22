const express = require('express');
const app = express();

app.use(express.static('image'));
app.set('view engine','ejs');

app.get('/',(req,res) => {
    res.render('home');
});

app.get('/about',(req,res) => {
    res.send("About Page");
});

app.get('/api',(req,res)=> {
    res.json({
            name: "Sri",
            class: "ECE"
        });
});

app.listen(3000); 