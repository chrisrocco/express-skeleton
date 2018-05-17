import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

/* LOAD ENVIRONMENT VALUES */
dotenv.config({ path: ".env" });

/* BOOTSTRAP THE APP */
const app = express()
app.set('port', process.env.PORT || 6000)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

export { app }
