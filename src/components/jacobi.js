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
const checkx1 = (x1, newx1) => {
  return Math.abs((newx1 - x1) / newx1);
};
const checkx2 = (x2, newx2) => {
  return Math.abs((newx2 - x2) / newx2);
};
const checkx3 = (x3, newx3) => {
  return Math.abs((newx3 - x3) / newx3);
};
const checkx4 = (x4, newx4) => {
  return Math.abs((newx4 - x4) / newx4);
};
var i = 1;
var x1 = 0,
  x2 = 0,
  x3 = 0,
  x4 = 0;
var newx1, newx2, newx3, newx4;
var errorx1, errorx2, errorx3, errorx4;
do {
  newx1 = fx1(x2);
  newx2 = fx2(x1, x3);
  newx3 = fx3(x2, x4);
  newx4 = fx4(x3);
  errorx1 = checkx1(x1, newx1);
  errorx2 = checkx2(x2, newx2);
  errorx3 = checkx3(x3, newx3);
  errorx4 = checkx4(x4, newx4);
  console.log(
    "Iteration " +
      i +
      " x1=" +
      newx1 +
      " x2=" +
      newx2 +
      " x3=" +
      newx3 +
      " x4=" +
      newx4 +
      " errorx1=" +
      errorx1.toFixed(3) +
      " errorx2=" +
      errorx2.toFixed(3) +
      " errorx3=" +
      errorx3.toFixed(3) +
      " errorx4=" +
      errorx4.toFixed(3)
  );

  x1 = newx1;
  x2 = newx2;
  x3 = newx3;
  x4 = newx4;
  i++;
} while (
  errorx1 >= 0.001 ||
  errorx2 >= 0.001 ||
  errorx3 >= 0.001 ||
  errorx4 >= 0.001
);
