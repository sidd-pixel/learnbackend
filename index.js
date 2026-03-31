require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/linkedin',(req,res)=>{
    res.send('This is my LinkedIn profile: https://www.linkedin.com/in/siddhantthakur/')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login into my website</h1> ')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>chai aur code</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
