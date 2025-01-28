// link on code wars = https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration(seconds) {
  let time = new Duration(seconds);
  let result = time.getResult();
  return result;
}

class Duration {
  constructor(duration) {
    this.duration = duration;
    this.years = null;
    this.days = null;
    this.hours = null;
    this.minutes = null;
    this.seconds = null;
    this.isFirst = true;
    this.isSecond = true;
  }
  getResult() {
    return this.humanReadableFormat();
  }
  humanReadableFormat() {
    if(this.duration === 0) return 'now';
    this.setDate();
    let result = this.getFormat();
    return result;
  }
  setDate() {
    this.getYearsCorrect();
    this.getDaysCorrect();
    this.getHoursCorrect();
    this.getMinutesCorrect();
    this.getSecondsCorrect();
  }
  getYearsCorrect() {
    let yearsToSeconds = 1 * 365 * 24 * 60 * 60;
    let result = this.duration / yearsToSeconds
    this.years = ( this.duration / yearsToSeconds < 1.0 ) ? 0 : parseInt(result);
    this.duration -= this.years * yearsToSeconds;
  }
  getDaysCorrect() {
    let daysToSeconds = 1 * 24 * 60 * 60;
    this.days = parseInt(this.duration / daysToSeconds);
    this.duration -= this.days * daysToSeconds;
  }
  getHoursCorrect() {
    let hoursToSeconds = 1 * 60 * 60;
    this.hours = parseInt(this.duration / hoursToSeconds);
    this.duration -= this.hours * hoursToSeconds;
  }
  getMinutesCorrect() {
    let minutesToSeconds = 1 * 60;
    this.minutes = parseInt(this.duration / minutesToSeconds);
    this.duration -= this.minutes * minutesToSeconds;
  }
  getSecondsCorrect() {
    this.seconds = this.duration;
    this.duration -= this.seconds;
  }
  getFormat() {
    let result = this.formatSeconds();
    result = this.formatMinutes() + result;
    result = this.formatHours() + result;
    result = this.formatDays() + result;
    result = this.formatYears() + result;
    return result;
  }
  formatSeconds() {
    if (this.seconds == null || this.seconds == 0) {
      return "";
    }
    let plural = this.pluralOrNo(this.seconds);
    let result = `${this.seconds} second` + plural;
    return result + this.getSeparator();
  }
  formatMinutes() {
    if (this.minutes == null || this.minutes == 0) {
      return "";
    }
    let plural = this.pluralOrNo(this.minutes);
    let result = `${this.minutes} minute` + plural;
    return result + this.getSeparator();
  }
  formatHours() {
    if (this.hours == null || this.hours == 0) {
      return "";
    }
    let plural = this.pluralOrNo(this.hours);
    let result = `${this.hours} hour` + plural;
    return result + this.getSeparator();
  }
  formatDays() {
    if (this.days == null || this.days == 0) {
      return "";
    }
    let plural = this.pluralOrNo(this.days);
    let result = `${this.days} day` + plural;
    return result + this.getSeparator();
  }
  formatYears() {
    if (this.years == null || this.years == 0) {
      return "";
    }
    let plural = this.pluralOrNo(this.years);
    let result = `${this.years} year` + plural;
    return result + this.getSeparator();
  }
  getSeparator() {
    if (this.isFirst) {
      this.isFirst = false;
      return "";
    }
    if (this.isSecond) {
      this.isSecond = false;
      return " and ";
    }
    return ", ";
  }
  pluralOrNo(time) {
    return time > 1 ? "s" : "";
  }
}

// console.log(formatDuration(3662));
// console.log(formatDuration(366));
console.log(formatDuration(206649)); // problem start form 31 to low
