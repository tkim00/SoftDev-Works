var c = document.getElementById('slate');
var ctx = c.getContext("2d");
ctx.fillStyle = "#ff0000";
let state = "rect";
document.getElementById("clear").addEventListener("click", _=>clear());
const clear = _=> {
  ctx.clearRect(0,0,c.width,c.height);
}
c.addEventListener("click", e=>{if (state === "rect") {
    ctx.fillRect(e.pageX,e.pageY,100,200);
}});

/*
var c = document.getElementById('slate');
var ctx = c.getContext("2d");
ctx.fillStyle = "#ff0000";
ctx.fillRect(50,50,100,200)
*/
