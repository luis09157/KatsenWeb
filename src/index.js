import app from './app.js'
import {PORT} from './config.js'

app.listen(PORT);
console.log("Run server in port: ",PORT);