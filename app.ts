import 'reflect-metadata'; // this shim is required
import { createKoaServer, useContainer as routingUseContainer, Controller } from 'routing-controllers';
import { useContainer as ormUseContainer, createConnection } from 'typeorm';
import { Container } from 'typedi';
import {User} from './app/models/user'
import currentUserChecker from './app/helpers/currentUserChecker'
import authorizationChecker from './app/helpers/authorizationChecker'

// config ioc container
routingUseContainer(Container);
ormUseContainer(Container);

// // init all db models
// createConnection().then(() => {

//   const app = createKoaServer({
//     controllers: [__dirname + '/app/apis/*.js'],
//     middlewares: [__dirname + '/lib/middlewares/*.js'],
//     defaultErrorHandler: false,
//     authorizationChecker: authorizationChecker,
//     currentUserChecker: currentUserChecker,
//   });

//   // start listen
//   const nodeEnv = process.env.NODE_ENV || 'development';
//   const port = process.env.PORT || 4001;

//   app.listen(port, () => console.log('server started， port ' + port + ' env ' + nodeEnv));

// }).catch(error => console.log('Error: ', error));


async function createConnServer() {
  await createConnection()

  const app = createKoaServer({
    controllers: [__dirname + '/app/apis/*.js'],
    middlewares: [__dirname + '/lib/middlewares/*.js'],
    defaultErrorHandler: true,
    authorizationChecker: authorizationChecker,
    currentUserChecker: currentUserChecker,
  });

  // start listen
  const nodeEnv = process.env.NODE_ENV || 'development';
  const port = process.env.PORT || 4001;

  app.listen(port, () => console.log('server started， port ' + port + ' env ' + nodeEnv));
}

try {
  createConnServer()
} catch(error) {
  console.log('Error: ', error)
}


