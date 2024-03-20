const express =require('express')
const app = express()
const port = 3000

app.get('/vann',(req,res) => {
    console.log('woyyy')
    res.send('hallo ini web afan')
})

app.listen(port, () => {
    console.log('nyambung nyet')
})

