const app = require('./app')
const port = 3000
const cors = require("cors")

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})

app.use(cors())
