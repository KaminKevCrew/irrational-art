/***************************     unitBuilder     ******************************/
// allows me to easily set the initial size of each line
let scale = 10;
// Builds offsets for all ten positions being used.

function offsetCalc(angle, scale) {
  let x = Math.sin(angle * Math.PI / 180) * scale * -1;
  let y = Math.cos(angle * Math.PI / 180) * scale * -1;
  return { x, y };
}

const OFFSETS = {
  '0': offsetCalc(0, scale), '1': offsetCalc(36, scale),
  '2': offsetCalc(72, scale), '3': offsetCalc(108, scale),
  '4': offsetCalc(144, scale), '5': offsetCalc(180, scale),
  '6': offsetCalc(216, scale), '7': offsetCalc(252, scale),
  '8': offsetCalc(288, scale), '9': offsetCalc(324, scale)
}

const COLORS = {
  '0': "#EDB504", '1': "#F19809", '2': "#C73325", '3': "#D8003A", '4': "#AB085E",
  '5': "#8A228A", '6': "#5154A6", '7': "#35899A", '8': "#19A664", '9': "#7DBC4A",
}

export function segmentBuilder(digits) {
  // splits the single string of data into an array
  let digArr = digits.split('');

  // maps each digit to an offset with an x and y, as well as color.
  return digArr.map(dig => {
    return {
      // digit: dig,
      offset: OFFSETS[dig],
      color: COLORS[dig],
    };
  });
}
export default {segmentBuilder};