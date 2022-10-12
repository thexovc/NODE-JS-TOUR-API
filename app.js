const express = require('express')
const morgan = require('morgan')

const app = express()
const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

// middlewares

app.use(morgan('dev'))
app.use(express.json())
app.use(express.static(`${__dirname}/public`))


// this middleware applys to each and every request after it when route is not specified
app.use((req, res, next) => {
    console.log("Hello From the middle ware 🤞");
    next()
})

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next()
})



// routes handlers

// route

// app.get('/api/v1/tours', getAllTours)
// app.get('/api/v1/tours/:id', getTour)
// app.post('/api/v1/tours', createTour)
// app.patch('/api/v1/tours/:id', updateTour)
// app.delete('/api/v1/tours/:id', deleteTour)


// ROUTES
app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)


// server


const port = 3000
app.listen(port, () => {
    console.log("App running on port", port, "...")
})

module.exports = app