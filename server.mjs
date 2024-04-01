import express from 'express'
import cors from "cors"
import {getEmotion} from './data/send.mjs'

const app = express()

app.use(cors())

function respond(req, res) {
  res.send('Hello, world!')
}

app.get('/', (req, res) => {
    const emotionData = getEmotion()
    //console.log('>>>' + JSON.stringify(emotionData))
    res.json(emotionData)
    console.log("test" + emotionData)
})

app.listen(3000, () => {
    console.log('Listening at http://localhost:3000/')// Confirmation the server is running
})

app.get('/buttonPressed', (req, res) => {
  // Perform the action you want upon button press
  console.log('Button was pressed!');
  // This could be emitting to sockets, updating a database, etc.
  res.status(200).send('Button press acknowledged');
});
