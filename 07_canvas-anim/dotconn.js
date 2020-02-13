const canvas = document.getElementById('playground');
const ctx = canvas.getContext('2d');
const start_butt = document.getElementById('start');
const stop_butt = document.getElementById('stop');
//var start = null;
var radius = 0;
var state = null;
var req; // --> for canceling the requestAnimationFrame

const drawCircle = function() {
  // if(!start) start = timestamp;
  // var progress = timestamp - start;
  // if(progress < 2000) {
  //   window.requestAnimationFrame(drawCircle)
  // }
  req = window.requestAnimationFrame(drawCircle);
  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawCircleH(radius);
  if (radius >= canvas.width/2) {
    state = "shrink";
  }
  if (radius <= 0) {
    state = "expand";
  }
  if (state === "shrink") {
    radius -= 1;
  }
  if (state === "expand") {
    radius += 1;
  }
}

const drawCircleH = function(radius) {
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
  ctx.fill();
}

start_butt.addEventListener('click', () => {
  // if (state == null) {
  //   console.log("press");
  //   console.log(state);
  //   console.log(radius);
  //   window.requestAnimationFrame(drawCircle);
  //   drawCircle();
  // }
  if (state != null) {
    window.cancelAnimationFrame(req);
  }
  drawCircle();
})
stop_butt.addEventListener('click', () => {
  window.cancelAnimationFrame(req);
  //state = null;
});
