const express = require('express')
const router = express.Router()
const path = require('path')
const url = require('url')
const cors = require('cors')
const { response } = require('express')

const port = 8080;

const app = express()

app.use(express.static(path.join('.','/')))

app.get('/name',(req,res) => {
    res.writeHead(200);
    res.end('my name is chedvi')
})

app.get('/datetime',(req,res) => {
    res.writeHead(200);
    res.end(`the datetime ${new Date()}`)
})

app.get('/add',(req,resp) => {
    const a = Number(req.query.a)
    const b = Number(req.query.b)

    if (isNaN(a)) {
        resp.writeHead(400)
        resp.end(`${req.query.a} is not a number`)
        return
    }
    if (isNaN(b)) {
        resp.writeHead(400)
        resp.end(`${req.query.b} is not a number`)
        return
    }

    if (a > b) {
    resp.writeHead(200)
    resp.end(`<h1>${a} > ${b} = ${a > b}</h1>`)
    return
}
else if (a < b) {
    resp.writeHead(200)
    resp.end(`<h1>${a} < ${b} = ${a < b}</h1>`)
    return
}
else  {
    resp.writeHead(200)
    resp.end(`<h1>${a} = ${b} = ${a = b}</h1>`)
    return
}
})

app.get('/targil',(req,resp) => {

    const a = Number(req.query.a)
    const b = Number(req.query.b)
    const sum = Number(req.query.sum)

      if (isNaN(a)) {
        resp.writeHead(400)
        resp.end(`${req.query.a} is not a number`)
        return
    }
    if (isNaN(b)) {
        resp.writeHead(400)
        resp.end(`${req.query.b} is not a number`)
        return
    }
    if (isNaN(sum)) {
        resp.writeHead(400)
        resp.end(`${req.query.sum} is not a number`)
        return
    }
    if (a + b == sum) {
        resp.sendFile(path.join('/correct.html'))
        return
    }
    else{
        resp.sendFile(path.join('/wrong.html'))
        return   
    }
})

app.get('/targil/:a/:b/:sum', (req, resp) => {
    

    console.log(req.url);
    console.log(req.query);

    const a = Number(req.params.a)
    const b = Number(req.params.b)
    const sum = Number(req.params.sum)

    if (isNaN(a)) {
        resp.writeHead(400)
        resp.end(`${req.params.a} is not a number`)
        return
    }
    if (isNaN(b)) {
        resp.writeHead(400)
        resp.end(`${req.params.b} is not a number`)
        return
    }
    if (isNaN(sum)) {
        resp.writeHead(400)
        resp.end(`${req.params.sum} is not a number`)
        return
    }

    if (a + b == sum) {
        resp.sendFile(path.join('/correct.html'))
        return
    }
    else{
        resp.sendFile(path.join('/wrong.html'))
        return   
    }
    
})

app.get('/trgilbody', (req, resp) => {
    // http://localhost:8080/ add /3/4

    console.log(req.url);
    console.log(req.query);
    console.log(req.body);

    const a = Number(req.body.a)
    const b = Number(req.body.b)
    const sum = Number(req.body.sum)

    if (isNaN(a)) {
        resp.writeHead(400)
        resp.end(`${req.body.a} is not a number`)
        return
    }
    if (isNaN(b)) {
        resp.writeHead(400)
        resp.end(`${req.body.b} is not a number`)
        return
    }
    if (isNaN(sum)) {
        resp.writeHead(400)
        resp.end(`${req.body.sum} is not a number`)
        return
    }

    if (a + b == sum) {
        resp.sendFile(path.join('/correct.html'))
        return
    }
    else{
        resp.sendFile(path.join('/wrong.html'))
        return   
    }
})


app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})