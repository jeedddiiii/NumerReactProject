const func = (x) => {
  return 43 * x - 1;
};

const falseposition = (xl, xr) => {
  do {
    fxr = func(xr);
    fxl = func(xl);
    let x1 = (xl * fxr - xr * fxl) / (fxr - fxl);
    if (func(x1).toFixed(6) * func(xr).toFixed(6) < 0) {
      error = (x1 - xl) / x1;
      console.log(
        "X1 : " +
          x1.toFixed(6) +
          " XR : " +
          xr.toFixed(6) +
          " XL : " +
          xl.toFixed(6) +
          " error : " +
          error.toFixed(6)
      );
      xl = x1;
    } else {
      error = (x1 - xr) / x1;
      console.log(
        "X1 : " +
          x1.toFixed(6) +
          " XR : " +
          xr.toFixed(6) +
          " XL : " +
          xl.toFixed(6) +
          " error : " +
          Math.abs(error).toFixed(6)
      );
      xr = x1;
    }
    err = Math.abs(error);
  } while (err >= 0.000001);
};
let xl = 0.02,
  xr = 0.03,
  error = 0;
xOld = 0;
let fxr, fxl;
falseposition(xl, xr);
