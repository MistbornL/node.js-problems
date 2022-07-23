const countDown = setInterval(myTimer, 1000);
var time = 10;
function myTimer() {
  if (time <= 0) {
    clearInterval(countDown);
  }
  console.log(time);
  time--;
}
