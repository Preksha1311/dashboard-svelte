
import express from 'express'
import { config } from '../config/config';
const app = express()


app.get('/', (req, res) => {
    res.json({message : "hiiiii"})
})
app.listen(config.port, () => console.log(`Example app listening on port !`))

export default app
