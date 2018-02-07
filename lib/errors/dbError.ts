import { HttpError } from 'routing-controllers';
import { MysqlConnectionCredentialsOptions } from 'typeorm/driver/mysql/MysqlConnectionCredentialsOptions';

export class DBError extends HttpError {
  private err: Error;
  private options: MysqlConnectionCredentialsOptions;

  constructor(err: Error, options: MysqlConnectionCredentialsOptions) {
    super(500);
    Object.setPrototypeOf(this, DBError.prototype);
    this.err = err;
    this.options = options;
  }

  toJSON() {
    return [{
      Success: false,
      ErrorMessage: this.err.message,
      Name: 'MySql',
      Host: `${process.env.NODE_ENV || 'development'}__db:${this.options.port}`,
    }];
  }
}
