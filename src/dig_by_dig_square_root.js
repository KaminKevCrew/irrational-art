function calcXY(p, c) {
  let x = 0;
  let y = 0;

  while (y < c) {
    x += 1
    y = x * (20 * p + x);
  }
  if (y === c) return [x, y]
  x--;
  return [x, x * (20 * p + x)];
}

function calcC(digs, remainder=0) {
  return remainder * 100 + digs;
}

function calcP(root) {
  if (root === '') return 0;
  return parseInt(root);
}

function calcRemainder(y, c) {
  return c - y;
}

function parseNum(num) {
  let numStr = num.toString()
  let numStrLR = numStr.split(".")
  if (numStrLR[0].length % 2 == 1) {
    numStrLR[0] = "0" + numStrLR[0];
  }
  if (numStrLR[1] && numStrLR[1].length % 2 == 1) {
    numStrLR[1] = numStrLR[1] + "0";
  }
  return numStrLR.join('')
}

function digByDigSqRoot(num, precision=4) {
  let c, y, p;
  let remainder = 0;
  let root = '';
  let numStr = parseNum(num)
  let i = 0;
  while (root.length < precision) {
    let unusedDigs = parseInt(numStr[i] + numStr[i + 1])
    c = calcC(unusedDigs, remainder);
    p = calcP(root);
    let temp = calcXY(p, c);
    x = temp[0];
    y = temp[1];
    root += x.toString();
    remainder = calcRemainder(y, c)
    if (i === numStr.length - 2) {
      if (remainder === 0) return root;
      numStr = numStr + "00";
    }
    i += 2;
  }
  return root;
}

export default {digByDigSqRoot};