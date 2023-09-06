class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if(printTimeCallback){
        printTimeCallback();
      }
    },10);

  
  }

  getMinutes() {
    return Math.floor(this.currentTime/6000);
  }

  getSeconds() {
    return (this.currentTime/100)%60;
  }

  getCentiseconds() {
    return (this.currentTime%100);
  }

  computeTwoDigitNumber(value) {
    let strValue = value.toString();
    return strValue.length === 1? '0' + strValue: strValue;
  }

  stop() {
    clearInterval(this.intervalId);
    
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());

    return `${minutes}:${seconds}.${centiseconds}`;
  
  }}
