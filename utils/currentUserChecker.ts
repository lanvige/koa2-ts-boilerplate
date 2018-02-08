import { Action } from 'routing-controllers';
import * as jwt from 'jsonwebtoken';
import { User } from '../app/models/user';

async function currentUserChecker(action: Action, value?: any) {
  // perform queries based on token from request headers
  // const token = action.request.headers["authorization"];
  const auth = action.request.headers["authorization"];
  const token = auth.slice(7);
  let decoded = jwt.verify(token, 'secret');
  console.log(decoded)

  // return database.findUserByToken(token);
  const user = new User();
  user.id = 1;
  user.name = "fdasfa";

  return user;
}

export default currentUserChecker;
