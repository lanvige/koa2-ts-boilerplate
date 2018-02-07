import { getConnection, getConnectionManager } from 'typeorm';
import { JsonController, Param, Body, Get, Post, Put, Delete, UseInterceptor, Action, HeaderParam } from 'routing-controllers';
import { Inject, Service } from 'typedi';
import { Context } from 'koa';
import { DBError } from '../../lib/errors/dbError';
import { HealthCheckError } from '../../lib/errors/healthCheckError';

@JsonController()
@Service()
export class HealthApi {

  @Get('/api/v1/healthz/')
  health(): string {
    return 'success';
  }

  @Get('/api/v1/info/')
  async info(@HeaderParam('token') token: string) {
    const sql = 'SELECT 1 from tms_tasks limit 1;';
    return getConnection().query(sql);
  }
}
