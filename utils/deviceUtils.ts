export class DeviceUtils {
  static getDeviceType = function (ua) {
    let deviceType = 'unknown';

    if (/iPhone/.test(ua)) deviceType = 'iPhone';
    if (/iPad/.test(ua)) deviceType = 'iPad';
    if (/iPod/.test(ua)) deviceType = 'iPhone';
    if (/Android/.test(ua) || /android/.test(ua)) deviceType = 'Android';
    if (/webOS\//.test(ua)) deviceType = 'webOS';
    if (/(Intel|PPC) Mac OS X/.test(ua)) deviceType = 'Mac';
    if (/Windows NT/.test(ua)) deviceType = 'Windows';

    return deviceType;
  };
}
