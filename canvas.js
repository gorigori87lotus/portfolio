// JavaScript source code

var drawFlag = false;
var oldX = 0;
var oldY = 0;
var penColor = "rgba(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", 1)";


// マウスがウィンドウ上を動いているとき
window.addEventListener("load", function () {
    var can = document.getElementById("canvas");
    this.addEventListener("mousemove", draw, true);
    this.addEventListener("mouseover", function (e) {
        drawFlag = true;
        oldX = e.clientX;
        oldY = e.clientY;
    }, false);

    
    
}, true);

window.addEventListener("click", function () {
    penColor = "rgba(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", 1)";
}, false);

document.addEventListener("keydown", function (e) {

    if (e.keyCode == 87) {
        drawFlag = false;
        oldX = e.clientX;
        oldY = e.clientY;
    }

    else if (e.keyCode == 82) {
        var can = document.getElementById("canvas");
        var context = can.getContext("2d");
        context.clearRect(0, 0, 1900, 1200);
    }

    
},false);

document.addEventListener("keyup", function (e) {
    if (e.keyCode == 87) {
        drawFlag = true;
    }
}, false);

// 描画処理
function draw(e) {
    if (!drawFlag) return;
    var x = e.clientX;
    var y = e.clientY;
    var can = document.getElementById("canvas");
    var context = can.getContext("2d");
    context.strokeStyle = penColor;
    context.lineWidth = 14;
    context.lineJoin = "round";  // 連結部分を丸にする
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(oldX, oldY);
    context.lineTo(x, y);
    context.stroke();
    context.closePath();
    oldX = x;
    oldY = y;
}
