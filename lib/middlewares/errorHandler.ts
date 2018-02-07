import { KoaMiddlewareInterface, Middleware } from 'routing-controllers';

@Middleware({ type: 'before' })
export class ErrorHandler implements KoaMiddlewareInterface { // interface implementation is optional

  use(ctx: any, next: (err?: any) => Promise<any>): Promise<any> {
    return next().catch((error) => {
      console.error(error);
    });
  }

}
