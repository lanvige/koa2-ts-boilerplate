import * as md5 from 'md5';

export class CryptoUtils{
  static md5(secret, params) {
    let val = '';
    for (let i = 0, len = params.length; i < len; i += 1) {
      val = `${val + params[i].key}=${params[i].value}&`;
    }
    val = val.slice(0, -1) + secret;
    return md5(val);
  };
}
