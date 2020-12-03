

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
 
 
const app = express();
 
app.set('view engine','ejs');
// if your views were stored else where you would put 
app.set('views','views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use('/',(req,res,next) => {
    
res.status(404).render('404',{pageTitle:"Page Not Found", path: false});
});




app.listen(3000);
