import app from './App'

const port = process.env.PORT || 80;

app.listen(port, (err:any) => {
    if (err) {
        return console.log(err)
    }

    return console.log(`server is listening on ${port}`)
});