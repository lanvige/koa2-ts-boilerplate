export class StringUtils {
  static isNullOrUndefined (obj) {
    return obj === null || obj === undefined;
  }

  static trim (str) {
    return str.replace(/(^\s*)|(\s*$)/g, '');
  }

  static format (...args) {
    if (args.length === 0) { return null; }

    let str = args[0];
    for (let i = 1; i < arguments.length; i += 1) {
      const re = new RegExp(`\\{${i - 1}\\}`, 'gm');
      str = str.replace(re, args[i]);
    }
    return str;
  }
}
