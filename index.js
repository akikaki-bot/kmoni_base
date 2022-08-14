$(document).ready(function(){

    /***
     * @param waitSeconds - MillSeconds
     * @param someFunction - SomeFunction
     */
    const delayRun = (waitSeconds, someFunction) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(someFunction())
            }, waitSeconds)
        })	
    }

    /**
     * 
     * @param {*} number 
     * @returns 0 + 1
     */
    function format(number) {
        if(number < 10){
            return number = "0" + number
        } else {
            return number
        }
    }

  setInterval(() => {
     
     const date = `${new Date().getFullYear()}${format(new Date().getMonth() + 1)}${Number(format(new Date().getDate().toString().slice(-2)))}/${new Date().getFullYear()}${format(new Date().getMonth() + 1)}${format(Number(new Date().getDate().toString().slice(-2)))}${format(new Date().getHours())}${format(new Date().getMinutes())}${format(new Date().getSeconds())}`
     const time = `〈${format(new Date().getMonth() + 1)}/${Number(format(new Date().getDate().toString().slice(-2)))}〉${format(new Date().getHours())}:${format(new Date().getMinutes())}.${format(new Date().getSeconds())}`
     
     //Images - RealTimeGal
     const path = `http://www.kmoni.bosai.go.jp/data/map_img/RealTimeImg/acmap_s/${date}.acmap_s.gif`
     //Images - RealTimePSWave
      const ps_wave = `http://www.kmoni.bosai.go.jp/data/map_img/PSWaveImg/eew/${date}.eew.gif`
     //Images - RealTime Suitei_sindo
    const suitei_sindo = `http://www.kmoni.bosai.go.jp/data/map_img/EstShindoImg/eew/${date}.eew.gif`

    delayRun(2000,run)

    //Time
    $("#n").text(time)

    function run(){
     $("#gal").attr('src',path)
     $("#ps_wave").attr('src',ps_wave)
     $("#suitei_sindo").attr('src',suitei_sindo)
    }
     console.log(path)
  },1000)
})