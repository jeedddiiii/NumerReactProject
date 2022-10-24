const cramersRule = (a, result, det) => {
  x1 =
    (result[0] * a[1][1] * a[2][2] +
      a[0][1] * a[1][2] * result[2] +
      a[0][2] * result[1] * a[2][1] -
      a[0][2] * a[1][1] * result[2] -
      result[0] * a[1][2] * a[2][1] -
      a[0][1] * result[1] * a[2][2]) /
    det;
  x2 =
    (a[0][0] * result[1] * a[2][2] +
      result[0] * a[1][2] * a[2][0] +
      a[0][2] * a[1][0] * result[2] -
      a[0][2] * result[1] * a[2][0] -
      a[0][0] * a[1][2] * result[2] -
      result[0] * a[1][0] * a[2][2]) /
    det;
  x3 =
    (a[0][0] * a[1][1] * result[2] +
      a[0][1] * result[1] * a[2][0] +
      result[0] * a[1][0] * a[2][1] -
      result[0] * a[1][1] * a[2][0] -
      a[0][0] * result[1] * a[2][1] -
      a[0][1] * a[1][0] * result[2]) /
    det;
  return x1, x2, x3;
};
var x1, x2, x3;
var a = [
  [-2, 3, 1],
  [3, 4, -5],
  [1, -2, 1],
];
var result = [9, 0, -4];
var det =
  a[0][0] * a[1][1] * a[2][2] +
  a[0][1] * a[1][2] * a[2][0] +
  a[0][2] * a[1][0] * a[2][1] -
  a[0][2] * a[1][1] * a[2][0] -
  a[0][1] * a[1][0] * a[2][2] -
  a[0][0] * a[1][2] * a[2][1];

cramersRule(a, result, det);
console.log("x1 = " + x1 + " x2 = " + x2 + " x3 = " + x3);
