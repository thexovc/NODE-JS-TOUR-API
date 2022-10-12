const dotenv = require('dotenv')
const mongoose = require('mongoose')
const app = require('./app')

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE_LOCAL

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
}).then((con) => {
    // console.log(con.connections);
    console.log("DB Connection Success~")
})

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    }
})

const Tour = mongoose.model('Tour', tourSchema)

const testTour = new Tour({
    name: "Hammering ",
    rating: 4.7,
    price: 875
})

testTour.save().then(doc => {
    console.log(doc)
}).catch(err => {
    console.log(err)
})


const port = process.env.PORT || 3005
app.listen(port, () => {
    console.log("App running on port", port)
})



