import express from 'express';
import router from './router.js';
import path from 'path';
const __dirname = path.resolve();

const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/client');

router(app);

app.listen(40522, function () {
  console.log('good start');
});
