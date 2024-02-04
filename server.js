if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')


app.set('view engine', 'ejs')//setting view engine
app.set('views', __dirname + '/views')//from where our veiw is coming
app.set('layout', 'layouts/layout')//setting layout
app.use(expressLayouts)//telling vs to we are using express layouts
app.use(express.static('public'))//telling vs to where our public files like styles css ..

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection 
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to the Database'))


app.use('/',indexRouter)

app.listen(process.env.PORT || 3000)
