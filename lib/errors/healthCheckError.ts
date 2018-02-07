import { HttpError } from 'routing-controllers';

export class HealthCheckError extends HttpError {

  constructor() {
    super(401);
    Object.setPrototypeOf(this, HealthCheckError.prototype);
  }

  toJSON() {
    return [{
      Success: false,
      ErrorMessage: 'Invalid monitor token!',
      Name: 'Monitor Token',
    }];
  }
}
