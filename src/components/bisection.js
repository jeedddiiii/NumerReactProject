function func(x) {
  return x * x * x * x - 13;
}
function bisection(xl, xr) {
  do {
    let xm = (xl + xr) / 2;
    if (func(xm) * func(xr) < 0) {
      error = ((xm - xl) / xm);
      console.log("XM : " + xm.toFixed(6) + " XR : " + xr.toFixed(6) + " XL : " + xl.toFixed(6) + " error : " + error.toFixed(6));
      xl = xm;
    } else if(func(xm) * func(xr) > 0)
    {
      error = ((xm - xr) / xm);
      console.log("XM : " + xm.toFixed(6) + " XR : " + xr.toFixed(6) + " XL : " + xl.toFixed(6) + " error : " + error.toFixed(6));
      xr = xm;
    }
    else {
        console.log("XM : " + xm.toFixed(6) + " XR : " + xr.toFixed(6) + " XL : " + xl.toFixed(6) + " error : " + error.toFixed(6));
        break;    
    }
  } while (error >= 0.000001 || error <= -0.0000001);

}
let xl = 1.5,
  xr = 2,
  error = 0;
bisection(xl, xr);
