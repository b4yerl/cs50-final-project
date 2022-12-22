function main() {
  const btn = document.querySelector('.btn')
  btn.addEventListener('click', () => {
    if(btn.innerHTML== 'START') {
      startTimer();
      btn.innerHTML = 'STOP'
    }
    else {
      location.reload();
    }
  })
}

function startTimer() {
  let counter = 0;
  let minutes = 24;
  let seconds = 59;
  const alarm = new Audio('./alarm.mp3');

  document.querySelector('#tracker').innerHTML = 'Pomodoro!!!';
  document.querySelector('#minutes').innerHTML = minutes;
  document.querySelector('#seconds').innerHTML = seconds;

  let minutesInterval = setInterval(minutesCounter, 60000);
  let secondsInterval = setInterval(secondsCounter, 1000);
  
  
  function secondsCounter() {
    seconds--;
    
    if(seconds < 0) {
      seconds = 59;
    }

    if(minutes < 10) {
      document.querySelector('#minutes').innerHTML = minutes.toString().padStart(2, '0');
    }
    else {
      document.querySelector('#minutes').innerHTML = minutes;
    }
    
    if(seconds < 10) {
      document.querySelector('#seconds').innerHTML = seconds.toString().padStart(2, '0');
    }
    else {
      document.querySelector('#seconds').innerHTML = seconds;
    }
  }
  
  function minutesCounter() {
    minutes--;
    
    if(minutes < 0) {
      counter++;
      if (counter % 9 == 0) {
        minutes = 15;
        document.querySelector('#tracker').innerHTML = 'Long Break';
        alarm.play();
      }
      else if(counter % 2 == 1) {
        minutes = 5;
        document.querySelector('#tracker').innerHTML = 'Short Break';
        alarm.play();
      }
      else {
        minutes = 25;
        document.querySelector('#tracker').innerHTML = 'Pomodoro!!!';
        alarm.play();
      }
    }
  }
}

main();