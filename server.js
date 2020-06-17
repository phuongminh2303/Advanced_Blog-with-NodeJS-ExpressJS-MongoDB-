const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const blogRoute = require('./app/routes/blog.route')
const dbConfig = require('./app/config/database.config')
app.use(bodyParser.json())
    // create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('views'));
app.set('view engine', 'ejs');
app.set('views', './views');
var engine = require('ejs-locals');
app.engine('ejs', engine);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
app.use('/', blogRoute)
app.listen(process.env.PORT || 3000, () => {
    console.log("The server is listening on port 3000");
})