import { Action } from 'routing-controllers';
import { User } from '../models/user';
import * as jwt from 'jsonwebtoken';

async function authorizationChecker(action: Action, roles?: string[]) {
  // perform queries based on token from request headers
  // const token = action.request.headers["authorization"];
  // return database.findUserByToken(token).roles.in(roles);
  action.request.testfiled = "testvalue";

  try {
    const auth = action.request.headers["authorization"];
    const token = auth.slice(7);
    let decoded = jwt.verify(token, 'secret');
    console.log(decoded)
  } catch {
    return false;
  }

  return true;
}

export default authorizationChecker;
