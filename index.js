const express = require('express');

const path = require('path');
const app = express();


app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) =>{
    res.render("indexAP");
});

app.listen(4000,()=>{
    console.log("Server is running at port 4000");
})