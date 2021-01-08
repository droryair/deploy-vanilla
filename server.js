const express = require('express')
const Post = require('./server/modules/Post')
const axios = require('axios')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

mongoose.connect("mongodb://localhost/try-deploy", { useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.json())
app.use(express.static(path.join(__dirname,'src')))
app.use(express.static(path.join(__dirname,'node_modules')))
app.use(express.urlencoded({extended:false}))

app.get('/',function(req,res){
    res.send('all good')
})


app.get('/posts',async (req,res)=>{
    res.status(200).send(await Post.find({}))
})


app.post('/post',async (req,res)=>{
    const post = new Post(req.body)
    await post.save()
    res.status(200).send(post)
})


 const port = 3000
 app.listen(port,()=>{
     console.log(`listens to port ${port}`)
 })