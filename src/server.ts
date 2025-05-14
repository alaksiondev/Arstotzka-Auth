import app from './app'

const port = 3030

app.listen(port, () => {
    return console.log(`Server listening on port:${port}`)
})