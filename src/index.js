import express from 'express';
import {bootstrap as bootstrapRoutes} from './app/routes/index';
import bootstrapExpress from './config/express'
import config from './config/index';

const app = express();

bootstrapExpress(app, config);
bootstrapRoutes(app, config);

app.listen(config.port, (err) => {
    if (err) console.error(err);
    else console.log(`Server running on port: ${config.port}`);
});