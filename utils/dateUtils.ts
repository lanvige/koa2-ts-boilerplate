

export class DateUtils {
  /**
   * @param date
   * @param style  'yyyy-MM-dd mm:hh' OR 'yyyy/MM/dd mm/hh')
   * @returns {string|XML}
   */
  static formatDate = function (date, style) {
    const y = date.getFullYear();
    let M = `0${date.getMonth() + 1}`;
    M = M.substring(M.length - 2);
    let d = `0${date.getDate()}`;
    d = d.substring(d.length - 2);
    let h = `0${date.getHours()}`;
    h = h.substring(h.length - 2);
    let m = `0${date.getMinutes()}`;
    m = m.substring(m.length - 2);
    let s = `0${date.getSeconds()}`;
    s = s.substring(s.length - 2);
    return style.replace('yyyy', y)
      .replace('MM', M)
      .replace('dd', d)
      .replace('HH', h)
      .replace('mm', m)
      .replace('ss', s);
  };

  static add = function (now: Date, obj: any) {
    if (obj.milliseconds !== undefined) {
      now.setMilliseconds(now.getMilliseconds() + obj.milliseconds);
    }
    if (obj.seconds !== undefined) {
      now.setSeconds(now.getSeconds() + obj.seconds);
    }
    if (obj.minutes !== undefined) {
      now.setMinutes(now.getMinutes() + obj.minutes);
    }
    if (obj.hours !== undefined) {
      now.setHours(now.getHours() + obj.hours);
    }
    if (obj.days !== undefined) {
      now.setDate(now.getDate() + obj.days);
    }
    if (obj.weeks !== undefined) {
      now.setDate(now.getDate() + (obj.weeks * 7));
    }
    if (obj.months !== undefined) {
      now.setMonth(now.getMonth() + obj.months);
    }
    if (obj.years !== undefined) {
      now.setFullYear(now.getFullYear() + obj.years);
    }
    return now;
  };
}
