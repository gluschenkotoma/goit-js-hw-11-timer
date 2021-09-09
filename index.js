

class CountdownTimer {
  refs = {
  clock: document.getElementById('timer-1'),
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
};

  constructor({selector, targetDate}={}){
    this.selector = selector;
    this. targetDate = targetDate;
    this.timerId = null;
    
  }


  // вычисляю разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
start(){
this.timerId = setInterval(()=>{
const totalTimeLeft = this.targetDate - new Date;
const time = this.getTimeComponents(totalTimeLeft);
this.updateCountdown(time)
})
}
stop(){
  if(totalTimeLeft <= 0){
   clearInterval(timerId);

 }
}
//  выщитываю количество дней, часов, минут и секунд
 
  getTimeComponents(totalTimeLeft){
    
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((totalTimeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((totalTimeLeft % (1000 * 60)) / 1000);
    return {days, hours, mins, secs};
  };
  

  //  добавляю значения таймера в разметку
updateCountdown({days, hours, mins, secs}){
  refs.days.textContent = `${days}` < 10 ? '0' + `${days}` : `${days}`;
  refs.hours.textContent = `${hours}` < 10 ? '0' + `${hours}` : `${hours}`;
  refs.mins.textContent = `${mins}` <10 ? '0' + `${mins}` : `${mins}`;
  refs.secs.textContent = `${secs}` < 10 ? '0' + `${secs}` :`${secs}`;
}
 

}

const countdownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate:new Date('Nov 20, 2021'),
  });


 


