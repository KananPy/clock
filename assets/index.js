const hours = document.querySelector('#hour')
const minutes = document.querySelector('#minute')
const seconds = document.querySelector('#second')


function saat(){
    const time = new Date()
    const hour = time.getHours()
    const minute = time.getMinutes()
    const second = time.getSeconds()


    hours.innerHTML = hour < 10 ? "0" + hour : hour;
    minutes.innerHTML = minute < 10 ? "0" + minute : minute;
    seconds.innerHTML = second < 10 ? "0" + second : second;

}

setInterval(saat, 1000)


