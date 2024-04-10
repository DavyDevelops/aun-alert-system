import express from 'express'
import dotenv from 'dotenv'
import './config/db.js'

const app = express()
dotenv.config({path: "./config/.env"})

app.listen(process.env.PORT, () => console.log('Server running on port 3000'))
