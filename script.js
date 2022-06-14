

var hour=document.querySelector('.hour')
var minutes=document.querySelector('.minute')
var seconds=document.querySelector('.seconds')
var digital=document.querySelector('.digital')

var hourInput=document.querySelector('.hourInput')
var minutesInput=document.querySelector('.minutesInput')
var secondsInput=document.querySelector('.secondInput')

const clockFunction=()=>{
    var date=new Date()
      var h=date.getHours()
      var m=date.getMinutes()
      var s=date.getSeconds()
  
      const hourRotation=30*h+m/2
      const minutesRotation=6*m
      const secondRotation=6*s

      hour.style.transform=`rotate(${hourRotation}deg)`
      minutes.style.transform=`rotate(${minutesRotation}deg)`
      seconds.style.transform=`rotate(${secondRotation}deg)`

    if(h>12){
        h=h-12
    }
      digital.innerHTML=`<h1>${h} : ${m} : ${s}</h1>`

 }
 const interval=setInterval(clockFunction,1000)
 const change=()=>{
    clearInterval(interval)

    const newClockFunc=()=>{
        var date=new Date()
        
          date.setHours(parseInt(hourInput.value))
          date.setMinutes(parseInt(minutesInput.value))
          date.setSeconds(date.getSeconds()+parseInt(secondsInput.value))

          var h=date.getHours()
          var m=date.getMinutes()
          var s=date.getSeconds()
      
          const hourRotation=30*h+m/2
          const minutesRotation=6*m
          const secondRotation=6*s
    
          hour.style.transform=`rotate(${hourRotation}deg)`
          minutes.style.transform=`rotate(${minutesRotation}deg)`
          seconds.style.transform=`rotate(${secondRotation}deg)`
    
        if(h>12){
            h=h-12
        }
          digital.innerHTML=`<h1>${h} : ${m} : ${s}</h1>`
    
     }
     setInterval(newClockFunc,1000)
 }