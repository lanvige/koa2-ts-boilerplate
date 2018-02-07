import { Inject, Service } from 'typedi';
import { JsonController, Param, Body, Get, Post, Put, Delete, UseInterceptor, Action, CurrentUser } from 'routing-controllers';
import { DataResult } from '../../lib/response/dataResult';
import { Context } from 'koa';
import { AuthService } from '../services/authService';
import { User } from '../models/user';
import { UserEntity } from '../entities/userEntity'
import { TokenEntity } from '../entities/tokenEntity'
import { ResponseStatus } from '../../lib/enum/responseStatus';


@JsonController('/api/v1')
@Service()
export class UserApi {

  @Inject()
  private authService: AuthService;

  @Post('/register')
  async register(@Body() req): Promise<DataResult<UserEntity>> {
    // 要校验用户的输入
    const name = req.name || null
    const password = req.password || null

    if (!name || !password) {
      return new DataResult(ResponseStatus.AccessDeny, 'woring', null)
    }

    const user = await this.authService.register(name, password);

    const userEntity = new UserEntity(user)

    return DataResult.ok<UserEntity>(userEntity);
  }

  @Post('/local/login')
  async login(@Body() req): Promise<DataResult<TokenEntity>> {
    // 要校验用户的输入
    const name = req.name || null
    const password = req.password || null

    if (!name || !password) {
      return new DataResult(ResponseStatus.AccessDeny, 'woring', null)
    }

    const user = await this.authService.login(name, password);

    // 这里应该返回 token
    const userEntity = new TokenEntity(user)
    return DataResult.ok<TokenEntity>(userEntity);
  }

  @Get('/wxlogin')
  async wxlogin(): Promise<DataResult<UserEntity>> {
    const name = '';
    const password = '';

    const user = await this.authService.wxlogin(name, password);

    // 这里应该返回 token
    const userEntity = new UserEntity(user)
    return DataResult.ok<UserEntity>(userEntity);
  }
}
