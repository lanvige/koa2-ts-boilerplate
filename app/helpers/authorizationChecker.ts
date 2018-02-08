import { Action } from 'routing-controllers';
import { User } from '../models/user';

async function authorizationChecker(action: Action, roles?: string[]) {
  // perform queries based on token from request headers
  // const token = action.request.headers["authorization"];
  // return database.findUserByToken(token).roles.in(roles);
  action.request.abc = "cccccccccc";
  return true;
}

export default authorizationChecker;
