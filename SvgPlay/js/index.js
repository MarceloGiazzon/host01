console.clear();

TweenLite.defaultEase = Linear.easeNone;

var perf = window.performance;
var now = perf ? perf.now.bind(perf) : Date.now;
var log = console.log.bind(console); 

/*<polyline id="pencil-path" />
    <path id="smooth-path" d="" />
    <rect id="pencil-point" width="1" height="1" />*/



var drawContainer = document.querySelector("#svg-drawing");

var C = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
C.setAttributeNS(null, "id", "pencil-path");
C.setAttributeNS(null, "d", "");
drawContainer.appendChild(C);

var C = document.createElementNS("http://www.w3.org/2000/svg", "path");
C.setAttributeNS(null, "id", "smooth-path");
C.setAttributeNS(null, "d", "");
drawContainer.appendChild(C);

var C = document.createElementNS("http://www.w3.org/2000/svg", "rect");
C.setAttributeNS(null, "id", "pencil-point");
C.setAttributeNS(null, "height", "1");
C.setAttributeNS(null, "width", "1");
C.setAttributeNS(null, "d", "");
drawContainer.appendChild(C);


var pencilPoint = document.querySelector("#pencil-point");
var pencilPath = document.querySelector("#pencil-path");
var smoothPath = document.querySelector("#smooth-path");

var points = [];
var strokes = [];
var prev = null;
var start = 0;

var tl = new TimelineMax();

var pencil = new Draggable(pencilPoint, {
  bounds: drawContainer,
  trigger: drawContainer,
  cursor: "crosshair",
  onDrag: onDrag,
  onDragEnd: onDragEnd,
  onPress: onPress
});

var auxCount = 0;
var auxId = "";

function onPress() {

  auxCount += 1;

  auxId = "idPressCount" + auxCount;

  console.log("onPress(). auxCount = " + auxCount);

  tl.clear();

  start = now();

  var G = document.getElementById("svg-drawing");

  var C = document.createElementNS("http://www.w3.org/2000/svg", "path");
  C.setAttributeNS(null, "id", auxId);
  C.setAttributeNS(null, "d", "");
  C.setAttributeNS(null, "stroke", "#fafafa");
  C.setAttributeNS(null, "stroke-width", 3);
  C.setAttributeNS(null, "fill", "none");
  G.appendChild(C);

  var x = this.pointerX;
  var y = this.pointerY;

  console.log("pointerX = " + this.pointerX
          //+   " posLeft = " + posLeft
          +   " pointerY = " + this.pointerY
          //+   " posTop = " + posTop
          +   " x = " + x
          +   " y = " + y
          );

  var stroke = {
    elapsed: 0,
    time: start,
    dist: 0,
    x: x,
    y: y
  };

  points = [x, y];
  strokes = [stroke];
  prev = stroke;

  TweenLite.set(pencilPoint, { x: x, y: y });
  this.update();
}

function onDrag() {

  var time = now();
  var elapsed = time - prev.time;

  var dist = getDistance(prev, this);

  var x = this.endX;
  var y = this.endY;

  var stroke = {
    elapsed: elapsed,
    time: time,
    dist: prev.dist + dist,
    x: x,
    y: y
  };

  prev = stroke;
  strokes.push(stroke);
  points.push(x, y);

  console.log("onDrag. x,y = " + x + "," + y);

  pencilPath.setAttribute("points", points);
}

function onDragEnd() {

  var totalTime = (now() - start) / 1000;
  var totalDist = strokes[strokes.length - 1].dist;

  console.log("onDragEnd. points = " + points
          +   "solve(points) = " + solve(points)
          +   " auxId = " + auxId);

  var auxSmoothPath = document.getElementById(auxId);
  auxSmoothPath.setAttribute("d", solve(points));


  var G = document.getElementById("svg-drawing");
  var N = document.createElementNS("http://www.w3.org/2000/svg","rect");
  N.setAttributeNS(null, "height", "15");
  N.setAttributeNS(null, "width", "15");
  var idAni   = "ani" + auxId;
  N.setAttributeNS(null, "id", auxId + "rect");
  N.setAttributeNS(null, "fill", "blue");
  N.setAttributeNS(null, "y", "0");
  N.setAttributeNS(null, "x", "0");
  var ani = document.createElementNS("http://www.w3.org/2000/svg","animateMotion");
  ani.setAttribute("id", idAni);
  ani.setAttribute("begin", "0s");
  ani.setAttribute("dur", "4s");
  ani.setAttribute("repeatCount", "indefinite");
  ani.setAttribute("rotate", "auto");
  var mpath = document.createElementNS("http://www.w3.org/2000/svg","mpath");
  mpath.setAttributeNS ("http://www.w3.org/1999/xlink", "href", "#" + auxId);
  ani.appendChild(mpath);
  N.appendChild(ani);
  G.appendChild(N);

  strokes.reduce(function (tl, stroke) {

    var time = stroke.elapsed / 1000;
    var draw = stroke.dist / totalDist * 100 + "%";

    return tl.to(auxSmoothPath, time, { drawSVG: draw });
  }, tl);

  pencilPath.setAttribute("points", "");
}

function getDistance(p1, p2) {
  var dx = p2.x - p1.x;
  var dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function solve(data, k) {

  if (k == null) k = 1;

  var size = data.length;
  var last = size - 4;

  var path = "M" + data[0] + "," + data[1];

  for (var i = 0; i < size - 2; i += 2) {

    var x0 = i ? data[i - 2] : data[0];
    var y0 = i ? data[i - 1] : data[1];

    var x1 = data[i + 0];
    var y1 = data[i + 1];

    var x2 = data[i + 2];
    var y2 = data[i + 3];

    var x3 = i !== last ? data[i + 4] : x2;
    var y3 = i !== last ? data[i + 5] : y2;

    var cp1x = x1 + (x2 - x0) / 6 * k;
    var cp1y = y1 + (y2 - y0) / 6 * k;

    var cp2x = x2 - (x3 - x1) / 6 * k;
    var cp2y = y2 - (y3 - y1) / 6 * k;

    path += " C" + cp1x + "," + cp1y + "," + cp2x + "," + cp2y + "," + x2 + "," + y2;
  }

  return path;
}

// Control points for initial 'CodePen' doodle
var controls = [200, 50, 125, 75, 125, 190, 200, 200, 225, 150, 255, 150, 225, 150, 220, 200, 255, 200, 255, 150, 230, 150, 260, 155, 300, 150, 270, 150, 270, 200, 300, 200, 300, 190, 310, 50, 300, 75, 305, 200, 305, 190, 335, 170, 355, 150, 330, 150, 320, 190, 350, 200, 370, 180, 367, 150, 370, 230, 367, 200, 375, 150, 405, 150, 400, 180, 375, 170, 400, 180, 445, 150, 420, 150, 415, 190, 440, 200, 460, 170, 460, 150, 460, 200, 460, 155, 490, 155, 490, 200];

// 1.5 tension to make it more round
//smoothPath.setAttribute("d", solve(controls, 1.5));