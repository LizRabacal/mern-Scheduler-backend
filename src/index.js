const express = require('express');
var cors = require('cors')

const app = express();
require('./Config/dbconfig');
const routes = require('./routes');
app.use(cors())
app.use(express.json())
app.use(routes);
app.listen(5000)