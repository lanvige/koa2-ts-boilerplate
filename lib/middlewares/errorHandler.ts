import { KoaMiddlewareInterface, Middleware, NotAcceptableError } from 'routing-controllers';

@Middleware({ type: 'before' })
export class ErrorHandler implements KoaMiddlewareInterface { // interface implementation is optional

  async use(ctx: any, next: (err?: any) => Promise<any>): Promise<any> {
    // next() 就是执行 api/controller 中的代码
    return next().catch((error) => {
      console.error(error);
      // next(error);
      // throw error
      // ctx.state=200
      // ctx.body = 'fdsa'
      // throw new NotAcceptableError("Custom Error");
    });
  }
}
