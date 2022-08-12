$(document).ready(function(){
    const delayRun = (waitSeconds, someFunction) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(someFunction())
            }, waitSeconds)
        })	
    }

    function format(number) {
        if(number < 10){
            return number = "0" + number
        } else {
            return number
        }
    }

  setInterval(() => {
     const day = new Date().toLocaleString('ja-JP')
     
  

     
     const date = `${new Date().getFullYear()}${format(new Date().getMonth() + 1)}${Number(format(new Date().getDate().toString().slice(-2)))}/${new Date().getFullYear()}${format(new Date().getMonth() + 1)}${format(Number(new Date().getDate().toString().slice(-2)))}${format(new Date().getHours())}${format(new Date().getMinutes())}${format(new Date().getSeconds())}`
      const path = `http://www.kmoni.bosai.go.jp/data/map_img/RealTimeImg/acmap_s/${date}.acmap_s.gif`

    delayRun(2000,run)


    function run(){
     $("#gal").attr('src',path)
    }
     console.log(path)
  },1000)
})