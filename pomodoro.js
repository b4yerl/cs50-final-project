/*
25
5
x4
25
15
*/

function main() {
  const btn = document.querySelector('.btn')
  btn.addEventListener('click', () => {
    if(btn.innerHTML== 'START') {
      // startTimer()
      btn.innerHTML = 'STOP'
    }
    else {
      // stopTimer()
      btn.innerHTML = 'START'
    }
  })
}

main();