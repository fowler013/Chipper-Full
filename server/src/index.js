// this will  be running through babel//
import 'babel-polyfill';
import {join} from 'path'; //this is object detrucing//
import express from 'express';
import routes from './routes'
import morgan from 'morgan';
import stateRouting from './middleware/routing.mw';
const CLIENT_PATH = join(__dirname, '../../client') //this is because we all pulled in join from the path module//

let app = express()
app.use(morgan('dev'));
app.use(express.static(CLIENT_PATH)) // express is going to look in the client folde for a file called//
app.use(express.json()); // this is a  API server to allow users to interact with GEY POST PUT DELETE//

app.use(express.urlencoded({ extended: false}));
app.use('/api', routes) // pass /api through routes//

app.use(stateRouting); //this is the middleware routing// //I NEED THIS IN MY FILE//

let port = process.env.PORT || 3000; // this is my fallback value//
app.listen(port,()=> {
    console.log(`server listening of port ${port}`)
})