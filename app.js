const express = require('express');
const bodyParser = require('body-parser');
const referrerRoutes = require('./routes/referrer');
const studentRoutes = require('./routes/student');
const errorHandler = require('./middlewares/errorHandler');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');


const app = express();
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use(bodyParser.json());
app.use('/referrer', referrerRoutes);
app.use('/student', studentRoutes);

app.use(errorHandler);

module.exports = app;
