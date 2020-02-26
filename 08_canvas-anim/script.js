var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var bstop = document.getElementById("bstop");
var bcircle = document.getElementById('bstart');
var bdvd = document.getElementById('bdvd');
var dvdImg = new Image();
dvdImg.src = 'logo_dvd.jpg';
var dvdImgLen = 50; var dvdImgWid = 50;
var aCircle, aDVD;
var canvasX = canvas.getBoundingClientRect().left;
var canvasY = canvas.getBoundingClientRect().top;
var dvdX = Math.random() * canvas.width;
var dvdY = Math.random() * canvas.height;
var dvdXInc = 5;
var dvdYInc = 5;
var radius = 0;
const dvdDirection = Object.freeze({"XPLUSYPLUS":1, "XPLUSYMINUS":2, "XMINUSYPLUS":3, "XMINUSYMINUS":4});

// var atEdge = function(xPos, yPos, mode) {
//     return xPos < 0 && yPos < 0 ? //Hit top
//         dvdDirection.XPLUSYMINUS :
//         xPos < 0 && yPos > canvas.height - dvdImgLen ? //
//         dvdDirection.XPLUSYPLUS :
//         xPos > canvas.width - dvdImgWid && yPos < 0 ?
// };

var clearCanvas = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

var drawCircle = function() {
    clearCanvas();
    drawCircleH(radius);
    aCircle = window.requestAnimationFrame(drawCircle);
    if(radius <= 0) isExpanding = true;
    if(radius >= canvas.width / 2) isExpanding = false;
    radius += isExpanding ? 1 : -1;
};

var drawCircleH = function(radius) {
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
    ctx.fill();
};

var drawDVD = function() {
    // aDVD = window.requestAnimationFrame(() => {drawDVDH();});
    // changes xInc if it's at edge
    dvdXInc = dvdX <= 0 || dvdX >= canvas.width - dvdImgWid ? -dvdYInc : dvdXInc;
    // changes yInc if it's at edge
    dvdYInc = dvdY <= 0 || dvdY >= canvas.height - dvdImgLen ? -dvdYInc : dvdYInc;
    clearCanvas();
    ctx.drawImage(dvdImg, dvdX, dvdY, dvdImgWid, dvdImgLen);
    aDVD = window.requestAnimationFrame(drawDVD);
    dvdX += dvdXInc; dvdY += dvdYInc;
    // drawDVD(dvdX + dvdXInc, dvdY + dvdYInc, dvdXInc, dvdYInc);
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
};

var drawDVDH = function(xPos, yPos) {
    // drawDVD(Math.random() * canvas.width - dvdImgWid,
    //         Math.random() * canvas.height - dvdImgLen, 5, 5);
};

bcircle.addEventListener('click', () => {
    if(!aCircle) {
        clearCanvas();
        drawCircle();
    }
});
bdvd.addEventListener('click', () => {
    if(aCircle) {
        window.cancelAnimationFrame(aCircle);
        aCircle = null;
    }
    if(!aDVD) {
        clearCanvas();
        drawDVD();
    }
});
bstop.addEventListener('click', () => {
    window.cancelAnimationFrame(aCircle);
    aCircle = null;
    window.cancelAnimationFrame(aDVD);
    aDVD = null;
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
});
