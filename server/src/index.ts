import express from 'express';
import cors from 'cors';
import https from 'https'
import fs from 'fs'
import cookieParser from 'cookie-parser'
import controllers from './controller'
const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(cookieParser())

app.get('/user/my-post', controllers.myPost);

app.post('/signup', controllers.signup);
app.post('/login', controllers.login);
app.post('/logout', controllers.logout);

app.delete('/signout', controllers.signout);

const HTTPS_PORT = process.env.HTTPS_PORT || 8080

let server;
if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
    const privateKey = fs.readFileSync('./key.pem', 'utf8')
    const certificate = fs.readFileSync('./cert.pem', 'utf8')
    const credentials = { key: privateKey, cert: certificate }

    server = https.createServer(credentials, app)
    server.listen(HTTPS_PORT, () => console.log('https server runnning'))
} else {
    server = app.listen(HTTPS_PORT, () => console.log('http server runnning'))
}
module.exports = server;
