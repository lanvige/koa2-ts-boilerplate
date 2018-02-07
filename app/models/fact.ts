import * as Versioning from 'versioning';

export class Fact {
  appId: number;
  version?: Versioning;
  channel?: string;
  platform?: string;

  constructor(
    appId: number = 1,
    version: Versioning = undefined,
    channel: string = undefined,
    platform: string = undefined) {
    this.appId = appId;
    this.version = version;
    this.channel = channel;
    this.platform = platform;
  }
}
