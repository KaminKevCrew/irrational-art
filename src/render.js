import {segmentBuilder} from './segment_builder'

export const render = (digits, ctx) => {
  let segments = segmentBuilder(digits)
  let digitInput = document.getElementById('digit-input')
  let userInput = document.getElementById("user-input")
  let defLen = digitInput.defaultValue = "500";
  let maxLength = digitInput.value
  maxLength = maxLength ? parseInt(maxLength) : defLen
  
  if (digits.length < 10) {
    userInput.defaultValue = digits;
    digitInput.defaultValue = digits.length;
  } else if (maxLength > digits.length) {
    userInput.defaultValue = digits.slice(0, 10);
    digitInput.defaultValue = digits.length;
  } else {
    userInput.defaultValue = digits.slice(0, 10);
  }


  // checks for window resizing
  window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  // ctx.setTransform(1, 0, 0, 1, 0, 0);

  let startArr = [canvas.width / 2, canvas.height / 2];

  let start = { 'x': startArr[0], 'y': startArr[1] }
  let finish = { 'x': startArr[0], 'y': startArr[1] }
  let length = segments.length < maxLength ? segments.length : maxLength;

  for (let i = 0; i < length; i++) {
    let segment = segments[i];
    finish['x'] -= segment['offset']['x'];
    finish['y'] += segment['offset']['y'];

    ctx.beginPath();
    if (i == 0) {
      ctx.strokeStyle = "#FFFFFF";
    } else if (i == length - 1) {
      ctx.strokeStyle = "#000000";
    } else {
      ctx.strokeStyle = segment['color'];
    }

    ctx.moveTo(start['x'], start['y']);
    ctx.lineTo(finish['x'], finish['y']);
    ctx.stroke();
    start['x'] = finish['x'];
    start['y'] = finish['y'];
  }
  // Scale to fit here
}

export default render;