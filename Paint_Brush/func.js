var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 10;
// only paint if mouse is being dragged (moved while the button is pressed)
var isPainting = false;
var can = document.querySelector("canvas");

function setWidth(value) {
    can.width = value;
}

function setHeight(value) {
    can.height = value;
}

function clearCanvas() {
    context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function getPosFromEvent(e) {
    var rect = paintcanvas.getBoundingClientRect();
    var clientX, clientY;
    if (e.touches && e.touches.length) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    } else {
        clientX = e.clientX;
        clientY = e.clientY;
    }
    // account for CSS scaling of canvas
    var scaleX = paintcanvas.width / rect.width;
    var scaleY = paintcanvas.height / rect.height;
    var x = (clientX - rect.left) * scaleX;
    var y = (clientY - rect.top) * scaleY;
    return { x: x, y: y };
}

function startPaint(e) {
    isPainting = true;
    if (e && e.preventDefault) e.preventDefault();
    var pos = getPosFromEvent(e || window.event);
    paintCircle(pos.x, pos.y);
}

function endPaint(e) {
    isPainting = false;
}

function doPaint(e) {
    if (!e) return;
    if (e.preventDefault) e.preventDefault();
    if (isPainting) {
        var pos = getPosFromEvent(e);
        paintCircle(pos.x, pos.y);
    }
}

function setColor(newColor) {
    color = newColor;
}

function resizeBrush(newSize) {
    radius = newSize;
    document.getElementById("sizeOutput").value = newSize;
}

function paintCircle(x, y) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}

// verify the given value is actually a number
function isNumeric(value) {
    return !isNaN(value);
}