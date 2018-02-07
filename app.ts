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
  const nodeEnv = process.env.NODE_ENV || 'development';
  const port = process.env.PORT || 4001;

  app.listen(port, () => console.log('server started， port ' + port + ' env ' + nodeEnv));

}).catch(error => console.log('Error: ', error));
