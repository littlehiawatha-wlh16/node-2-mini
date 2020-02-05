let books = []
let id = 0


module.exports = {
   read: (req, res) => {
      res.status(200).send(books)
   },

   create: (req, res) => {
      //axios.post('/api/books', {title: 'LOTR', author: 'JRR'} )
      const {title, author} = req.body

      let newBook = {
         title: title,
         author: author,
         id: id
      }
      books.push(newBook)
      id++
      res.status(200).send(books)
   },

   update: (req, res) => {
      // let index = null
      // books.forEach((book, i) => {
      //    if(books.id === +req.params.id) index = i
      // })

      let index= books.findIndex(book => book.id === +req.params.id) 

      books[index] = {
         id: books[index].id,
         title: req.body.title || books[index].title,
         author: req.body.author || books[index].author
      }

      res.status(200).send(books)
   },

   delete: (req, res) => {
      let index = null;
      books.forEach((book, i) => {
         if(book.id === +req.params.id) index = i         
      })
      books.splice(index,1)
      res.status(200).send(books)
   }

}


