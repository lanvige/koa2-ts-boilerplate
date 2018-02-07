import 'reflect-metadata'; // this shim is required
import { createKoaServer, useContainer as routingUseContainer, Controller } from 'routing-controllers';
import { useContainer as ormUseContainer, createConnection } from 'typeorm';
import { Container } from 'typedi';

// config ioc container
routingUseContainer(Container);
ormUseContainer(Container);

// init all db models
createConnection().then(() => {

  const app = createKoaServer({
    controllers: [__dirname + '/app/apis/*.js'],
    middlewares: [__dirname + '/lib/middlewares/*.js'],
    defaultErrorHandler: false,
  });

  // start listen
  app.listen(process.env.PORT, () => console.log('server started， port ' + process.env.PORT + ' env ' + process.env.NODE_ENV));

}).catch(error => console.log('Error: ', error));
