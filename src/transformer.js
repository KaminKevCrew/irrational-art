import trackTransforms from './track_transforms';
import render from './render';

export const transformer = (ctx, digits, zCount) => {

  trackTransforms(ctx);

  function redraw() {

    // Clear the entire canvas
    var p1 = ctx.transformedPoint(0, 0);
    var p2 = ctx.transformedPoint(canvas.width, canvas.height);
    ctx.clearRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);

    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();

    render(digits, ctx);

  }
  redraw();

  var lastX = canvas.width / 2, lastY = canvas.height / 2;

  var dragStart, dragged;

  canvas.addEventListener('mousedown', function (evt) {
    document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
    lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
    lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
    dragStart = ctx.transformedPoint(lastX, lastY);
    dragged = false;
  }, false);

  canvas.addEventListener('mousemove', function (evt) {
    lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
    lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);
    dragged = true;
    if (dragStart) {
      var pt = ctx.transformedPoint(lastX, lastY);
      ctx.translate(pt.x - dragStart.x, pt.y - dragStart.y);
      redraw();
    }
  }, false);

  canvas.addEventListener('mouseup', function (evt) {
    dragStart = null;
    if (!dragged) {
      zoom(evt.shiftKey ? -1 : 1);
    }
  }, false);

  var scaleFactor = 1.01;

  var zoom = function (clicks) {
    let zMax = 50;
    let zMin = -50;
    debugger
    if (zCount <= zMin && clicks > 0 ||
        zCount >= zMax && clicks < 0 ||
        zCount >= zMin && zCount <= zMax
        ) { // zoom in 

      zCount += clicks;
      zTech(clicks);
    } 
  }

  var zTech = function (clicks) {
    var pt = ctx.transformedPoint(lastX, lastY);
    ctx.translate(pt.x, pt.y);
    var factor = Math.pow(scaleFactor, clicks);
    ctx.scale(factor, factor);
    ctx.translate(-pt.x, -pt.y);
    redraw();
  }

  var handleScroll = function (evt) {
    var delta = evt.wheelDelta ? evt.wheelDelta / 40 : evt.detail ? -evt.detail : 0;
    if (delta) zoom(delta);
    return evt.preventDefault() && false;
  };

  canvas.addEventListener('DOMMouseScroll', handleScroll, false);
  canvas.addEventListener('mousewheel', handleScroll, false);
};

export default transformer;