
//Iteration1

class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }

  startClick(callback) {
    //increment this.currentTime + 1;
    let ourFunction = () => {
      this.currentTime += 1
    }

    this.Interval = setInterval(ourFunction, 1000)
  }


  getMinutes() {

    return Math.floor(this.currentTime / 60)
                // let minCntr = () => {
                //   if (this.currentTime == 60) {
                //     minCntr++;
                //     this.currentTime == 0;    
                //   }   
                //   if (this.currentTime > 60) {
                //     //counting minutes when sec>60
                //     minCntr += Math.floor(this.currentTime/60);
                //   }
                // }
                // return minCntr
  }


  getSeconds() {
    //counting seconds when sec>60 && sec%60!=0
    //   let secCnrt = () => {
    //     Math.ceil(this.currentTime%60);
    //   }
    //   return secCntr
    let seconds = this.currentTime - (this.getMinutes() * 60)
    return seconds
  }


  twoDigitsNumber(number) {
    if (number < 10)
      return "0" + number
    else {
      return number.toString()
    }
  }

  stopClick() {
    clearInterval(this.intervalId)
  }

  resetClick() {
    this.currentTime = 0
  }

  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}





















