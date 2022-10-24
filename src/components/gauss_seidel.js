const fx1 = (x2) => {
  return (12 - x2) / 5;
};
const fx2 = (x1, x3) => {
  return (17 - 2 * x1 - 2 * x3) / 5;
};
const fx3 = (x2, x4) => {
  return (14 - 2 * x2 - 2 * x4) / 5;
};
const fx4 = (x3) => {
  return (7 - 2 * x3) / 5;
};
const checkx1 = (x1, oldx1) => {
  return Math.abs((x1 - oldx1) / x1);
};
const checkx2 = (x2, oldx2) => {
  return Math.abs((x2 - oldx2) / x2);
};
const checkx3 = (x3, oldx3) => {
  return Math.abs((x3 - oldx3) / x3);
};
const checkx4 = (x4, oldx4) => {
  return Math.abs((x4 - oldx4) / x4);
};

var x1 = 0,
  x2 = 0,
  x3 = 0,
  x4 = 0;
var i = 1;
var oldx1, oldx2, oldx3, oldx4;
var errorx1, errorx2, errorx3, errorx4;
do {
  oldx1 = x1;
  x1 = fx1(x2);
  oldx2 = x2;
  x2 = fx2(x1, x3);
  oldx3 = x3;
  x3 = fx3(x2, x4);
  oldx4 = x4;
  x4 = fx4(x3);
  errorx1 = checkx1(x1, oldx1);
  errorx2 = checkx2(x2, oldx2);
  errorx3 = checkx3(x3, oldx3);
  errorx4 = checkx4(x4, oldx4);
  console.log(
    "Iteration " +
      i +
      " x1=" +
      x1 +
      " x2=" +
      x2 +
      " x3=" +
      x3 +
      " x4=" +
      x4 +
      " errorx1=" +
      errorx1.toFixed(3) +
      " errorx2=" +
      errorx2.toFixed(3) +
      " errorx3=" +
      errorx3.toFixed(3) +
      " errorx4=" +
      errorx4.toFixed(3)
  );
  i++;
} while (
  errorx1 >= 0.001 ||
  errorx2 >= 0.001 ||
  errorx3 >= 0.001 ||
  errorx4 >= 0.001
);
