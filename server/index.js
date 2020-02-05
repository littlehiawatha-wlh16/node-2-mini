const express = require('express')
const bc = require('./controllers/book_controller')


const app = express()

app.use(express.json())

app.get('/api/books', bc.read)
app.post('/api/books', bc.create)
app.put('/api/books/:id', bc.update)
app.delete('/api/books/:id', bc.delete)


let PORT = 4000

app.listen(PORT, () => {
   console.log(`Server running on ${PORT}`)
})


// //----------------------Hypothetical Example of Controllers ??-----------------------// //
// app.get('/api/users', ctrl.handlerFunction)
// app.get('/api/users/:id', ctrl.handlerFunction2)

// app/listen(4040, () => {console.log(`The Port is running on port 4040`)})